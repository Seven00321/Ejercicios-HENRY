// Bind

var instructor = {
    nombre: 'Franco',
    edad: 25,
 };
 
 var alumno = {
    nombre: 'Juan',
    curso: 'FullStack',
 };
 
 function getNombre() {
   return this.nombre;}
 
 /*
   Ejercicio 3
   IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
   Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.

   
 */
 
 let getNombreInstructor = getNombre.bind();
 let getNombreAlumno = getNombre.bind();