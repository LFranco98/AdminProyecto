# AdminProyecto
Este es un proyecto de agenda para el curso de Administración y Tecnología

*				Servicios utilizados					*


express -> framework de node, escribir el servidor de forma sencilla y profesional

express-handlebars -> motor de plantillas dentro de express

express-session -> es para crear sesiones en el servidor, insertar datos temporalmente

method-override -> ver la funcionalidad de los formularios (metodos put, post, delete etc)

mongoose -> modulo que nos permite unir express a una base de datos (nos permite conectar a mongodb)

passport -> autentical usuario

passport-local -> autenticar usuario

bcryptjs -> metodo que nos permite aplicar un algoritmo a determinado texto y convertirlo en un hash (cifrado de password)

connect-flash -> enviar mensajes entre multiples vistas (usuario mete 4 digitos en password y necesitamos que sea mas segura por ejemplo)

nodemon -> reiniciar el servidor sin cancelar la conexion


*				Archivos					*
database.js -> realiza la conexion a la base de datos
index.js layout principal de la base de datos

*				Carpetas					*

views -> Almacena todos los archivos que enviamos al navegador (vistas html -> handlebars)

routes -> Crear las rutas de nuestro servidor

public -> Insertar todos los archivos estaticos (iagenes, fuentes, archivos css, javascript)

models -> como van a lucir los datos que queremos almacenar en la base de datos

helpers -> funciones que mi servidor puede utilizar (ejemplo: generar un numero aleatorio)

config -> variables de configuracion del entorno, mi archivo database.js, como estoy autenticando con mi configuracion, como estan configurado ciertos modulos.

*				Funcionalidad					*

Para correr el proyecto se utiliza el comando "npm run dev"

Para iniciar el servicio mongoDB usar los comandos

Windows = "mongod", seguir este tutorial para instalar correctamente mongoDB 
Tutorial: https://www.youtube.com/watch?v=2KMQdqDk9e8&ab_channel=Fazt

Linux = "sudo service mongod start" 

Tutorial: https://stackoverflow.com/questions/48092353/failed-to-start-mongod-service-unit-mongod-service-not-found