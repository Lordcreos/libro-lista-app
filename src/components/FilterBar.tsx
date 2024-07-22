import React from 'react';
import { useBookStore } from '../stores/bookStore';
import { motion } from 'framer-motion';

const FilterBar: React.FC = () => {
  const { setFilter } = useBookStore();

  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.select
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <option value="">Todos los géneros</option>
        <option value="Fantasía">Fantasía</option>
        <option value="Ciencia ficción">Ciencia ficción</option>
        <option value="Terror">Terror</option>
        <option value="Zombies">Zombies</option>
      </motion.select>
    </motion.div>
  );
};

export default FilterBar;