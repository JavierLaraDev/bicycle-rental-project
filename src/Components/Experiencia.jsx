import React from 'react'

export const Experiencia = () => {
  return (
    <section className='knowledge'>
      <div className='knowledge_container container'>
        <div>
          <h2 className='subtitle'>Experiencia BRIZ</h2>
          <p className='knowledge__paragraph'>Con Briz, cada pedaleada se convierte en una historia única.</p>
          <p className='knowledge__paragraph'>Cada recorrido es una oportunidad para descubrir, conectarte y transformar tu forma de moverte. La Experiencia Briz comienza desde el primer momento: al elegir una bicicleta hecha a tu medida, pensada para tu altura, comodidad y estilo.</p>
          <p className='knowledge__paragraph'>Es la libertad de rodar por la ciudad, la tranquilidad de elegir una opción sostenible y la emoción de explorar nuevas rutas en un ciclotour, o de reconectar contigo mismo a través de la cicloterapia.</p>
          {/* <p className='knowledge__paragraph'>Víve la Experiencia Briz: una forma auténtica, sostenible y única de sentir la ciudad sobre dos ruedas.</p> */}
        </div>
        <figure className='knowledge_picture'>
          <img src="/experiencia-briz-transformed.jpeg" alt="" className='knowledge_img'/>
        </figure>
      </div>
    </section>
  )
}
