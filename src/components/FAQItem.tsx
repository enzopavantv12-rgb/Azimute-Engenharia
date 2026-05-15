import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-azimute-black/10 dark:border-white/10">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-7 text-left group outline-none"
      >
        <span className="font-sans font-semibold text-[17px] text-azimute-black dark:text-[#FAFAF7] pr-8 group-focus-visible:text-azimute-blue dark:group-focus-visible:text-azimute-blue-soft">
          {question}
        </span>
        <div
          className={`flex-shrink-0 text-azimute-blue transition-transform duration-300 ease-[0.22,1,0.36,1] ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          <Plus size={24} strokeWidth={1.5} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-[15px] leading-relaxed text-azimute-charcoal dark:text-[#FAFAF7]/80">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
