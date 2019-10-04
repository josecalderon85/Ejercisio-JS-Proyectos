14. volver a crear Giphy con su propioAPI

objetivo de: crear una aplicación web que utilice una entrada de búsqueda y la API de Giphy para mostrar giphs en una página.
Una vez que domine la manipulación del DOM y trabaje con JavaScript o jQuery vanilla, le recomiendo que comience a aprender a usar datos de plantilla y mostrarlos en el DOM.


Mi aplicación web Giphy horriblemente diseñada. Puede hacerlo mejor o usar un marco CSS. 👍
Una excelente aplicación de inicio para construir es una recreación básica de la sitio web giphy, utilizando el Api giphy en sí. Recomiendo su API para principiantes porque no hay necesidad de solicitar ningún tipo de clave API, y no tendrá que preocuparse por mucha configuración cuando intente solicitar datos.
Usando su API, puede crear una pequeña aplicación web que hace lo siguiente;
muestra gifs de tendencia en la carga de la aplicación que se muestra en una columna / cuadrícula
tiene una entrada que le permite buscar gifs específicos
en la parte inferior de los resultados, hay un botón 'cargar más', que obtiene más gifs usando ese término de búsqueda.
Te enfrentarás a muchos desafíos nuevos en este proyecto, uno de los cuales será trabajar con peticionesasíncronas.Puede elegir usar JavaScript de vainilla para este desafío, o si se siente más cómodo con jQuery, use métodoajax.El objetivo es comenzar a trabajar con código asincrónico.
A medida que su aplicación comienza a volverse más compleja, también deberá pensar dónde coloca los datos dentro de su aplicación y cómo la organiza. Para esto, recomiendo utilizar un patrón arquitectónico llamado espacio entre nombres para ayudar a la batalla alcance y conflictos con cierres.