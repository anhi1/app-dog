ng new <project-name>

ng serve

<!-- bostrap -->
npm install --save bootstrap

<!-- Instalar angular material -->

ng add @angular/material

<!-- Crear un componente -->
ng generate component 

<!-- En angular.json poner en la parte de arriba porque abajo hay otro similar -->
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
],

Descripción:
En la aplicación, las etiquetas que se muestran en pantalla están correctamente importadas desde app.component.ts, lo que garantiza que se visualicen sin problemas. Para permitir la navegación desde el menú, el componente Navbar importa RouterModule, lo que facilita el redireccionamiento a otras vistas como el componente Contacto.

Además, en el componente de las tarjetas (CardComponent), se ha importado CommonModule porque se están utilizando directivas estructurales como *ngIf y *ngFor. Esto permite manejar condicionales y listas directamente en el HTML de forma más limpia y eficiente.

Gracias a *ngFor, se pueden generar múltiples tarjetas de manera dinámica a partir de un arreglo de objetos (en este caso, perros), sin tener que escribir cada una manualmente. Por otro lado, *ngIf se utiliza para mostrar u ocultar elementos según ciertas condiciones, como por ejemplo, desplegar un modal con información adicional solo cuando se solicita.