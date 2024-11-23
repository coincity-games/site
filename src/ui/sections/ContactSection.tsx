

export const ContactSection = () => {
  return (
    <section 
      className="contact-section white-section"
      id="contacto"
    >
        <h2>Contáctanos</h2>
        <p>Si necesitas atención personalizada nos puedes contactar en los siguientes medios:</p>
        <div className="contact-info-container">
          <div className="contact-card">
            <a href="https://wa.me/+525611075810" className="wapp-icon contact-icon" title="Envíanos un WP 💬" target="_blank" rel="noopener noreferrer nofollow"></a>
            <big className="colored-subtitle">WhatsApp</big>
            <a href="https://wa.me/+525611075810" title="Envíanos un WP 💬" target="_blank" rel="noopener noreferrer nofollow">Enviar Mensaje</a>
          </div>
          <div className="contact-card">
            <a href="tel:+525571774470" className="tel-icon contact-icon" title="Llámanos 📱"></a>
            <big className="colored-subtitle">Teléfono</big>
            <a href="tel:+525571774470" title="Llámanos 📱">5571774470</a>
          </div>
          <div className="contact-card">
            <a className="mail-icon contact-icon"></a>
            <big className="colored-subtitle">Correo</big>
            <a>pedrosanchezpineda1982@gmail.com</a>
          </div>
        </div>
        <p>Visítanos en Plaza de la constitución 4 Col. Cabecera Coyotepec, Estado de México CP 54660</p>
    </section>
  );
};
