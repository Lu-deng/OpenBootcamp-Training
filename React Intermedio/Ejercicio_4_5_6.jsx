// ! De esta forma es posible ahorrar casi 10 líneas de código

import React, { useState } from 'react'

const Clock1 = () => {

      // ? Variable con scope local encargada de almacenar la información a mostrar
      let state = {
         fecha: new Date(),
         edad: 0,
         nombre: "Martín",
         apellidos: "San José"
      };


     // ? UseState para actualizar información el pantalla
      const [edad, setEdad] = useState(state.edad)
   
      function incrementarEdad(){
         // ? functionparacambiar(nuevovalor)
           setEdad(edad + 1)
           
    }
      
    setTimeout(incrementarEdad, 1000)
      
      return (
         <div>
         <h2>
         Hora Actual:
         {state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{state.nombre} {state.apellidos}</h3>
         <h1 >Edad: {edad} </h1>
         </div>
      )

}
export default Clock1;