import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';
import { EditContext } from '@/contexts/EditContext';
import { useToast } from '@/components/ui/use-toast';

const IntegrationPowerSection = () => {
  const { t, i18n } = useTranslation();
  const { isEditMode } = useContext(EditContext);
  const { toast } = useToast();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Load saved content or fallback to translations on mount and language change
  useEffect(() => {
    const lang = i18n.language;
    const savedTitle = localStorage.getItem(`integration-section-title-${lang}`);
    const savedBody = localStorage.getItem(`integration-section-body-${lang}`);

    setTitle(savedTitle || t('nos_activites.integration_power.title'));
    setBody(savedBody || t('nos_activites.integration_power.description'));
  }, [i18n.language, t]);

  const handleTitleBlur = (e) => {
    const newText = e.currentTarget.innerText.trim();
    if (newText !== title) {
      setTitle(newText);
      localStorage.setItem(`integration-section-title-${i18n.language}`, newText);
      toast({
        title: "Content Saved",
        description: "Title updated successfully in local storage.",
      });
    }
  };

  const handleBodyBlur = (e) => {
    const newHtml = e.currentTarget.innerHTML;
    if (newHtml !== body) {
      setBody(newHtml);
      localStorage.setItem(`integration-section-body-${i18n.language}`, newHtml);
      toast({
        title: "Content Saved",
        description: "Body text updated successfully in local storage.",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto -mt-10 md:-mt-16 relative z-10 px-4 mb-16"
    >
      <Card className="border-t-4 border-t-emerald-500 shadow-xl bg-white overflow-hidden">
        <div className="absolute top-0 right-0 p-6 md:p-8 opacity-[0.03] pointer-events-none">
          <Leaf className="w-32 h-32 md:w-48 md:h-48 text-emerald-900" />
        </div>
        <CardContent className="p-6 sm:p-8 md:p-12 relative z-10">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="bg-emerald-100 p-3 rounded-full text-emerald-600 shrink-0">
              <Leaf className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h2 
              contentEditable={isEditMode}
              onBlur={handleTitleBlur}
              suppressContentEditableWarning
              className={`text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-900 tracking-tight transition-all duration-200 outline-none
                ${isEditMode ? 'border-b-2 border-dashed border-emerald-400 bg-emerald-50/50 p-2 rounded w-full' : ''}`}
            >
              {title}
            </h2>
          </div>
          
          <div 
            contentEditable={isEditMode}
            onBlur={handleBodyBlur}
            suppressContentEditableWarning
            className={`text-base md:text-lg text-stone-700 leading-relaxed space-y-4 md:space-y-6 transition-all duration-200 outline-none
                       [&>strong]:text-emerald-800 [&>strong]:font-semibold [&>strong]:bg-emerald-50 [&>strong]:px-1 [&>strong]:rounded
                       ${isEditMode ? 'border-2 border-dashed border-emerald-400 bg-emerald-50/30 p-4 rounded-lg' : ''}`}
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default IntegrationPowerSection;