import create from 'zustand';
import { persist } from 'zustand/middleware';

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

interface BookStore {
  readingList: Book[];
  filter: string;
  addToReadingList: (book: Book) => boolean; // Return true if added, false if already in list
  removeFromReadingList: (ISBN: string) => void;
  setFilter: (genre: string) => void;
}

export const useBookStore = create<BookStore>()(
  persist(
    (set, get) => ({
      readingList: [],
      filter: '',
      addToReadingList: (book) => {
        const { readingList } = get();
        const isAlreadyInList = readingList.some(item => item.ISBN === book.ISBN);
        if (isAlreadyInList) {
          return false;
        } else {
          set({ readingList: [...readingList, book] });
          return true;
        }
      },
      removeFromReadingList: (ISBN) =>
        set((state) => ({
          readingList: state.readingList.filter((book) => book.ISBN !== ISBN),
        })),
      setFilter: (genre) => set({ filter: genre }),
    }),
    {
      name: 'book-storage',
    }
  )
);
