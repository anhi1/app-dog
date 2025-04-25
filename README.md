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