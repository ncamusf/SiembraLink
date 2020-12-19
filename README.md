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

* App.js: Es el main de nuestro programa, en donde mediante la llamada del drawer se muestra en pantalla todo el programa. Además, es el archivo desde donde se importa firebase para poder realizar la autenticación del usuario.
* DrawerContent.js: Contiene la pantalla que se muestra al deslizar el dedo de izquierda a derecha, esta muestra información del perfil y botones para desconectarse o viajar al perfil, configuraciones y soporte. Adicionalmente agregamos un switch de modo noche en caso de que agreguemos esta función, es probable que sea eliminado en versiones posteriores.
* Main_Tab_Screen.js: Contiene la funcionalidad y estructura de la barra inferior para viajar de pagina en pagina.
* FinancialState.js: Contiene una gráfica de los ingresos del último año, último mes y última semana obtenido a través de la aplicación. Además, abajo de esto se encuentra un historial de los últimos pagos realizados al usuario por parte de las diferentes empresas donde se encuentra trabajando.
* Profile_Screen.js: Contiene el perfil del usuario. El cual contiene la foto de perfil, así como su nombre completo y el nombre de usuario. Además, se encuentra una descripción de su persona. Por otro lado, también la valoración que en los trabajos anteriores ha obtenido y la cantidad de estos. También la última ganancia mensual que ha tenido a través de la aplicación. Finalmente muestra su dirección y forma de contactarlo.
* Works_Screens.js: Contiene un listado de los trabajos actuales en los que se encuentra el usuario, además del chat con el cual se podrá comunicar con su empleador.
* Works_Searcher.js: Contiene un cuadro de texto donde se puede escribir el nombre de la ciudad donde se desea buscar los trabajos. También contiene una sección donde se encuentran diferentes filtros para poder determinar las especificaciones del trabajo buscado. Y finalmente un recuadro donde se encuentra el mapa de google maps con las ubicaciones de los trabajos que cumplen con los filtros seleccionados anteriormente.
* RootStackScreen.js: Contiene las pestañas necesarias para realizar el logueo o registro de usuario, en otras palabras es la navegación entre las tres pestañas siguientes: LogInScreen, SignInScreen y SignUpScreen
* SignUpScreen.js: Contiene el formulario básico de registro de usuario, el cual está conectado a Firebase para almacenar los datos en la nube.
* SignInScreen.js: Contiene el formulario de Login de usuario, el cual es autenticado con la base de datos (Firebase) y si efectivamente es un usuario ya registrado este se loguea a la aplicación.
* SplashScreen.js: Es la pagina de bienvenida a la aplicación, la cual solo se puede llegar al abrir la aplicación y al cerrar sesión dentro de esta.
* validations.js: Contiene una función de validación de email para revisar que este realmente sea uno válido.
* firebase.js: Contiene la información necesaria, obtenida desde la cuenta de Firebase, para poder hacer la conexión entre el proyecto y la base de datos, prácticamente una API.



<h3> Paquetes utilizados </h3>

* firebase
* React
* react-native
* react-native-vector-icons/FontAwesome
* react-navigation/native
* react-native-vector-icons
* react-native-vector-icons/MaterialIcons
* react-navigation
* expo-linear-gradient
* react-native-animatable
* react-native-vector-icons/Feather
* react-navigation/material-bottom-tabs
* react-navigation/stack
* react-native-vector-icons/Ionicons
* react-native-vector-icons/MaterialCommunityIcons
* react-navigation/drawer
* react-native-chart-kit
* react-native-paper
* react-native-maps
* react-native-chart-kit


<h2>Creadores</h2>

* Nicolás Camus
* Bastián Gonzalez
* Vicente Llanos
* Camilo Mansilla
* Diego Villanueva
