# 🛒 CoderCommerce - Backend de E-commerce

Este es el backend de un e-commerce desarrollado con **Node.js, Express y MongoDB**.  
Permite la gestión de usuarios, productos y carritos de compra, integrando autenticación, WebSockets y persistencia en MongoDB.

---

## 🚀 **Tecnologías utilizadas**
- **Node.js** + **Express** 🚀 (Servidor y API REST)
- **MongoDB + Mongoose** 🛢️ (Base de datos)
- **Handlebars** 🖥️ (Motores de plantillas para las vistas)
- **WebSockets** 🔄 (Actualización en tiempo real de productos)
- **Dotenv** 🔐 (Manejo de variables de entorno)
- **Express-session** (Gestión de sesiones de usuario)
- **Bootstrap 5** (Estilos y diseño responsivo)

## 📌 Endpoints disponibles
## 👤 Users
**POST** `/api/users` - Registrar un usuario
**POST** `/api/users/login` - Iniciar sesión
**GET** `/api/users` - Listar todos los usuarios
**GET** `/api/users/:user_id` - Obtener un usuario por ID
**PUT** `/api/users/:user_id` - Actualizar un usuario
**DELETE** `/api/users/:user_id` - Eliminar un usuario

## 📦 Products
**POST**	`/api/products`	Crear un nuevo producto
**GET**	`/api/products`	Listar todos los productos
**GET**	`/api/products/pages`	Paginación de productos
**GET**	`/api/products/:product_id`	Obtener un producto por ID
**PUT**	`/api/products/:product_id`	Actualizar un producto
**DELETE**	`/api/products/:product_id`	Eliminar un producto
## 🛒 Carritos
**POST**	`/api/carts`	Agregar un producto al carrito
**GET**	`/api/carts/users/:user_id`	Ver productos en el carrito de un usuario
**PUT**	`/api/carts/:cart_id`	Actualizar cantidad de un producto en el carrito
**DELETE**	`/api/carts/:cart_id`	Eliminar un producto del carrito
**GET**	`/api/carts/total/:user_id`	Calcular total del carrito

## 📷 Vistas con Handlebars
**`/`** - `index.handlebars` - Página principal con productos
**`/login`** - `login.handlebars` - Página de inicio de sesión
**`/register`** - `register.handlebars` - Registro de usuario
**`/cart/:user_id`** - `cart.handlebars` - Carrito del usuario
**`/products`** - `products.handlebars` - Gestión de productos
**`/profile/:user_id`** - `profile.handlebars` - Perfil del usuario

## 🚀 Funcionalidades principales
✅ CRUD de productos, usuarios y carritos  
✅ Login básico con localStorage  
✅ Conexión con MongoDB usando Mongoose  
✅ Vistas dinámicas con Handlebars  
✅ WebSockets para actualizar productos en tiempo real  
✅ Diseño responsivo con Bootstrap 5  
