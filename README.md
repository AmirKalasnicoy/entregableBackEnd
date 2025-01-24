# CoderCommerce API 
## Description
Este proyecto es una API REST para la gestión de productos y usuarios. Permite crear, leer, actualizar y eliminar recursos, almacenando los datos en archivos JSON utilizando Node.js.
## Requisitos
1. Node.js (v16 o superior)
2. Postman para probar las API.
3. Ejecutar `npm install` para instalar las dependencias necesarias.

## Endpoints Products
1. GET : /api/products  -> Obtener todos los productos
2. GET : /api/products/:pid ->Obtener un producto por ID
3. POST: /api/products -> 	Crear un nuevo producto
4. PUT: /api/products/:pid -> Actualizar un producto por ID
5. DELETE: /api/products/:pid -> Eliminar un producto por ID

## Endpoints para Usuarios
1. GET : /api/users  -> Obtener todos los usuarios
2. GET : /api/users/:uid ->Obtener un usuarios por ID
3. POST: /api/users -> 	Crear un nuevo usuario
4. PUT: /api/users/:uid -> Actualizar un usuario por ID
5. DELETE: /api/users/:uid -> Eliminar un usuario por ID

## Instrucciones para Ejecutar
1. Clonar el repositorio.
2. Ejecutar el servidor con: npm start 

## Códigos de Estado
- `200 OK`: Operación exitosa.
- `201 Created`: Recurso creado exitosamente.
- `404 Not Found`: Recurso no encontrado.
- `500 Internal Server Error`: Error en el servidor.

## Ejemplo de JSON

## Products
{
  "title": "Laptop",
  "category": "computers",
  "price": 1200,
  "stock": 10,
  "thumbnails": ["https://example.com/image1.jpg"] 
}
Nota: Si no incluyes una imagen, se generará una por defecto.

## Users
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword123",
  "age": 30
}
