# SiembraLink v1



SiembraLink es una aplicación para celular que pretende facilitar la búsqueda y oferta de trabajo, conectando fácilmente a los empleadores con personas que buscan empleo. Actualmente el enfoque principal de esta aplicación es para empleos del área de la agricultura, pero a largo plazo vemos la posibilidad de generalizar el tipo de trabajos que se pueda abarcar, transformándola en una aplicación  búsqueda de trabajos de todo tipo.

El git en el que realizamos el proyecto es el siguiente:

	https://github.com/ncamusf/SiembraLink.git

Este programa está en fase de desarrollo por lo que requiere tener previamente instalado expo, git y una consola virtual.

Para utilizar la aplicación requiere realizar los siguientes comandos:

	git clone https://github.com/ncamusf/SiembraLink.git
	cd SiembraLink
	npm install expo
	expo start

	abrir consola virtual
	presionar Run on Android device/emulator

![Imgur](https://i.imgur.com/OfQUJp7.png?3)![Imgur](https://i.imgur.com/kTsZpSl.png?2)![Imgur](https://i.imgur.com/kMZZmtC.png?2)
![Imgur](https://i.imgur.com/adeOzK6.png?2)![Imgur](https://i.imgur.com/DK7YFb2.png?2)![Imgur](https://i.imgur.com/WXXo5nB.png?2)


<h2>Documentación</h2>

* https://www.youtube.com/watch?v=WnS7dcY5Hys

* https://www.youtube.com/watch?v=0-S5a0eXPoc

* https://www.youtube.com/c/itzpradip/videos

* https://www.udemy.com/course/react-native-crea-aplicaciones-moviles-reales-ios-y-android/
	
* https://reactnavigation.org/blog/2020/02/06/react-navigation-5.0/

* https://reactnative.dev/docs/getting-started


<h2>Archivos</h2>

* App.js: Es el main de nuestro programa, en donde mediante la llamada del drawer se muestra en pantalla todo el programa. 
* DrawerContent.js: Contiene la pantalla que se muestra al deslizar el dedo de izquierda a derecha, esta muestra información del perfil y botones para desconectarse o viajar al perfil, configuraciones y soporte. Adicionalmente agregamos un switch de modo noche en caso de que agreguemos esta función, es probable que sea eliminado en versiones posteriores.
* Main_Tab_Screen.js: Contiene la funcionalidad y estructura de la barra inferior para viajar de pagina en pagina.
* FinancialState.js: Contiene una gráfica de los ingresos del último año, último mes y última semana obtenido a través de la aplicación. Además, abajo de esto se encuentra un historial de los últimos pagos realizados al usuario por parte de las diferentes empresas donde se encuentra trabajando.
* Profile_Screen.js: Contiene el perfil del usuario. El cual contiene la foto de perfil, así como su nombre completo y el nombre de usuario. Además, se encuentra una descripción de su persona. Por otro lado, también la valoración que en los trabajos anteriores ha obtenido y la cantidad de estos. También la última ganancia mensual que ha tenido a través de la aplicación. Finalmente muestra su dirección y forma de contactarlo.
* Works_Screens.js: Contiene un listado de los trabajos actuales en los que se encuentra el usuario, además del chat con el cual se podrá comunicar con su empleador.
* Works_Searcher.js: Contiene un cuadro de texto donde se puede escribir el nombre de la ciudad donde se desea buscar los trabajos. También contiene una sección donde se encuentran diferentes filtros para poder determinar las especificaciones del trabajo buscado. Y finalmente un recuadro donde se encuentra el mapa de google maps con las ubicaciones de los trabajos que cumplen con los filtros seleccionados anteriormente.

La creación de la conexión de la aplicación por parte de la plataforma se realizó a través de un hilo, por lo cual existe el App.js tanto en el main, así como el App.js específico para esta parte del desarrollo del proyecto.

* App.js: Tiene las funciones que determinan a la autentificación del usuario por parte de Firebase a través del paquete ‘firebase/auth’, así como la función para desloguearse.
* Auth.js: Posee la imagen principal de inicio de sesión, así como el estilo de esta. Además determina si es que un usuario está registrado dentro de la aplicación o no, para que luego entregue el formulario que corresponde (LoginForm o RegisterForm).
* RegisterForm.js: Contiene el formulario básico de registro de usuario, el cual está conectado a Firebase para almacenar los datos en la nube. 
* Firebase.js: contiene la información necesaria, obtenida desde la cuenta de Firebase, para poder hacer la conexión entre el proyecto y la base de datos, prácticamente una API.
* validations.js: Contiene una función de validación de email para revisar que este realmente sea uno válido, este va ligado al script RegisterForm.js
* LoginForm.js: Contiene el formulario de Login de usuario, el cual es autenticado con la base de datos (Firebase) y si efectivamente es un usuario ya registrado este se loguea a la aplicación.  

* Con respecto a las librerías fue necesario instalar “Firebase”, “React”, “react-native”, “react-native-vector-icons” y “react-navigation” para que poder ejecutar el proyecto y tenga un correcto funcionamiento, traducido en los siguientes paquetes:

<h3> Paquetes utilizados </h3>

* react-navigation/material-bottom-tabs
* react-navigation/stack
* react-native-vector-icons/Ionicons
* react-native-vector-icons/MaterialCommunityIcons
* react-navigation/drawer


<h2>Creadores</h2>

* Nicolás Camus
* Bastián Gonzalez
* Vicente Llanos
* Camilo Mansilla
* Diego Villanueva
