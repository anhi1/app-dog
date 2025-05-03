
Descripción:

En esta práctica instalé angular 18 y decidí probar standalone componets, en lugar de usar NgModule, configuré la aplicación para que se inicie directamente desde un componente con standalone: true, utilizando bootstrapApplication en main.ts. El objetivo fue explorar una estructura más moderna y modular de Angular.


En la aplicación, los componentes que se muestran en pantalla están correctamente importadas desde app.component.ts, que permite que se visualicen sin problemas. Para permitir la navegación desde el menú, el componente Navbar importa RouterModule, lo que facilita el redireccionamiento a otras vistas como el componente Adopción.

En el formulario de adopción, he aplicado data binding, que permite conectar los datos de forma sincronizada. Cada vez que completo el formulario, los datos se visualizan automáticamente abajo. Esto tiene como objetivo dar al usuario una vista previa de los datos que está subiendo. Es como una forma de asegurarse de que toda la información esté correcta antes de enviarla.

Además, en el componente de las tarjetas (CardComponent), se ha importado CommonModule porque se están utilizando directivas estructurales como *ngIf y *ngFor. Esto permite manejar condicionales y listas directamente en el HTML de forma más limpia y eficiente.

Al utilizar *ngFor, se pueden generar múltiples tarjetas de manera dinámica a partir de un arreglo de objetos (en este caso, perros), sin tener que escribir cada una manualmente. Por otro lado, *ngIf se utiliza para mostrar u ocultar elementos según ciertas condiciones, como por ejemplo, desplegar un modal con información adicional solo cuando se solicite.


Pasos de instalación:

El proyecto se creo con el siguiente comando:
ng new app-dog

<!-- Crear un componente -->
ng generate component 

Instalacion de bootstrap
npm install --save bootstrap


<!-- En angular.json poner en la parte de arriba porque abajo hay otro similar -->
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
],


Ejecutar la app:
ng serve



<!-- Instalar angular material -->

ng add @angular/material

