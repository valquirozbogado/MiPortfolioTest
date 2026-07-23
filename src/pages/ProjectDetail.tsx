import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { getProjectById } from '../data/portfolioData';
import { Header } from '../components/layout/Header/Header';
import { ProjectMockup } from '../components/ProjectMockup';
import { ArrowLeft, Briefcase, Calendar, Wrench } from 'lucide-react';
import styles from './ProjectDetail.module.css';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useApp();
  
  const project = id ? getProjectById(id, language) : undefined;

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
          <ProjectMockup projectId={project.id} height={320} imageUrl={project.image} />
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
    </div>
  );
};
