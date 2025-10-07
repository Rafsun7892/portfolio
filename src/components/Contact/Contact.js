import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact__buttons'>
        {contact.email && (
          <a href={`mailto:${contact.email}`}>
            <span type='button' className='btn btn--outline'>
              Email
            </span>
          </a>
        )}
        {contact.number && (
          <a href={`tel:${contact.number}`}>
            <span type='button' className='btn btn--outline'>
              Call
            </span>
          </a>
        )}
        {contact.link && (
          <a href={contact.link} target="blank" rel="noopener noreferrer">
            <span type='button' className='btn btn--outline'>
              Facebook
            </span>
          </a>
        )}
        {contact.link_text && (
         <a href={`https://wa.me/${contact.link_text}`} target="blank" rel="noopener noreferrer">
            <span type='button' className='btn btn--outline'>
              WhatsApp 
            </span>
          </a>
        )}
      </div>
    </section>
  )
}

export default Contact
