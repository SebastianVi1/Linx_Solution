import { useEffect } from 'react'
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
  'Agroindustria',
  'Infraestructura crítica',
  'Logística y transporte',
]

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll')
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <header className="top-bar">
        <div className="brand" aria-label="SICALinx">
          <img
            className="brand-logo"
            src="/logo.PNG"
            alt="Logotipo SICA Linx"
            loading="lazy"
          />
          <span className="brand-text">SICALinx</span>
        </div>
        <nav className="main-nav">
          <a href="#servicios">Servicios</a>
          <a href="#sectores">Sectores</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#conocenos">Conócenos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="top-cta" href="#contacto">
          Agenda una consulta
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content reveal-on-scroll">
            <p className="eyebrow">Soluciones tecnológicas e industriales</p>
            <h1>
              Calidad Medida, Exito Asegurado
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
          <div className="hero-visual reveal-on-scroll" aria-hidden="true">
            <div className="visual-placeholder">
              <img
                className="visual-image"
                src="/imagen_1.jpeg"
                alt=""
                loading="lazy"
              />
            </div>
            <span className="placeholder-caption">
            </span>
          </div>
        </section>

        <section className="metrics reveal-on-scroll" aria-label="Indicadores clave">
          <div className="metric reveal-on-scroll" style={{ transitionDelay: '0.05s' }}>
            <span className="metric-value">+10</span>
            <span className="metric-label">años implementando proyectos críticos</span>
          </div>
          <div className="metric reveal-on-scroll" style={{ transitionDelay: '0.15s' }}>
            <span className="metric-value">98%</span>
            <span className="metric-label">de disponibilidad promedio en sistemas gestionados</span>
          </div>
          <div className="metric reveal-on-scroll" style={{ transitionDelay: '0.25s' }}>
            <span className="metric-value">24/7</span>
            <span className="metric-label">monitoreo y soporte especializado</span>
          </div>
        </section>

        <section className="section reveal-on-scroll" id="servicios">
          <h2 className="section-title">Servicios especializados</h2>
          <p className="section-intro">
            Alianzas estratégicas y ejecución certificada para brindar soluciones integrales a lo largo de todo el ciclo de vida operativo.
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <article
                className="service-card reveal-on-scroll"
                key={service.title}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className="image-frame">
                  <img
                    className="service-image"
                    src={`/imagen_${index + 2}.jpeg`}
                    alt={`Servicio de ${service.title}`}
                    loading="lazy"
                  />
                </div>
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section light reveal-on-scroll" id="sectores">
          <h2 className="section-title">Sectores que impulsamos</h2>
          <p className="section-intro">
            Conocemos los retos regulatorios, de continuidad y de seguridad de las industrias más demandantes de la región.
          </p>
          <div className="industries">
            {industries.map((industry, index) => (
              <span
                className="industry-tag reveal-on-scroll"
                key={industry}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {industry}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="nosotros">
          <div className="two-column">
            <div className="reveal-on-scroll">
              <h2 className="section-title">Por qué las empresas confían en SICA Linx</h2>
              <p className="section-intro">
                Operamos bajo principios de sostenibilidad, garantizando el cumplimiento ambiental y la eficiencia en el uso de recursos, sin comprometer la productividad ni la calidad operativa.
              </p>
              <div className="differentiators">
                {differentiators.map((item, index) => (
                  <article
                    className="differentiator reveal-on-scroll"
                    key={item.title}
                    style={{ transitionDelay: `${index * 0.12}s` }}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="two-column-visual reveal-on-scroll" aria-hidden="true">
              <div className="visual-placeholder large">
                <img
                  className="visual-image"
                  src="/imagen_5.jpeg"
                  alt="Equipo especializado de SICA Linx"
                  loading="lazy"
                />
              </div>
              <span className="placeholder-caption">
                Empresa de SICALinx
              </span>
            </div>
          </div>
        </section>

        <section className="section light reveal-on-scroll" id="conocenos">
          <div className="team">
            <div className="team-media">
              <img
                className="team-image"
                src="/imagen_6.jpeg"
                alt="Equipo profesional de SICA Linx trabajando en sitio"
                loading="lazy"
              />
              <span className="team-media-caption">Nuestro equipo en acción</span>
            </div>
            <div className="team-content">
              <span className="eyebrow">Conócenos</span>
              <h2 className="section-title">Especialistas enfocados en la continuidad de tu operación</h2>
              <p className="section-intro">
                Somos ingenieros, arquitectos de sistemas y consultores que combinan experiencia de campo con visión estratégica para entregar resultados medibles y sostenibles.
              </p>
              <ul className="team-highlights">
                <li>
                  Líderes técnicos con certificaciones en automatización y metodologías de mejora continua.
                </li>
                <li>
                  Cultura orientada a la innovación aplicada: laboratorios propios y alianzas con fabricantes líderes.
                </li>
                <li>
                  Acompañamiento cercano en sitio y remoto para asegurar transferencia de conocimiento y adopción total.
                </li>
              </ul>
              <a className="btn ghost" href="#contacto">
                Conversemos con el equipo
              </a>
            </div>
          </div>
        </section>

        <section className="cta-section reveal-on-scroll" aria-label="Llamado a la acción">
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
            <div className="contact-info reveal-on-scroll">
              <h2 className="section-title">Contacto</h2>
              <p className="section-intro">
                Escríbenos para coordinar una sesión de descubrimiento o solicitar información detallada sobre nuestras soluciones.
              </p>
              <div className="contact-details">
                <p><strong>Correo:</strong> gerencia@sicalinx.x10.mx</p>
                <p><strong>Teléfono:</strong> +52 674 107 4647 </p>
                <p><strong>Oficinas:</strong> Santiago Papasquiaro Durango</p>
              </div>
            </div>
            <form className="contact-form reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <label htmlFor="nombre">Nombre completo</label>
              <input
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                autoComplete="name"
              />

              <label htmlFor="empresa">Empresa</label>
              <input
                id="empresa"
                name="empresa"
                placeholder="Nombre de la organización"
                autoComplete="organization"
              />

              <label htmlFor="correo">Correo electrónico</label>
              <input
                id="correo"
                name="correo"
                placeholder="email@empresa.com"
                type="email"
                autoComplete="email"
              />

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
          <a href="#conocenos">Conócenos</a>
          <a href="#contacto">Contacto</a>
        </div>
        <span className="footer-copy">© {new Date().getFullYear()} SICA Linx. Todos los derechos reservados.</span>
      </footer>
    </div>
  )
}

export default App
