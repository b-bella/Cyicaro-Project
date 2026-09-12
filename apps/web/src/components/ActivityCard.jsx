import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ActivityCard = ({ image, title, description, btnText, onClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-emerald-100 flex flex-col h-full group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-stone-800 mb-2 line-clamp-1">{title}</h3>
        <p className="text-stone-600 mb-6 flex-grow line-clamp-3">{description}</p>
        <Button 
          onClick={onClick}
          className="w-full mt-auto bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
        >
          {btnText}
        </Button>
      </div>
    </motion.div>
  );
};

export default ActivityCard;