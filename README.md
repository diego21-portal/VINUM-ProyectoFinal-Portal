# 🍷 VINUM – E-commerce de Vinos & Champagnes

---

## Proyecto Final – React | CODERHOUSE

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
  - Inicio de sesión y guardado de datos del perfil del usuario

---

## 🗄️ Estructura de la base de datos

### 📦 Colección: `products`

Cada producto contiene información completa:

```css
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

### 👤 Usuarios: `user`

Cada usuario contiene los datos del usuario cómo así para completar en su perfil de usuario

```css
{
  uid,
  name,
  email,
  favorites: [],
  totalSpent,
  orders,
  createdAt
}
```

### 🧾 Ordenes de compra: `orders`

Cada orden vien la compra del usuario quien lo hizo y del producto

```css
{
  id,
  userId,
  buyer: { uid, name, email },
  items,
  total,
  date
}
```

---

## 🧩 Estructura del proyecto

Arquitectura modular basada en:

**Pages** → vistas completas

**Containers** → lógica de datos

**Components** → UI reutilizable

**Context** → estado global

**Services** → conexión Firebase

El proyecto está organizado siguiendo buenas prácticas de React, separando responsabilidades entre componentes, contenedores, contexto y servicios con lo siguiente:

```txt
ProyectoFinal+Portal
├── node_modules
├── public
├── src/
│   │
│   ├── auth/
│   │   ├── AuthContext.jsx     // Lógica de la autenticación de los usuarios
│   │   └── useAuth.js          // Contexto de la autenticación de los usuarios
│   │
│   ├── components/
│   │   ├── NavBar.jsx          // Barra de navegación principal
│   │   ├── Footer.jsx          // Footer informativo y responsive
│   │   ├── Item.jsx            // Card individual de producto
│   │   ├── ItemList.jsx        // Listado visual de productos
│   │   ├── ItemDetail.jsx      // Detalle específicos de los productos
│   │   ├── ItemCount.jsx       // Selector de cantidad con validaciones
│   │   ├── CartItem.jsx        // Producto dentro del carrito
│   │   ├── CartWidget.jsx      // Producto dentro del carrito
│   │   ├── PageLayout.jsx      // Estilo del fondo del sitio
│   │   ├── PageTransition.jsx  // Animaciones de la pagina
│   │   ├── CheckoutForm.jsx    // Formulario de compra
│   │   ├── ShopFilters.jsx     // Sección del fitro de la tienda
│   │   ├── UserAvatar.jsx      // Sección del inicio de sesión y el logo de usuario en el Navbar
│   │   └── UserDrawer.jsx      // Sección lateral para cerrar sesión yver el perfil
│   │
│   ├── containers/
│   │   ├── ItemListContainer.jsx    // Obtiene productos desde Firebase
│   │   ├── ItemDetailContainer.jsx  // Obtiene detalle de producto
│   │   └── Cart.jsx                 // Vista del carrito
│   │
│   ├── pages/
│   │   ├── Landing.jsx         // Página de presentación inicial
│   │   ├── Login.jsx           // Página para iniciar sesión
│   │   ├── Profile.jsx         // Página del perfil del usuario
│   │   └── Register.jsx        // Página para el registrar el usuario
│   │
│   ├── context/
│   │   ├── CartContext.js          // Contexto del carrito
│   │   ├── CartProvider.jsx        // Lógica global del carrito
│   │   └── ShopFilterContext.jsx   // Lógica de los filtros de la tienda
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
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## ⚙️ Funcionalidades principales

### 🛒 Carrito

- Agregar / eliminar productos

- Control de stock en tiempo real

- Totales dinámicos

- Persistencia en sesión

### 🔐 Autenticación

- Registro de usuarios

- Login con email/contraseña

- Sesión persistente

- Logout

- Perfil de usuario

### 👤 Perfil

- Datos personales

- Total gastado

- Cantidad de compras

- Favoritos (estructura lista)

### 🧾 Compras

- Solo usuarios autenticados pueden comprar

- Transacciones atómicas con Firestore

- Descuento automático de stock

- Generación de orden con ID real

🔎 Filtros & Búsqueda

- Búsqueda por nombre (Navbar)

- Filtros por:

  - Categoría

  - Precio máximo

  - Orden:

    - Precio ↑

    - Precio ↓

    - Nombre A–Z

    - Nombre Z–A

- Filtros globales con Context

---

### 🔒 Seguridad (Firestore Rules)

**Reglas reales implementadas:**

- Productos:

  - Lectura pública

  - Escritura bloqueada

- Órdenes:

  -Solo usuarios autenticados

- Usuarios:

  - Cada usuario solo puede leer/modificar su perfil

---

## 🚀 Instalación y ejecución

### 1️⃣ Instalar dependencias

```bash
npm install
```

### 2️⃣ Variables de entorno (.env)

```env
VITE_API_KEY=...
VITE_AUTH_DOMAIN=...
VITE_PROJECT_ID=...
VITE_STORAGE_BUCKET=...
VITE_MESSAGING_SENDER_ID=...
VITE_APP_ID=...
```

### 3️⃣ Ejecutar el proyecto en desarrollo

```bash
npm run dev
```

### 4️⃣ Cargar productos en Firebase (Seed)

```bash
npm run seed
```

---

### 🌐 Deploy

La aplicación está preparada para deploy en:

- **Vercel**

- **Netlify**

- **Firebase Hosting**

Compilación:

```bash
npm run build
```

---

## ✅ Estado final del proyecto

- Aplicación completamente funcional

- Flujo de compra completo

- Persistencia real de datos

- Control de stock automatizado

- Arquitectura ordenada y escalable

- Cumple con todos los requisitos del Proyecto Final de React# VINUM-ProyectoFinal-Portal
