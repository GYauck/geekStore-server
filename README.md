# geekStore-server

Este proyecto consta de frontend y backend por separado. Para probarlo en forma local, bajar tanto este repositorio, como la parte frontend que esta en mis repositorios (geekStore-client).

Una vez descargado, es necesario crear un archivo .env en la raiz de la carpeta /server. Dentro del archivo llamado .env debemos 
colocar los siguientes datos:


DB_NAME = geekstore  (podes darle el nombre que quieras, pero debe ser el mismo que la base de datos que crees)
<br/>
DB_USER = null  (si tenes un usuario y contraseña asignados a la base de datos que vas a utilizar, podes ponerlos aca, sino null)
<br/>
DB_PASSWORD = null (si tenes un usuario y contraseña asignados a la base de datos que vas a utilizar, podes ponerlos aca, sino null)
<br/>
DB_HOST = localhost
<br/>
DB_DIALECT = postgres
<br/>
PORT = 8080
<br/>
SECRET = GORGONITAS  (es una palabra random a eleccion para generar nuestro JWT)
<br/>
<br/>
Despues de crear este archivo y asignar todo. Hay que crear la base de datos en postgres. Para eso nos paramos en la consola 
y usamos psql o pgcli, para hacer un create DATABASE geekstore..
<br/>
<br/>
Ahora debemos modificar 2 URL en 2 archivos.
<br/>
Ir la carpeta server/config/cors.js y descomentar la url con el localhost y comentar la URL con el geek-store-client.
<br/>
/* const origin = 'http://localhost:3000'; */
<br/>
const origin = 'https://geek-store-client.vercel.app';
<br/>
Ir a la carpeta server/middleware/setHeader.js y descomentar la url con el localhost y comentar la URL con el geek-store-client.
<br/>
/* const origin = 'http://localhost:3000'; */
<br/>
const origin = 'https://geek-store-client.vercel.app';
<br/>
<br/>
Ahora vamos a instalar las dependencias: en la consola dentro de /server hacemos un npm install.
<br/>
Seguido de esto, vamos a seedear la base de datos: en la consola dentro de /server escribimos npm run seed
<br/>
Y por ultimo correr el comando npm start en la consola para levantar el servidor.
<br/>
<br/>
Librerias utilizadas:
<br/>
-bcrypt: Se utiliza para hashear la contraseña.
<br/>
-cookie-parser: Es un middleware para manejar las cookies.
<br/>
-cors:
<br/>
-dotenv: Permite cargar variables de entorno desde un archivo .env
<br/>
-jsonwebtoken: Es un generador de token en JSON que se utiliza para la validacion de usuarios.
<br/>
-nodemon: Para que el servidor se reinicie siempre que ocurre un cambio en el codigo.
<br/>
-postgres: Base de datos relacional.
<br/>
-sequelize: Es una biblioteca que nos permite interactuar mejor con las bases de datos relacionales, postgres en este caso.
<br/>
<br/>
Endpoints:
<br/>
"/users"
<br/>
post("/register"): Registro/Creacion de usuario.<br/>
post("/login"): Login del usuario.<br/>
post("/logout"): Logout del usuario.<br/>
get("/me"): Para lograr la persistencia del usuario en la pagina.<br/>
get("/"): Para obtener todo los usuarios registrados.<br/>
delete("/deleteUser/:id"): Para eliminar un usuario en particular.<br/>
put("/toggleAdmin/:id"): Para darle o sacarle el rol admin a un usuario.
<br/>
<br/>
"/products"
<br/>
post("/createProduct"): Creacion de un producto, o sumar al stock si el producto creado ya existe.<br/>
get("/getAllProducts"): Obtener todo los productos existentes.<br/>
put("/updateProduct/:id") Actualizar un producto (su nombre, imagen, precio, etc).<br/>
delete("/deleteProduct/:id") Eliminar un producto de la base de datos.<br/>
