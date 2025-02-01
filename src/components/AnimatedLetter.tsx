import { motion } from 'framer-motion';

const AnimatedLetter = ({ letter, index }) => {
  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1}} // Delay based on index
    >
      {letter}
    </motion.span>
  );
};

export default AnimatedLetter; 