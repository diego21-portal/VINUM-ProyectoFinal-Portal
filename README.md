# 🍷 VINUM – E-commerce de Vinos & Champagnes  
### Proyecto Final – React | CODERHOUSE

VINUM es una aplicación **E-commerce desarrollada con React** que simula una tienda online de vinos y champagnes premium.  
El proyecto implementa un **flujo de compra completo**, con control real de stock, persistencia de datos en Firebase y una interfaz moderna, responsive y orientada a una experiencia de usuario profesional.
# 🍷 VINUM – E-commerce de Vinos & Champagnes  
### Proyecto Final – React | CODERHOUSE

VINUM es una aplicación **E-commerce desarrollada con React** que simula una tienda online de vinos y champagnes premium.  
El proyecto implementa un **flujo de compra completo**, con control real de stock, persistencia de datos en Firebase y una interfaz moderna, responsive y orientada a una experiencia de usuario profesional.

---

## 👤 Autor

**Diego Portal**  
Proyecto Final – Curso React  
**CODERHOUSE**  
Argentina 🇦🇷

---

## 🚀 Tecnologías utilizadas

### 🧩 Frontend
- **React 18**
- **Vite**
- **JavaScript (ES6+)**
- **React Router DOM**  
  - Navegación SPA
  - Rutas dinámicas
- **Context API**
  - Manejo global del carrito

### 🎨 UI / UX
- **Material UI (MUI)**
  - Componentes visuales
  - Sistema de estilos con `sx`
- **MUI Icons**
- **Snackbar & Alert**
  - Mensajes de error
  - Confirmaciones de acciones
- **Framer Motion**
  - Animaciones de transición
- **Diseño Responsive**
  - Desktop
  - Mobile

---

## 🔥 Backend / Base de Datos

### Firebase
- **Firebase Firestore**
  - Base de datos NoSQL
  - Persistencia de productos
  - Órdenes de compra
  - Control de stock en tiempo real

---

## 🗄️ Estructura de la base de datos

### 📦 Colección: `products`

Cada producto contiene información completa:

```
{
  id,
  name,
  price,
  stock,
  category,
  image,
  shortDescription,
  description,
  winery,
  varietal,
  alcohol,
  origin,
  capacity,
  boxQuantity,
  harvest
}
```

## 🧩 Estructura del proyecto

El proyecto está organizado siguiendo buenas prácticas de React, separando responsabilidades entre componentes, contenedores, contexto y servicios.

```
ProyectoFinal+Portal
├── node_modules
├── public
├── src/
│   │
│   ├── components/
│   │   ├── NavBar.jsx          // Barra de navegación principal
│   │   ├── Footer.jsx          // Footer informativo y responsive
│   │   ├── Item.jsx            // Card individual de producto
│   │   ├── ItemList.jsx        // Listado visual de productos
│   │   ├── ItemCount.jsx       // Selector de cantidad con validaciones
│   │   ├── CartItem.jsx        // Producto dentro del carrito
│   │   ├── PageLayout.jsx      // Estilo del fondo del sitio
│   │   ├── PagaTransition.jsx  // Animaciones de la pagina
│   │   └── CheckoutForm.jsx    // Formulario de compra
│   │
│   ├── containers/
│   │   ├── ItemListContainer.jsx    // Obtiene productos desde Firebase
│   │   ├── ItemDetailContainer.jsx  // Obtiene detalle de producto
│   │   └── Cart.jsx                 // Vista del carrito
│   │
│   ├── pages/
│   │   └── Landing.jsx         // Página de presentación inicial
│   │
│   ├── context/
│   │   ├── CartContext.js      // Contexto del carrito
│   │   └── CartProvider.jsx    // Lógica global del carrito
│   │
│   ├── services/
│   │   ├── firebase.js         // Configuración de Firebase nativo
│   │   └── orders.js           // Configuración de las compras
│   │
│   ├── scripts/
│   │   ├── firebaseNode.js     // Configuración de Firebase para el uso de comando en node
│   │   └── uploadProducts.js   // Script para cargar productos (seed)
│   │
│   ├── theme/
│   │   └── theme.js            // Configuración para el color y tema de la pagina en el Material UI
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│       
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## ⚙️ Funcionalidades principales
- Implementado con Context API

- Validaciones:

    - No se puede agregar más productos que el stock disponible

    - Se bloquea la compra cuando no hay stock

- Mensajes de error y éxito mediante Snackbar

- UX limpia y profesional (sin alert() del navegador)

## 🚀 Instalación y ejecución

### 1️⃣ Instalar dependencias
npm install

### 2️⃣ Ejecutar el proyecto en desarrollo
npm run dev

### 3️⃣ Cargar productos en Firebase (Seed)
npm run seed

## ✅ Estado final del proyecto

- Aplicación completamente funcional

- Flujo de compra completo

- Persistencia real de datos

- Control de stock automatizado

- Arquitectura ordenada y escalable

- Cumple con todos los requisitos del Proyecto Final de React# VINUM-ProyectoFinal-Portal
