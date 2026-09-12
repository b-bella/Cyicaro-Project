import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';

const CertificationBadge = ({ name, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
        <Award className="w-8 h-8" />
      </div>
      <Badge variant="secondary" className="mb-3 px-3 py-1 font-semibold text-primary bg-primary/10 border-none">
        {name}
      </Badge>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
};

export default CertificationBadge;