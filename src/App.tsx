import './App.css'

const services = [
  {
    title: 'Integración de Sistemas',
    description:
      'Diseñamos arquitecturas robustas que conectan equipos industriales con plataformas digitales críticas, asegurando operación continua.',
  },
  {
    title: 'Automatización Inteligente',
    description:
      'Implementamos soluciones de control y analítica en tiempo real para optimizar productividad, seguridad y trazabilidad de procesos.',
  },
  {
    title: 'Infraestructura Tecnológica',
    description:
      'Modernizamos redes industriales, centros de datos y entornos OT con estándares de ciberseguridad y escalabilidad probados.',
  },
]

const differentiators = [
  {
    title: 'Equipo multidisciplinario',
    description:
      'Ingenieros de campo, especialistas OT/IT y consultores de negocio trabajando bajo metodologías ágiles orientadas a resultados.',
  },
  {
    title: 'Ejecución punta a punta',
    description:
      'Desde el diagnóstico hasta la puesta en marcha y soporte continuo, con gestión integral de proveedores y normatividad.',
  },
  {
    title: 'Enfoque en continuidad operativa',
    description:
      'Planes de contingencia, monitoreo 24/7 y acuerdos de servicio que minimizan riesgos y tiempos de inactividad.',
  },
]

const industries = [
  'Manufactura avanzada',
  'Energía y Oil & Gas',
  'Agroindustria',
  'Infraestructura crítica',
  'Logística y transporte',
]

function App() {
  return (
    <div className="app">
      <header className="top-bar">
        <div className="brand" aria-label="SICALinx">
          <span className="brand-mark" />
          <span className="brand-text">SICA Linx</span>
        </div>
        <nav className="main-nav">
          <a href="#servicios">Servicios</a>
          <a href="#sectores">Sectores</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="top-cta" href="#contacto">
          Agenda una consulta
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <p className="eyebrow">Soluciones tecnológicas e industriales</p>
            <h1>
              Modernizamos operaciones críticas con tecnología confiable y escalable.
            </h1>
            <p className="hero-copy">
              Acompañamos a organizaciones industriales en su transformación digital, integrando sistemas, automatizando procesos y protegiendo infraestructuras para lograr operaciones seguras, eficientes y sostenibles.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#contacto">
                Solicita un diagnóstico
              </a>
              <a className="btn ghost" href="#servicios">
                Explora servicios
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-placeholder">Espacio reservado para imagen principal</div>
            <span className="placeholder-caption">
              Imagen corporativa de operaciones industriales
            </span>
          </div>
        </section>

        <section className="metrics" aria-label="Indicadores clave">
          <div className="metric">
            <span className="metric-value">+15</span>
            <span className="metric-label">años implementando proyectos críticos</span>
          </div>
          <div className="metric">
            <span className="metric-value">98%</span>
            <span className="metric-label">de disponibilidad promedio en sistemas gestionados</span>
          </div>
          <div className="metric">
            <span className="metric-value">24/7</span>
            <span className="metric-label">monitoreo y soporte especializado</span>
          </div>
        </section>

        <section className="section" id="servicios">
          <h2 className="section-title">Servicios especializados</h2>
          <p className="section-intro">
            Alianzas estratégicas y ejecución certificada para brindar soluciones integrales a lo largo de todo el ciclo de vida operativo.
          </p>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="image-frame">
                  <div className="image-placeholder">Placeholder servicio</div>
                </div>
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section light" id="sectores">
          <h2 className="section-title">Sectores que impulsamos</h2>
          <p className="section-intro">
            Conocemos los retos regulatorios, de continuidad y de seguridad de las industrias más demandantes de la región.
          </p>
          <div className="industries">
            {industries.map((industry) => (
              <span className="industry-tag" key={industry}>
                {industry}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="nosotros">
          <div className="two-column">
            <div>
              <h2 className="section-title">Por qué las empresas confían en SICA Linx</h2>
              <p className="section-intro">
                Operamos con procesos auditables, ingeniería probada y una cultura enfocada en resultados tangibles, mitigando riesgos operativos desde el día uno.
              </p>
              <div className="differentiators">
                {differentiators.map((item) => (
                  <article className="differentiator" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="two-column-visual" aria-hidden="true">
              <div className="visual-placeholder large">Placeholder equipo y operaciones</div>
              <span className="placeholder-caption">
                Espacio para fotografía del equipo y proyectos
              </span>
            </div>
          </div>
        </section>

        <section className="cta-section" aria-label="Llamado a la acción">
          <div className="cta-content">
            <h2>Transforma tu operación industrial con aliados expertos</h2>
            <p>
              Conversemos sobre tus objetivos de crecimiento, eficiencia energética, seguridad y resiliencia. Nuestro equipo preparará una propuesta personalizada.
            </p>
          </div>
          <a className="btn primary" href="#contacto">
            Agendar reunión
          </a>
        </section>

        <section className="section light" id="contacto">
          <div className="contact">
            <div className="contact-info">
              <h2 className="section-title">Contacto</h2>
              <p className="section-intro">
                Escríbenos para coordinar una sesión de descubrimiento o solicitar información detallada sobre nuestras soluciones.
              </p>
              <div className="contact-details">
                <p><strong>Correo:</strong> contacto@sicalinx.com</p>
                <p><strong>Teléfono:</strong> +52 (55) 1234 5678</p>
                <p><strong>Oficinas:</strong> CDMX · Monterrey · Bogotá</p>
              </div>
            </div>
            <form className="contact-form">
              <label htmlFor="nombre">Nombre completo</label>
              <input id="nombre" name="nombre" placeholder="Tu nombre" />

              <label htmlFor="empresa">Empresa</label>
              <input id="empresa" name="empresa" placeholder="Nombre de la organización" />

              <label htmlFor="correo">Correo electrónico</label>
              <input id="correo" name="correo" placeholder="email@empresa.com" />

              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Cuéntanos sobre tus necesidades tecnológicas"
                rows={4}
              />

              <button className="btn primary" type="submit">
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <span className="brand-text">SICA Linx</span>
          <p>Ingeniería tecnológica e industrial con visión de futuro.</p>
        </div>
        <div className="footer-links">
          <a href="#servicios">Servicios</a>
          <a href="#sectores">Sectores</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>
        <span className="footer-copy">© {new Date().getFullYear()} SICA Linx. Todos los derechos reservados.</span>
      </footer>
    </div>
  )
}

export default App
