import React from 'react'

export const Services = () => {
  return (
    <section className="services container">
  <h2 className='subtitle'>¿Ya conoces todo lo que Briz puede ofrecerte?</h2>
  <div className="services-grid">
    <div className="service-card">
      <img src="icons/bike-rental.png" alt="Alquiler"/>
      <p>Alquiler de bicicletas personalizadas</p>
      <a href="#" className='cta-card'>ver más...</a>
    </div>
    <div className="service-card">
      <img src="icons/tour.png" alt="Ciclotours"/>
      <p>Ciclotours temáticos</p>
      <a href="#" className='cta-card'>ver más...</a>
    </div>
    <div className="service-card">
      <img src="icons/advertising.png" alt="Bicivallas"/>
      <p>Publicidad ecológica en bicivallas</p>
      <a href="#" className='cta-card'>ver más...</a>
    </div>
    <div className="service-card">
      <img src="icons/refurbish.png" alt="Refabricación"/>
      <p>Venta bicicletas personalizadas</p>
      <a href="#" className='cta-card'>ver más...</a>
    </div>
    <div className="service-card">
      <img src="icons/tools.png" alt="Mecánica"/>
      <p>Enseñanza de mecánica</p>
      <a href="#" className='cta-card'>ver más...</a>
    </div>
    <div className="service-card">
      <img src="icons/health.png" alt="Salud"/>
      <p>Programas de salud y bienestar</p>
      <a href="#" className='cta-card'>ver más...</a>
    </div>
  </div>
 
</section>

  )
}
