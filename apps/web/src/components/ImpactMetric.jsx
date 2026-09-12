import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const ImpactMetric = ({ icon: Icon, value, label, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="p-3 bg-white/20 rounded-lg mb-4">
            <Icon className="w-8 h-8 text-emerald-300" />
          </div>
          <h4 className="text-4xl font-bold mb-2 tracking-tight">{value}</h4>
          <p className="text-emerald-100 font-medium">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ImpactMetric;