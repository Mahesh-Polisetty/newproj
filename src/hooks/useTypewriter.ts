import { useState, useEffect } from 'react';

const useTypewriter = (texts: string[], typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (currentText === texts[currentIndex]) {
        // Finished typing current text, wait before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetween);
      } else {
        // Type next character
        timeout = setTimeout(() => {
          setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
        }, typingSpeed);
      }
    } else {
      if (currentText === '') {
        // Finished deleting, move to next text
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      } else {
        // Delete one character
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping, texts, typingSpeed, deletingSpeed, delayBetween]);

  return currentText;
};

export default useTypewriter;
