import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './protafolio.css';

const projectsData = [
  {
    id: 1,
    tech: 'shopify',
    badge: 'Shopify',
    title: 'John Daly Shop',
    desc: 'Tienda oficial de retail y merchandising del legendario golfista John Daly. Enfoque en conversión y optimización de catálogo masivo.',
    link: 'https://shop.johndaly.com/'
  },
  {
    id: 2,
    tech: 'shopify',
    badge: 'Shopify Plus',
    title: 'NYC CityStore',
    desc: 'La tienda en línea oficial del gobierno de la Ciudad de Nueva York. Maquetación robusta y segura para coleccionables institucionales.',
    link: 'https://a856-citystore.nyc.gov/'
  },
  {
    id: 3,
    tech: 'shopify',
    badge: 'Shopify',
    title: 'Hyve Promo',
    desc: 'Plataforma B2B y catálogo ágil para soluciones promocionales corporativas. Experiencia de filtrado y navegación pulida.',
    link: 'https://hyve.promo/collections/all-products'
  },
  {
    id: 4,
    tech: 'shopify',
    badge: 'Shopify',
    title: 'Pirates Shop',
    desc: 'Tienda de e-commerce internacional oficial del club deportivo de fútbol Orlando Pirates con pasarelas globales optimizadas.',
    link: 'https://piratesshop.co.za/'
  },
  {
    id: 5,
    tech: 'shopify',
    badge: 'Shopify',
    title: 'Kia Gear Shop',
    desc: 'E-commerce de accesorios de estilo de vida oficial para KIA. Diseño corporativo fiel a las directrices globales de la marca.',
    link: 'https://www.shopkiagear.com/shop'
  },
  {
    id: 6,
    tech: 'shopify',
    badge: 'Sandbox',
    title: 'Tienda de Pruebas Activa',
    desc: 'Entorno de desarrollo ágil para customización avanzada de temas Liquid, integraciones de API y testing pre-producción.',
    link: 'https://v9fxh1-un.myshopify.com/'
  },
  {
    id: 7,
    tech: 'squarespace',
    badge: 'Squarespace',
    title: 'VT CAR',
    desc: 'Sitio corporativo en desarrollo enfocado en la presentación elegante de servicios automotrices y de transporte.',
    link: 'https://vtcar.squarespace.com/',
    credentials: { password: 'hola1' }
  },
  {
    id: 8,
    tech: 'squarespace',
    badge: 'Squarespace',
    title: 'Universidad del Sur El Salvador',
    desc: 'Portal académico institucional en fase de maquetación para planes de estudio, admisiones e identidad educativa.',
    link: 'https://univerdaddelsur.squarespace.com/',
    credentials: { password: 'hola1' }
  }
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter(project => project.tech === activeTab);

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Portafolio Brenda Donis</h1>
        <p>Selección de Tiendas E-commerce y Sitios Web Desarrollados</p>
      </header>

      <div className="portfolio-tabs">
        <button 
          className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          Todos
        </button>
        <button 
          className={`tab-btn ${activeTab === 'shopify' ? 'active' : ''}`}
          onClick={() => setActiveTab('shopify')}
        >
          Shopify
        </button>
        <button 
          className={`tab-btn ${activeTab === 'squarespace' ? 'active' : ''}`}
          onClick={() => setActiveTab('squarespace')}
        >
          Squarespace
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-top">
              <span className={`badge badge-${project.tech}`}>
                {project.badge}
              </span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              {project.credentials && (
                <div className="credentials">
                  <strong>Acceso Protegido:</strong><br />
                  Contraseña: <code>{project.credentials.password}</code>
                </div>
              )}
            </div>
            
            <div className="card-bottom">
              <a 
                href={project.link} 
                className="project-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {project.tech === 'shopify' ? 'Visitar Sitio Web →' : 'Probar Sandbox →'}
              </a>
            </div>
          </div>
        ))}
      </div>

      <footer className="portfolio-footer">
        <p>© 2026 - Portafolio de Desarrollo y E-commerce. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Portfolio />);