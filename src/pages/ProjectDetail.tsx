import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { getProjectById } from '../data/portfolioData';
import { Header } from '../components/layout/Header/Header';
import { ProjectMockup } from '../components/ProjectMockup';
import { ArrowLeft, Briefcase, Calendar, Wrench, Eye, X, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ProjectDetail.module.css';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const GoogleSitesIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#4285F4"/>
    <path d="M3 5v4h8V3H5c-1.1 0-2 .9-2 2z" fill="#AECBFA"/>
  </svg>
);

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useApp();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const project = id ? getProjectById(id, language) : undefined;
  const isGoogleSites = project?.id === 'juegosolimpicos';

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (project?.gallery && activeIndex !== null) {
      setActiveIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : project.gallery!.length - 1));
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (project?.gallery && activeIndex !== null) {
      setActiveIndex((prev) => (prev !== null && prev < project.gallery!.length - 1 ? prev + 1 : 0));
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setActiveIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, project?.gallery]);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <Header />
        <div className="container">
          <Link to="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            {t('project_back_home')}
          </Link>
          <h1 className={styles.title} style={{ marginTop: 'var(--space-12)' }}>
            Project not found / Proyecto no encontrado
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.detail}>
      <Header />
      
      <main className="container">
        <Link to="/" className={styles.backLink}>
          <ArrowLeft size={16} />
          {t('project_back_home')}
        </Link>
        
        {/* Large Mockup Visualization */}
        <section className={styles.visualHero}>
          <ProjectMockup projectId={project.id} height={360} imageUrl={project.image} />
        </section>

        {/* Header Info */}
        <section className={styles.headerInfo}>
          <h1 className={styles.title}>{project.title}</h1>
          
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Briefcase size={14} />
                  {t('project_role')}
                </span>
              </div>
              <div className={styles.metaValue}>{project.role}</div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={14} />
                  {t('project_date')}
                </span>
              </div>
              <div className={styles.metaValue}>{project.date}</div>
            </div>
          </div>
        </section>

        {/* Project Story / Description */}
        <section className={styles.storySection}>
          <h2 className={styles.sectionTitle}>{t('project_story')}</h2>
          <div className={styles.storyList}>
            {project.story.map((paragraph, index) => (
              <p key={index}>• {paragraph}</p>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <section className={styles.storySection}>
            <h2 className={styles.sectionTitle}>{t('project_gallery')}</h2>
            <div className={styles.galleryGrid}>
              {project.gallery.map((image, index) => (
                <div 
                  key={index} 
                  className={styles.galleryCard}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={image} alt={`${project.title} gallery page ${index + 1}`} className={styles.galleryImage} />
                  <div className={styles.galleryHover}>
                    <Eye size={24} color="#FFFFFF" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Project Links Section */}
        {project.links && project.links.length > 0 && (
          <section className={styles.storySection}>
            <h2 className={styles.sectionTitle}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                {isGoogleSites ? <GoogleSitesIcon size={18} /> : <InstagramIcon size={18} />}
                {isGoogleSites ? t('project_links_sites') : t('project_links')}
              </span>
            </h2>
            <div className={styles.linksGrid}>
              {project.links.map((link, index) => {
                const isReel = link.url.includes('/reel/');
                return (
                  <div key={index} className={styles.linkCard}>
                    <p className={styles.linkCardLabel}>{link.label}</p>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkCardMediaWrapper}
                    >
                      {link.thumbnail ? (
                        <img
                          src={link.thumbnail}
                          alt={link.label}
                          className={styles.linkCardImage}
                        />
                      ) : (
                        <div className={styles.linkCardPlaceholder}>
                          {isGoogleSites ? <GoogleSitesIcon size={32} /> : <InstagramIcon size={32} />}
                        </div>
                      )}
                      
                      {isReel && (
                        <div className={styles.playButtonOverlay}>
                          <div className={styles.playIconContainer}>
                            <Play size={24} fill="currentColor" />
                          </div>
                        </div>
                      )}

                      <div className={styles.instagramBadge}>
                        {isGoogleSites ? <GoogleSitesIcon size={18} /> : <InstagramIcon size={18} />}
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Tools Section */}
        <section className={styles.storySection}>
          <h2 className={styles.sectionTitle}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Wrench size={18} />
              {t('project_tools')}
            </span>
          </h2>
          <div className={styles.toolGrid}>
            {project.tools.map((tool, index) => (
              <span key={index} className={styles.toolTag}>
                {tool}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {activeIndex !== null && project.gallery && project.gallery[activeIndex] && (
        <div className={styles.lightbox} onClick={() => setActiveIndex(null)}>
          <button 
            className={styles.closeBtn} 
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          
          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={handlePrev}
            aria-label={t('gallery_nav_prev')}
          >
            <ChevronLeft size={36} />
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img 
              src={project.gallery[activeIndex]} 
              alt={`${project.title} gallery page ${activeIndex + 1}`} 
              className={styles.lightboxImage} 
            />
          </div>

          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={handleNext}
            aria-label={t('gallery_nav_next')}
          >
            <ChevronRight size={36} />
          </button>

          <div className={styles.lightboxFooter} onClick={(e) => e.stopPropagation()}>
            <div className={styles.imageCounter}>
              {activeIndex + 1} / {project.gallery.length}
            </div>
            <div className={styles.navHint}>
              {t('gallery_nav_hint')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
