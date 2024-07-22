import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FilterBar from './components/FilterBar';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useBookStore } from './stores/bookStore';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const { readingList } = useBookStore();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Catálogo de Libros JELOU</h1>
        <Tabs>
          <TabList>
            <Tab>Libros</Tab>
            <Tab>Lista de Lectura ({readingList.length})</Tab>
          </TabList>
          
          <TabPanel>
            <FilterBar />
            <BookList />
          </TabPanel>
          
          <TabPanel>
            <ReadingList />
          </TabPanel>
        </Tabs>
      </div>
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default App;
