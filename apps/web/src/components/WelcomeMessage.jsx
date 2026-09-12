import React from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <motion.p
      data-editable="true"
      className='text-sm text-white leading-5 w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      Écrivez dans le chat ce que vous souhaitez créer.
    </motion.p>
  );
};

export default WelcomeMessage;