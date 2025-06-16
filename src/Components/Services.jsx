import React from 'react'
import { CardServices } from './CardServices'
import rentalBike from '../assets/icons/bike-rental.png'
import ciclotour from '../assets/icons/tour.png'
import publicity from '../assets/icons/advertising.png'
import persalizedBike from '../assets/icons/refurbish.png'
import mechanic from '../assets/icons/tools.png'
import bienestar from '../assets/icons/health.png'
export const Services = () => {
  return (
    <section className="container about">
      <h2 className="subtitle">Nuestros Servicios</h2>
      <p className="about-paragraph">Experiencias diseñadas para conectar contigo, la ciudad y la naturaleza</p>
      <div className='about_main'>
        <CardServices
          urlImg={rentalBike}
          aboutTitle="Alquiler de Bicicletas"
          paragraph="Disfruta de bicicletas modernas para recorrer la ciudad y vivir aventuras sobre dos ruedas."
        />
        <CardServices
          urlImg={ciclotour}
          aboutTitle="Cicloturs Temáticos"
          paragraph="Explora rutas únicas con guías en bicicleta adaptadas a temas culturales, naturales o urbanos."
        />
        <CardServices
          urlImg={publicity}
          aboutTitle="Publicidad Ecológica"
          paragraph="Promociona tu marca con publicidad en bicicleta: innovadora, sostenible y altamente visible."
        />
        <CardServices
          urlImg={persalizedBike}
          aboutTitle="Bicicletas Personalizadas"
          paragraph="Crea la bici de tus sueños eligiendo colores, accesorios y detalles que se adapten a tu estilo."
        />
        <CardServices
          urlImg={mechanic}
          aboutTitle="Mecánica Ciclista"
          paragraph="Ofrecemos reparación y mantenimiento para que tu bicicleta siempre esté en óptimas condiciones."
        />
        <CardServices
          urlImg={bienestar}
          aboutTitle="Bienestar Integral"
          paragraph="Mejora tu salud física y mental con ejercicios, paseos y actividades en bicicleta al aire libre."
        />

      </div>
    </section>
  )
}
