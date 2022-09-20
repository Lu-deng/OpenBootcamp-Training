import React from 'react'
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../../pure/contacto';


const ContactoComponent1 = (props) => {
  
  const defaultTask1 = new Contacto("Example", "yesss", "mail@mail.com", false )
    
    return (
    <div>
        <div>
          Your contact:
        </div>
        {/* Aplicar map o for para renderizar una lista    */}
     <ContactoComponent contacto={ defaultTask1 }></ContactoComponent>
    </div>
  )
};


export default ContactoComponent1;
