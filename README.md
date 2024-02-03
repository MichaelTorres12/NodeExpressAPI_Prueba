estoy utilizando APIs en mi proyecto, tanto en el lado cliente como en el servidor, dentro del contexto de una API web. Estoy usando:

API del Lado Servidor En el lado del servidor, he creado una API utilizando Express, un marco de aplicación web para Node.js. Mi API define dos rutas principales:

POST /prueba: Esta ruta maneja las solicitudes POST para añadir una nueva transacción al array transactionArray. Los datos de la nueva transacción se reciben en el cuerpo de la solicitud, se agregan al array y luego se envía una respuesta para confirmar que la operación fue exitosa.

GET /prueba: Esta ruta maneja las solicitudes GET para recuperar todas las transacciones almacenadas en el array transactionArray. Cuando se accede a esta ruta, mi servidor envía una respuesta con el contenido de transactionArray en formato JSON.

Estas rutas forman mi API del lado servidor, permitiendo que mi aplicación interactúe con los datos de las transacciones mediante solicitudes HTTP.

API del Lado Cliente En el lado cliente, utilizo la Fetch API, una API de JavaScript para realizar operaciones HTTP (como GET y POST) desde el navegador. Esto me permite comunicarme con mis API del servidor. Lo hago de la siguiente manera:

Solicitudes POST: Cuando un usuario llena el formulario y lo envía, mi código cliente captura los datos, los organiza en un objeto JSON y luego envía esos datos al servidor usando fetch con el método POST. Esta solicitud se dirige a la ruta /prueba de mi servidor, donde los datos se almacenan.

Solicitudes GET: Después de enviar los datos (o al cargar la página), realizo una solicitud GET a la misma ruta /prueba para recuperar la lista actualizada de transacciones. Los datos recibidos en respuesta se procesan y se muestran dinámicamente en la página.

Conclusión Por lo tanto, estoy utilizando APIs en mi proyecto. Del lado del servidor, he construido una API REST con Express para manejar solicitudes HTTP relacionadas con las transacciones. Del lado del cliente, utilizo la Fetch API para interactuar con mi API del servidor, enviando y recibiendo datos. Juntas, estas APIs facilitan la comunicación entre el cliente y el servidor, permitiendo que mi aplicación web funcione de manera interactiva y dinámica.
