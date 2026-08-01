import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { getBio, getProjects, getContact } from '../data/portfolioData';
import { Header } from '../components/layout/Header/Header';
import { ProfileAvatar } from '../components/ProfileAvatar';
import { ProjectMockup } from '../components/ProjectMockup';
import { Copy, Check, Phone } from 'lucide-react';
import { FaLinkedin, FaBehance } from 'react-icons/fa';
import styles from './Home.module.css';

export const Home: React.FC = () => {
  const { language, t } = useApp();
  const bio = getBio(language);
  const projects = getProjects(language);
  const contact = getContact();
  
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className={styles.home}>
      <Header />
      
      <main className="container">
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.name}>{bio.name}</div>
              <h1 className={styles.title}>{bio.title}</h1>
              <p className={styles.pitch}>{bio.pitch}</p>
              <div className={styles.bio}>
                {bio.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>
            </div>
            <div className={styles.heroAvatarContainer}>
              <ProfileAvatar size={160} />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className={styles.sectionTitle}>{t('nav_projects')}</h2>
          <div className={styles.projectList}>
            {projects.map((proj) => (
              <Link key={proj.id} to={`/proyecto/${proj.id}`} className={styles.projectCard}>
                <div className={styles.projectVisual}>
                  <ProjectMockup projectId={proj.id} height={200} imageUrl={proj.image} />
                </div>
                
                <div className={styles.projectHeader}>
                  <div>
                    <h3 className={styles.projectTitle}>{proj.title}</h3>
                    <div className={styles.projectRole}>{proj.role}</div>
                  </div>
                  <div className={styles.projectDate}>{proj.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.contact}>
          <h2 className={styles.title} style={{ fontSize: 'var(--text-xl)' }}>{t('home_contact_title')}</h2>
          <p className={styles.contactSubtitle}>{t('home_contact_subtitle')}</p>
          
          <div className={styles.contactActions}>
            <button onClick={copyEmail} className={styles.btnPrimary}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? t('home_email_copied') : t('home_copy_email')}
            </button>
            
            <a 
              href={contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.btnSecondary}
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>

            <a 
              href={contact.behance} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.btnSecondary}
            >
              <FaBehance size={16} />
              Behance
            </a>

            <a 
              href={`https://wa.me/${contact.phone.replace('+', '')}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.btnSecondary}
            >
              <Phone size={16} />
              WhatsApp
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
