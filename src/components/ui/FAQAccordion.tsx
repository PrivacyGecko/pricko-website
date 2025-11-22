import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import type { FAQQuestion } from '../../types/config';

interface FAQAccordionProps {
  /**
   * Array of FAQ questions to display
   */
  questions: FAQQuestion[];

  /**
   * Optional category title
   */
  categoryTitle?: string;

  /**
   * Whether to allow multiple items to be open at once
   * @default false
   */
  allowMultiple?: boolean;

  /**
   * Optional custom className
   */
  className?: string;
}

/**
 * FAQAccordion Component
 *
 * Displays FAQ questions in an accordion format with smooth animations.
 * Supports single or multiple open items.
 *
 * Example:
 * ```tsx
 * <FAQAccordion
 *   questions={getFAQCategory('general').questions}
 *   categoryTitle="General Questions"
 * />
 * ```
 */
export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  questions,
  categoryTitle,
  allowMultiple = false,
  className = ''
}) => {
  // Track which questions are open by their IDs
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => {
      const newSet = new Set(prev);

      if (newSet.has(questionId)) {
        // Close this question
        newSet.delete(questionId);
      } else {
        // Open this question
        if (!allowMultiple) {
          // If not allowing multiple, close all others
          newSet.clear();
        }
        newSet.add(questionId);
      }

      return newSet;
    });
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {categoryTitle && (
        <h3 className="text-2xl font-bold text-accent mb-6">{categoryTitle}</h3>
      )}

      <div className="space-y-3">
        {questions.map((question, index) => {
          const isOpen = openQuestions.has(question.id);

          return (
            <div
              key={question.id}
              className="bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden hover:border-accent/30 transition-colors"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleQuestion(question.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-zinc-700/30"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${question.id}`}
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {question.question}
                </span>

                <div
                  className="flex-shrink-0 text-accent"
                >
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {/* Answer Panel */}
              {isOpen && (
                  <div
                    id={`faq-answer-${question.id}`,
                      opacity: { duration: 0.2, ease: 'easeInOut' }
                    
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 border-t border-zinc-700">
                      <p className="text-zinc-300 leading-relaxed">
                        {question.answer}
                      </p>
                    </div>
                  </div>
                )}
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface FAQItemProps {
  question: FAQQuestion;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * Individual FAQ item component (can be used standalone)
 */
export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  isOpen,
  onToggle,
  delay = 0
}) => {
  return (
    <div
      className="bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden hover:border-accent/30 transition-colors"
    >
      {/* Question Button */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-zinc-700/30"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.id}`}
      >
        <span className="text-lg font-semibold text-white pr-4">
          {question.question}
        </span>

        <div
          className="flex-shrink-0 text-accent"
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </button>

      {/* Answer Panel */}
      {isOpen && (
          <div
            id={`faq-answer-${question.id}`,
              opacity: { duration: 0.2, ease: 'easeInOut' }
            
            className="overflow-hidden"
          >
            <div className="px-6 py-4 border-t border-zinc-700">
              <p className="text-zinc-300 leading-relaxed">
                {question.answer}
              </p>
            </div>
          </div>
        )}
      
    </div>
  );
};

export default FAQAccordion;
