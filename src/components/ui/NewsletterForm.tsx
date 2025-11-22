import React, { useState } from 'react';
import { FaEnvelope, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa';

interface NewsletterFormProps {
  /**
   * Variant style for the form
   * @default 'default'
   */
  variant?: 'default' | 'minimal' | 'hero';

  /**
   * Custom placeholder text
   * @default 'Enter your email'
   */
  placeholder?: string;

  /**
   * Custom submit button text
   * @default 'Join Waitlist'
   */
  buttonText?: string;

  /**
   * Show description text
   * @default true
   */
  showDescription?: boolean;

  /**
   * Custom className
   */
  className?: string;

  /**
   * Callback when form is successfully submitted
   */
  onSuccess?: (email: string) => void;
}

/**
 * NewsletterForm Component
 *
 * Email capture form for whitelist/newsletter signup.
 * Frontend-only validation with success/error states.
 * Backend integration point ready for API connection.
 *
 * Example:
 * ```tsx
 * <NewsletterForm variant="hero" buttonText="Join Whitelist" />
 * ```
 */
export const NewsletterForm: React.FC<NewsletterFormProps> = ({
  variant = 'default',
  placeholder = 'Enter your email',
  buttonText = 'Join Waitlist',
  showDescription = true,
  className = '',
  onSuccess
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Email validation regex
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate API call (replace with actual backend integration)
    try {
      // TODO: Replace with actual API endpoint
      // Example:
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      //
      // if (!response.ok) throw new Error('Subscription failed');

      // Simulated delay for demo
      await new Promise(resolve => setTimeout(resolve, 1500));

      // For now, just log to console (backend integration point)
      console.log('Newsletter signup:', email);

      setStatus('success');
      setEmail('');

      if (onSuccess) {
        onSuccess(email);
      }

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
      console.error('Newsletter signup error:', error);
    }
  };

  const isHero = variant === 'hero';
  const isMinimal = variant === 'minimal';

  return (
    <div className={`${className}`}>
      {showDescription && !isMinimal && (
        <p
          className="text-muted mb-4 text-sm md:text-base"
        >
          Get notified about token launch, exclusive updates, and early access to new privacy tools.
        </p>
      )}

      <form onSubmit={handleSubmit} className="w-full">
        <div className={`flex flex-col ${isHero ? 'md:flex-row' : 'sm:flex-row'} gap-3`}>
          {/* Email Input */}
          <div className="relative flex-1">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted" />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              
              placeholder={placeholder}
              disabled={status === 'loading' || status === 'success'}
              className={`w-full pl-12 pr-4 py-3 ${
                isHero ? 'py-4 text-lg' : 'py-3'
              } bg-zinc-800 border ${
                status === 'error'
                  ? 'border-red-500'
                  : status === 'success'
                  ? 'border-green-500'
                  : 'border-zinc-700'
              } rounded-lg text-white placeholder-muted focus:outline-none focus:border-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-label="Email address"
              aria-describedby={status === 'error' ? 'error-message' : undefined}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`btn-primary ${
              isHero ? 'px-8 py-4 text-lg' : 'px-6 py-3'
            } inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed`} : {}} : {
          >
            {status === 'loading' && (
              <FaSpinner className="animate-spin" />
            )}
            {status === 'success' && (
              <FaCheckCircle />
            )}
            {buttonText}
          </button>
        </div>

        {/* Status Messages */}
        {status === 'error' && errorMessage && (
            <div
              id="error-message"
              className="mt-3 flex items-center gap-2 text-red-400 text-sm"
            >
              <FaExclamationCircle />
              <span>{errorMessage}</span>
            </div>
          )}

          {status === 'success' && (
            <div
              className="mt-3 flex items-center gap-2 text-green-400 text-sm"
            >
              <FaCheckCircle />
              <span>Success! You're on the whitelist. Check your email for confirmation.</span>
            </div>
          )}
        
      </form>

      {!isMinimal && (
        <p
          className="text-xs text-zinc-500 mt-3"
        >
          We respect your privacy. Unsubscribe at any time. No spam, ever.
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;
