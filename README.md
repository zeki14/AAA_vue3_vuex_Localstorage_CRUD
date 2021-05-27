
PROYECTO AAA Factoría F5:

Proyecto de  una aplicación encargada por la Asociació Asperger Asturias para la asignación y la gestión de tareas.

Stack tecnológico:
   Framework de frontend: 
      Vuejs3.0 
   
      Se usa "vue router" y "vuex"
      
  Localstorage
  
  Bootstrap 5.0.1
  
  
 Instalación:
 
   Ejecutar comando "npm install" para instalar todas las dependecias del proyecto que se encuentran en  el archivo Package.json
  
 
  
 Para instalar Bootstrap con Vue:
 
    npm i --save bootstrap
    
    npm i --save jquery popper.js
    
 Para generar id aleatorios:
 
    npm i shortid
  
  
  Para Ejecutar la aplicación:
  
      npm run serve
 
 Ramas (branch) de git y estado del proyecto:
 
   En la rama  "router-push" se encuentra la parte de la maquetación más avanzada. Esta maquetación se hizo empleando un  data.json donde se encuentran las tareas.
  Empleamos Vue router y pasamos la data a través de propiedadas computadas.
  
   En la rama "localstorage" conectamos la aplicación al localstorage para poder crear tareas y guardarlas en la memoria 'localstorage' del navegador.
  Empleamos Vue Router y Vuex para gestionar el store con las diferentes acciones.
  
  
