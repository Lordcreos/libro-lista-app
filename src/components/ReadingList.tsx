import React from 'react';
import { useBookStore } from '../stores/bookStore';
import BookCard from './BookCard';
import { motion, AnimatePresence } from 'framer-motion';

const ReadingList: React.FC = () => {
  const { readingList, removeFromReadingList } = useBookStore();

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Mi Lista de Lectura</h2>
      {readingList.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No hay libros en tu lista de lectura.
        </motion.p>
      ) : (
        <AnimatePresence>
          {readingList.map((book) => (
            <motion.div
              key={book.ISBN}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BookCard
                book={book}
                onRemoveFromReadingList={() => removeFromReadingList(book.ISBN)}
                inReadingList
              />
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </div>
  );
};

export default ReadingList;
