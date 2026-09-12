import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const SectionHeader = ({ title, subtitle, className, alignment = 'left' }) => {
  return (
    <div className={cn("mb-12", alignment === 'center' && "text-center", className)}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {subtitle && (
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
            {subtitle}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <div 
          className={cn(
            "h-1 w-20 bg-primary rounded-full",
            alignment === 'center' && "mx-auto"
          )} 
        />
      </motion.div>
    </div>
  );
};

export default SectionHeader;