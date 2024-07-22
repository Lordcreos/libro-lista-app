# Libro Lista App


**Tipo**: Módulo  
**Privado**: Sí

## Descripción

**Libro Lista App** es una aplicación web desarrollada con React, TypeScript, y TailwindCSS que permite a los usuarios explorar un catálogo de libros y gestionar una lista de lectura personalizada. Los datos de los libros se obtienen de una API externa y se almacenan en un estado global manejado por Zustand. La aplicación también utiliza Framer Motion para animaciones, React Tabs para la navegación en pestañas y React Toastify para mostrar notificaciones.

## Características

1. **Catálogo de Libros**: Muestra una lista de libros obtenidos de una API externa.
2. **Filtro por Género**: Permite a los usuarios filtrar los libros por género.
3. **Lista de Lectura**: Los usuarios pueden añadir libros a su lista de lectura personalizada.
4. **Notificaciones**: Se muestran notificaciones al añadir libros a la lista de lectura, indicando si el libro ya está en la lista o si se ha añadido con éxito.
5. **Animaciones**: Utiliza Framer Motion para animaciones suaves y atractivas.
6. **Navegación en Pestañas**: Separación del catálogo de libros y la lista de lectura en pestañas diferentes usando React Tabs.

## Estructura del Proyecto

- **src/**
  - **components/**
    - `BookCard.tsx`: Componente para mostrar la información de un libro y los botones para añadir o quitar de la lista de lectura.
    - `BookList.tsx`: Componente para mostrar la lista de libros obtenidos de la API y filtrados según el género.
    - `FilterBar.tsx`: Componente para seleccionar el género de los libros a mostrar.
    - `ReadingList.tsx`: Componente para mostrar la lista de lectura del usuario.
  - **stores/**
    - `bookStore.ts`: Archivo que define el estado global usando Zustand para manejar la lista de lectura y el filtro de género.
  - **App.tsx**: Componente principal que integra todas las partes de la aplicación y configura el proveedor de React Query y Toastify.

## Instalación

Para instalar y configurar el proyecto, sigue estos pasos:

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Lordcreos/libro-lista-app.git
   cd libro-lista-app
