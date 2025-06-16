import React from 'react'

export const CardServices = ({urlImg, aboutTitle, paragraph}) => {
  return (
    <article className="about_icons">
      <img src={urlImg} alt={aboutTitle} className='about_icon'/>
      <h3 className="about_title">{aboutTitle}</h3>
      <p className="about_paragraph">{paragraph}</p>
    </article>
  )
}
