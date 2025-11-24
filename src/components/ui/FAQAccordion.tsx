import React, { useState, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import type { FAQQuestion } from '../../types/config';

interface FAQAccordionProps {
  questions: FAQQuestion[];
  categoryTitle?: string;
  allowMultiple?: boolean;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  questions,
  categoryTitle,
  allowMultiple = false,
  className = ''
}) => {
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => {
      const newSet = new Set(prev);

      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(questionId);
      }

      return newSet;
    });
  };

  return (
    <div className={'space-y-4 ' + className}>
      {categoryTitle && (
        <h3 className="text-2xl font-bold text-accent mb-6">{categoryTitle}</h3>
      )}

      <div className="space-y-3">
        {questions.map((question, index) => {
          const isOpen = openQuestions.has(question.id);

          return (
            <FAQItem
              key={question.id}
              question={question}
              isOpen={isOpen}
              onToggle={() => toggleQuestion(question.id)}
              delay={index * 0.05}
            />
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
  delay?: number;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  isOpen,
  onToggle,
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden hover:border-accent/30 transition-colors"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-zinc-700/30"
        aria-expanded={isOpen}
        aria-controls={'faq-answer-' + question.id}
      >
        <span className="text-lg font-semibold text-white pr-4">
          {question.question}
        </span>

        <div
          className="flex-shrink-0 text-accent transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="px-6 py-4 border-t border-zinc-700">
          <p className="text-zinc-300 leading-relaxed">
            {question.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
