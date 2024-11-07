
# Prueba Técnica para Customer Scoops

[![Deploy](https://img.shields.io/badge/deploy-live-blue)](https://customerscoops.javimx.com/)

## Descripción
Este proyecto es una prueba técnica para Customer Scoops para el puesto de Frontend Developer Jr, desarrollado con React, TypeScript, Styled-Components y React Router DOM. Consiste en la maquetación de un diseño proporcionado en Figma que implementa una encuesta interactiva. Los datos introducidos por el usuario se mantienen persistentes hasta que la encuesta se complete, proporcionando una experiencia fluida y continua.

## Características Principales
- **Persistencia de Datos**: Los datos ingresados por el usuario se guardan de forma local y permanecen hasta que la encuesta finaliza.
- **Diseño Responsive**: La aplicación está optimizada para verse y funcionar correctamente en diferentes tamaños de pantalla.
- **Validación de Datos**: Se incluyen validaciones para garantizar que los datos ingresados sean correctos y completos.

## Instalación y Uso
Sigue los pasos a continuación para instalar y ejecutar el proyecto en tu máquina local:

1. **Requisitos previos**: Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.
2. **Clona el repositorio**:
   ```bash
   git clone https://github.com/J4viMx/customerScoops.git
   cd tu-repositorio
   ```
3. **Instala las dependencias**:
   ```bash
   npm install
   ```
4. **Ejecuta el proyecto en modo de desarrollo**:
   ```bash
   npm run dev
   ```
5. **Despliegue**: El proyecto se despliega automáticamente cuando se hace un commit a la rama `main`, gracias a una GitHub Action configurada para este propósito.

## Enfoque de maquetación
El enfoque de maquetación de este proyecto se basó en garantizar una implementación fiel del diseño original de Figma, priorizando la reutilización de componentes y la escalabilidad del código. Para lograr esto, utilizamos funcionalidades de **Styled-Components**, como la definición de estilos globales con la herramienta createGlobalStyles, que nos permitieron aplicar estilos consistentes a todos nuestros componentes. También hicimos uso de la herramienta ThemeProvider para gestionar y reutilizar variables comunes en nuestro código, facilitando futuras actualizaciones y mejoras.

Se implementaron breakpoints para asegurar una visualización óptima en distintos tamaños de pantalla, manteniendo la coherencia con el diseño original proporcionado. Además, los componentes fueron diseñados con Styled-Components, incluyendo variables que permitieron una mejor adaptabilidad según el contenido.

Por último, se desarrollaron componentes reutilizables para elementos que se repetían en diferentes partes de la aplicación, optimizando así el código y manteniendo un enfoque modular y escalable.

## Envío de correo 
[Repositorio de envio de correo](https://nodejs.org/)

## Detalles adicionales
- Se uso la libreria react-router-dom para el enrutamiento del proyecto, ya que esto permitia mejor facilidad de componentes y optimizacion utilizando tecnicas como lazyLoading y suspense
- Se decidio usar hooks como useContext y useReducer para el manejo de un estado global, para tener acceso a guardar datos de una forma rapida y escalable
- Tambien se usaron hooks personalizados para la reutilizacion de codigo repetido en diversos componentes
- Se decicio agregar validaciones que aseguran que el formulario sea llenado de forma correcta, sin poder pasar al siguiente paso, cuando se intenta esta acción saldra un toast con un mensaje incorporado para indicar al usuario del mal llenado de la información
- Se agrego un Spinner como componente del suspense que mostrara cuando la pagina este solicitando la siguiente ruta
- Se decidio agregar etiquetas meta, cambio de fabicon para mejorar el SEO de la pagina
- Se creo un github action para poder controlar el deploy constante al detectar cambios en la rama main, en este action se realiza un build del proyecto, y creara o actualizara una rama llamada build y al utilizar el webhook que hostinger proporciona pueda consumir el proyecto ya compilado

## Estructura del Proyecto
La estructura de carpetas del proyecto es la siguiente:

```
src/
|-- assets/         # Imágenes y recursos estáticos
|-- components/     # Componentes de la aplicación, cada uno en su propia carpeta
|   |-- styles/     # Archivos de estilos divididos en carpetas (button, container, image, etc.)
|-- context/        # Contextos, providers, reducers y types
|-- hooks/          # Hooks personalizados
|-- pages/          # Páginas de la aplicación
|-- routes/         # Componente para manejo de rutas
|-- styles/         # GlobalStyles y configuración de Theme
```
## Autor
Desarrollado por **Javier Juarez**.


## Enlaces y Referencias
- [Despliegue en vivo](https://customerscoops.javimx.com/)

## Estado del Proyecto
El proyecto está completado y no se encuentra en desarrollo activo.
