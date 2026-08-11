import React from 'react';

/**
 * InteractiveText component
 * Wraps every word individually so hovering over ANY word highlights, zooms,
 * and communicates seamlessly with the custom cursor.
 */
export const InteractiveText = ({ text, className = "", wordClassName = "", as: Component = 'span' }) => {
  if (!text || typeof text !== 'string') return text;

  const words = text.split(' ');

  return (
    <Component className={className}>
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[^\w]/g, '').toUpperCase();
        return (
          <span key={idx} className="inline-block whitespace-normal">
            <span
              className={`interactive-word ${wordClassName}`}
              data-cursor-text={cleanWord || undefined}
            >
              {word}
            </span>
            {idx < words.length - 1 && ' '}
          </span>
        );
      })}
    </Component>
  );
};

export default InteractiveText;
