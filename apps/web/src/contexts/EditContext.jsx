import React, { createContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useLocation } from 'react-router-dom';

export const EditContext = createContext();

export const EditProvider = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { toast } = useToast();
  const location = useLocation();

  // Restore edited content on load
  useEffect(() => {
    const restoreContent = () => {
      const elements = document.querySelectorAll('[data-editable="true"]');
      elements.forEach((el, index) => {
        const path = window.location.pathname;
        const key = `edited_${path}_${index}`;
        const savedText = localStorage.getItem(key);
        
        // Only restore if we have saved text and aren't actively editing it
        if (savedText && el.innerText !== savedText && document.activeElement !== el) {
          el.innerText = savedText;
        }
      });
    };

    // Slight delay to ensure translations are loaded first
    const timer = setTimeout(restoreContent, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Handle edit mode toggling and save
  useEffect(() => {
    const applyEditability = () => {
      const elements = document.querySelectorAll('[data-editable="true"]');
      elements.forEach(el => {
        el.contentEditable = isEditMode;
        if (isEditMode) {
          el.classList.add('editable-active');
        } else {
          el.classList.remove('editable-active');
        }
      });
    };

    applyEditability();

    // Observer for dynamically added elements
    const observer = new MutationObserver(() => {
      if (isEditMode) applyEditability();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    const handleBlur = (e) => {
      if (isEditMode && e.target.getAttribute('data-editable') === 'true') {
        const elements = Array.from(document.querySelectorAll('[data-editable="true"]'));
        const index = elements.indexOf(e.target);
        
        if (index !== -1) {
          const path = window.location.pathname;
          const key = `edited_${path}_${index}`;
          localStorage.setItem(key, e.target.innerText);
          
          toast({
            title: "Content Saved",
            description: "Changes saved to local overrides (translation files cannot be edited directly in browser).",
          });
        }
      }
    };

    // Use capture phase to catch blur events on elements
    if (isEditMode) {
      document.addEventListener('blur', handleBlur, true);
    }

    return () => {
      observer.disconnect();
      document.removeEventListener('blur', handleBlur, true);
    };
  }, [isEditMode, toast, location.pathname]);

  return (
    <EditContext.Provider value={{ isEditMode, setIsEditMode }}>
      {children}
    </EditContext.Provider>
  );
};