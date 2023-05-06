# geekStore-server

Este proyecto consta de frontend y backend por separado. Para probarlo en forma local, bajar tanto este repositorio, como la parte frontend que esta en mis repositorios (geekStore-client).

Una vez descargado, es necesario crear un archivo .env en la raiz de la carpeta /server. Dentro del archivo llamado .env debemos 
colocar los siguientes datos:


DB_NAME = geekstore  (podes darle el nombre que quieras, pero debe ser el mismo que la base de datos que crees)
DB_USER = null  (si tenes un usuario y contraseña asignados a la base de datos que vas a utilizar, podes ponerlos aca, sino null)
DB_PASSWORD = null (si tenes un usuario y contraseña asignados a la base de datos que vas a utilizar, podes ponerlos aca, sino null)
DB_HOST = localhost
DB_DIALECT = postgres
PORT = 8080

SECRET = GORGONITAS  (es una palabra random a eleccion para generar nuestro JWT)

Despues de crear este archivo y asignar todo. Hay que crear la base de datos en postgres. Para eso nos paramos en la consola 
y usamos psql o pgcli, para hacer un create DATABASE geekstore..

Ahora vamos a instalar las dependencias: en la consola dentro de /server hacemos un npm install.
Seguido de esto, vamos a seedear la base de datos: en la consola dentro de /server escribimos npm run seed

Y por ultimo correr el comando npm start en la consola para levantar el servidor.


Librerias utilizadas:
-bcrypt: Se utiliza para hashear la contraseña.
-cookie-parser: Es un middleware para manejar las cookies.
-cors:
-dotenv: Permite cargar variables de entorno desde un archivo .env
-jsonwebtoken: Es un generador de token en JSON que se utiliza para la validacion de usuarios.
-nodemon: Para que el servidor se reinicie siempre que ocurre un cambio en el codigo.
-pg:
-postgres: Base de datos relacional.
-sequelize: Es una biblioteca que nos permite interactuar mejor con las bases de datos relacionales, postgres en este caso.


Endpoints:
"/users"
post("/register"): Registro/Creacion de usuario.
post("/login"): Login del usuario.
post("/logout"): Logout del usuario.
get("/me"): Para lograr la persistencia del usuario en la pagina.
get("/"): Para obtener todo los usuarios registrados.
delete("/deleteUser/:id"): Para eliminar un usuario en particular.
put("/toggleAdmin/:id"): Para darle o sacarle el rol admin a un usuario.


"/products"
post("/createProduct"): Creacion de un producto, o sumar al stock si el producto creado ya existe.
get("/getAllProducts"): Obtener todo los productos existentes.
put("/updateProduct/:id") Actualizar un producto (su nombre, imagen, precio, etc).
delete("/deleteProduct/:id") Eliminar un producto de la base de datos.