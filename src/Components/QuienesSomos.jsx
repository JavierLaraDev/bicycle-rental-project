import React from 'react'

export const QuienesSomos = () => {
    return (
        <section class="whoWeAre">
            <div class="whoWeAre_container container">
                <div class="whoWeAre_texts">
                    <h2 class="whoWeAre_subtitle">¿Quienes Somos?</h2>
                    <h3 class="whoWeAre_sub_subtitle">Briz - Transformando el Ciclismo</h3>
                    <p class="whoWeAre_paragraph">Somos más que una marca de bicicletas. Somos un estilo de vida que reimagina el uso de la bicicleta, fusionando ingeniería de vanguardia con el espíritu del biciturismo y el compromiso con el planeta.
                    </p>
                    <p class="whoWeAre_paragraph">Creamos experiencias que trascienden el simple acto de pedalear, conectando corazones con horizontes y promoviendo un futuro sostenible para todos.</p>
                    <a href="#" class="cta">Explora nuestras bicicletas</a>
                </div>
                <figure class="whoWeAre_picture">
                    <img src="/quienesSomos.jpg" alt="" class="whoWeAre_img" />
                </figure>
            </div>
        </section>
    )
}
