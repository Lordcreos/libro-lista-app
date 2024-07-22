import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useBookStore } from '../stores/bookStore';
import BookCard from './BookCard';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

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

interface ApiResponse {
  default?: {
    library?: { book: Book }[];
  };
}

const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch('https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: ApiResponse = await response.json();

  if (data.default && Array.isArray(data.default.library)) {
    return data.default.library.map(item => item.book);
  } else {
    console.error('Unexpected data structure:', data);
    throw new Error('Unexpected data structure');
  }
};

const BookList: React.FC = () => {
  const { data: books, isLoading, error } = useQuery({
    queryKey: ['books'],
    queryFn: fetchBooks,
  });

  const { addToReadingList, filter } = useBookStore();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error instanceof Error ? error.message : 'Unknown error'}</div>;

  const filteredBooks = books?.filter((book) =>
    filter === '' || (book.genre && book.genre.toLowerCase() === filter.toLowerCase())
  ) || [];

  const handleAddToReadingList = (book: Book) => {
    const added = addToReadingList(book);
    if (added) {
      toast.success(`${book.title} ha sido añadido a la lista de lectura`);
    } else {
      toast.warn(`${book.title} ya está en la lista de lectura`);
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {filteredBooks.map((book, index) => (
        <motion.div
          key={book.ISBN}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <BookCard
            book={book}
            onAddToReadingList={() => handleAddToReadingList(book)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BookList;
