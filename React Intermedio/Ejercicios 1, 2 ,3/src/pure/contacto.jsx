import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class'

const ContactoComponent = ({ contacto }) => {
  return (
    <div>
        <h2>
            Nombre: { contacto.name }
        </h2>
        <h3>
            Descripcion: { contacto.surname }
        </h3>
        <h4>
            Level: { contacto.email }
        </h4>
        <h5>
            This task is: { contacto.online ? "Contacto en línea" : "Contacto no disponible" }
        </h5>
    </div>
  )
}

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)

}

export default ContactoComponent
