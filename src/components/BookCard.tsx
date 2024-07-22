import React from 'react';
import { motion } from 'framer-motion';

interface Book {
  title: string;
  author: {
    name: string;
  };
  cover: string;
  genre: string;
  pages: number;
  ISBN: string;
}

interface BookCardProps {
  book: Book;
  onAddToReadingList?: () => void;
  onRemoveFromReadingList?: () => void;
  inReadingList?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ 
  book, 
  onAddToReadingList, 
  onRemoveFromReadingList, 
  inReadingList 
}) => {
  return (
    <motion.div 
      className="bg-white shadow-md rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={book.cover} alt={book.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{book.title}</h3>
        <p className="text-gray-700 text-base mb-2">por {book.author.name}</p>
        <p className="text-gray-600 text-sm mb-2">{book.genre} • {book.pages} páginas</p>
        {inReadingList ? (
          <motion.button
            onClick={onRemoveFromReadingList}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Quitar de la lista
          </motion.button>
        ) : (
          <motion.button
            onClick={onAddToReadingList}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Añadir a la lista
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default BookCard;
