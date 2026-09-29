import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { featuredYoutube, portfolio, process, projects, services, tools } from './data.js';

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'Long-form', href: '#youtube' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const filters = ['All work', 'YouTube', 'Film', 'Brand', 'Social'];

function Icon({ name, size = 18, ...props }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    diagonal: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    play: <path d="m8 5 12 7-12 7z" fill="currentColor" stroke="none" />,
    close: <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>,
    menu: <><path d="M4 8h16" /><path d="M4 16h16" /></>,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    sparkle: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></>,
    sound: <><path d="M3 10v4" /><path d="M7 7v10" /><path d="M11 4v16" /><path d="M15 8v8" /><path d="M19 10v4" /></>,
  };

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

function SectionLabel({ index, children, className = '' }) {
  return (
    <div className={`section-label ${className}`}>
      <span className="section-label__index">{index}</span>
      <span>{children}</span>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Avinash, back to top">
        <span className="brand__mark">A<span>.</span></span>
      <span className="brand__text">
          <strong>AVINASH</strong>
          <small>VIDEO EDITOR · VISUAL STORYTELLER</small>
        </span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <Icon name={menuOpen ? 'close' : 'menu'} size={21} />
      </button>

      <nav
        className={`primary-nav${menuOpen ? ' primary-nav--open' : ''}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <span className="availability"><span />Available for freelance</span>
        <a className="header-reel" href="#contact">Let's talk <Icon name="arrow" size={13} /></a>
      </div>
    </header>
  );
}

function Hero({ onOpenShowreel }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__content">
        <p className="eyebrow hero__eyebrow"><span className="eyebrow__line" />VIDEO EDITOR · VISUAL STORYTELLER</p>
        <h1 id="hero-title">I turn raw footage into<br /><span>videos people want to watch.</span></h1>
        <p className="hero__intro">I'm Avinash. I edit social, YouTube and brand videos with sharp pacing, clean visuals and clear sound.</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#work" aria-label="Explore my work">
            Explore my work <Icon name="arrow" size={17} />
          </a>
          <a className="button button--text" href="#about">More about me <Icon name="arrow" size={17} /></a>
        </div>
        <p className="hero__categories">SHORT-FORM <i>·</i> YOUTUBE <i>·</i> BRAND VIDEO</p>
      </div>
      <div className="hero__visual">
        <button className="hero-preview" type="button" onClick={onOpenShowreel} aria-label="Play Avinash's showreel">
          <span className="hero-preview__screen">
            <span className="hero-preview__ambient" aria-hidden="true" />
            <img src={portfolio.showreelPoster} alt="" fetchPriority="high" onError={(event) => event.currentTarget.classList.add('media-placeholder-hidden')} />
            <span className="hero-preview__topline"><span>AVINASH · SHOWREEL</span><span>COMING SOON</span></span>
            <span className="hero-preview__play">
              <span className="hero-preview__play-icon"><Icon name="play" size={15} /></span>
              <span className="hero-preview__play-label">PLAY SHOWREEL</span>
            </span>
            <span className="hero-preview__stamp">SHOWREEL<br />PREVIEW</span>
            <span className="hero-preview__timeline" aria-hidden="true">
              <span className="hero-preview__track"><i /><b /></span>
              <span className="hero-preview__wave">
                {Array.from({ length: 36 }, (_, index) => <i key={index} style={{ '--bar': `${18 + ((index * 19) % 66)}%` }} />)}
              </span>
              <span className="hero-preview__controls">
                <span className="hero-preview__time">00:00</span>
                <span className="hero-preview__controls-title">SHOWREEL PREVIEW</span>
                <span className="hero-preview__quality">16:9</span>
              </span>
            </span>
          </span>
          <span className="hero-preview__caption"><span>Showreel coming soon</span><span>Open player <Icon name="diagonal" size={15} /></span></span>
        </button>
      </div>
      <a className="scroll-cue hero__scroll-cue" href="#work">
        <span className="scroll-cue__line" aria-hidden="true" />
        <span>SCROLL TO EXPLORE</span>
      </a>
    </section>
  );
}

function Marquee() {
  const phrases = ['SHORT-FORM', 'YOUTUBE', 'BRAND CONTENT', 'MOTION DESIGN', 'SOUND DESIGN'];
  return (
    <div className="marquee" aria-label="SHORT-FORM • YOUTUBE • BRAND CONTENT • MOTION DESIGN • SOUND DESIGN">
      <div className="marquee__track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="marquee__group" key={copy}>
            {phrases.map((phrase) => (
              <span className="marquee__phrase" key={`${copy}-${phrase}`}>
                {phrase}<i>•</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, onSelect }) {
  const isComingSoon = project.status === 'Coming soon';
  const cardContent = (
    <>
      <span className="project-card__visual">
        <span className="project-card__placeholder" aria-hidden="true">
          {!isComingSoon && <span className="project-card__placeholder-mark"><Icon name="play" size={17} /></span>}
          <span className="project-card__placeholder-copy">{isComingSoon ? 'COMING SOON' : 'PROJECT PREVIEW'}</span>
        </span>
        {project.cover && (
          <img
            src={project.cover}
            alt=""
            loading="lazy"
            onError={(event) => event.currentTarget.classList.add('media-placeholder-hidden')}
          />
        )}
        <span className="project-card__number">{project.number} / {String(projects.length).padStart(2, '0')}</span>
        {!isComingSoon && <span className="project-card__play"><Icon name="play" size={14} /></span>}
        <span className="project-card__format">{isComingSoon ? project.status : project.format}</span>
        {!isComingSoon && <span className="project-card__open"><Icon name="diagonal" size={17} /></span>}
      </span>
      <span className="project-card__meta">
        <span className="project-card__meta-copy">
          <span className="project-card__title">{project.title}</span>
          <span className={isComingSoon ? 'project-card__status' : undefined}>
            {isComingSoon ? project.status : <>{project.category} <i>·</i> {project.year}</>}
          </span>
        </span>
        {!isComingSoon && <span className="project-card__view">Open preview <Icon name="arrow" size={15} /></span>}
      </span>
    </>
  );

  return (
    <article className={`project-card project-card--${project.tone}${isComingSoon ? ' project-card--placeholder' : ''}`}>
      {isComingSoon ? (
        <div className="project-card__button project-card__button--placeholder">{cardContent}</div>
      ) : (
        <button
          className="project-card__button"
          type="button"
          onClick={() => onSelect(project)}
          aria-label={`View ${project.title}, ${project.format.toLowerCase()}`}
        >
          {cardContent}
        </button>
      )}
    </article>
  );
}

function Work({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All work');
  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === 'All work' || (project.status !== 'Coming soon' && project.category === activeFilter)),
    [activeFilter],
  );

  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <div className="section-top reveal">
        <SectionLabel index="01">SELECTED WORK</SectionLabel>
        <span className="section-top__note">EDITED BY AVINASH</span>
      </div>
      <div className="work-intro reveal">
        <h2 id="work-title">Selected Work</h2>
        <p>New work will appear here.</p>
      </div>

      <div className="work-toolbar reveal">
        <span className="work-toolbar__count">PROJECTS <b>({String(visibleProjects.length).padStart(2, '0')})</b></span>
        <div className="filter-list" role="group" aria-label="Filter projects by type">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? 'filter-chip filter-chip--active' : 'filter-chip'}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {visibleProjects.length > 0 ? (
        <div className={`project-grid${visibleProjects.length < 3 ? ' project-grid--filtered' : ''}`}>
          {visibleProjects.map((project, index) => (
            <div className={`reveal${index % 2 ? ' reveal--delay' : ''}`} key={project.id}>
              <ProjectCard project={project} onSelect={onSelectProject} />
            </div>
          ))}
        </div>
      ) : (
        <p className="project-empty" role="status">No projects in this category yet.</p>
      )}

      <div className="work-footer reveal">
        <span>NEW PROJECTS WILL APPEAR HERE</span>
        <a className="text-link" href="#contact">Discuss a project <Icon name="arrow" size={15} /></a>
      </div>
    </section>
  );
}

function FeaturedYoutube({ onSelectProject }) {
  return (
    <section className="section youtube-section" id="youtube" aria-labelledby="youtube-title">
      <div className="section-top reveal">
        <SectionLabel index="02">YOUTUBE EDITING</SectionLabel>
        <span className="section-top__note">LONG-FORM EDITING</span>
      </div>
      <div className="youtube-intro reveal">
        <h2 id="youtube-title">Long-form editing.</h2>
        <p>Long-form projects will appear here.</p>
      </div>
      <button className="youtube-feature" type="button" onClick={() => onSelectProject(featuredYoutube)} aria-label="Open YouTube editing preview">
        <span className="youtube-feature__screen">
          <img src={featuredYoutube.cover} alt="" loading="lazy" onError={(event) => event.currentTarget.classList.add('media-placeholder-hidden')} />
          <span className="youtube-feature__light" aria-hidden="true" />
          <span className="youtube-feature__label">YOUTUBE / LONG-FORM</span>
          <span className="youtube-feature__play"><Icon name="play" size={20} /></span>
          <span className="youtube-feature__timecode">00:00 — 00:00</span>
        </span>
        <span className="youtube-feature__meta">
          <span><strong>Coming soon</strong><small>YOUTUBE EDIT · COMING SOON</small></span>
          <span className="youtube-feature__open">Open preview <Icon name="arrow" size={16} /></span>
        </span>
      </button>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-title">
      <div className="section-top reveal">
        <SectionLabel index="03">Services</SectionLabel>
        <span className="section-top__note">VIDEO EDITING &amp; POST-PRODUCTION</span>
      </div>
      <div className="services-heading reveal">
        <h2 id="services-title">Video editing<br /><em>services.</em></h2>
        <p>Editing from first cut to final delivery.</p>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <article className="service-row reveal" key={service.number}>
            <span className="service-row__number">{service.number}</span>
            <div className="service-row__main">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <ul className="service-tags" aria-label={`${service.title} formats`}>
              {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <span className="service-row__icon" aria-hidden="true"><Icon name="diagonal" size={18} /></span>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="section-top reveal">
        <SectionLabel index="04">ABOUT AVINASH</SectionLabel>
        <span className="section-top__note">VIDEO EDITOR · 2026</span>
      </div>
      <div className="about-layout">
        <div className="about-quote reveal">
          <span className="about-quote__mark">“</span>
          <blockquote>I edit for pace, clarity and attention.</blockquote>
          <span className="about-quote__credit">ABOUT AVINASH</span>
          <span className="about-orbit about-orbit--one" aria-hidden="true" />
          <span className="about-orbit about-orbit--two" aria-hidden="true" />
        </div>
        <div className="about-copy reveal reveal--delay">
          <h2 id="about-title">About Avinash</h2>
          <p>I'm Avinash. I shape raw footage into clear social, YouTube and brand videos.</p>
          <a href="#contact" className="text-link">Start a project <Icon name="arrow" size={15} /></a>
        </div>
      </div>

      <div className="process-block reveal">
        <div className="process-block__intro">
          <span className="eyebrow"><span className="eyebrow__line" />Process</span>
          <p>Understand → Build → Refine</p>
        </div>
        <div className="process-grid" aria-label="Understand, Build, Refine">
          {process.map((step) => (
            <article className="process-step" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section className="section toolkit-section" id="toolkit" aria-labelledby="toolkit-title">
      <div className="section-top reveal">
        <SectionLabel index="05">TOOLS</SectionLabel>
        <span className="section-top__note">SOFTWARE &amp; POST-PRODUCTION SKILLS</span>
      </div>
      <div className="toolkit-layout">
        <div className="toolkit-heading reveal">
          <h2 id="toolkit-title">Tools &amp;<br /><em>workflow.</em></h2>
          <p>Editing software and post-production skills.</p>
          <div className="toolkit-stamp" aria-hidden="true">
            <Icon name="sound" size={23} />
            <span>EDIT<br />MOTION<br />COLOR</span>
          </div>
        </div>
        <div className="tool-groups">
          {tools.map((toolGroup, index) => (
            <div className="tool-group reveal" key={toolGroup.group}>
              <span className="tool-group__number">0{index + 1}</span>
              <div className="tool-group__content">
                <span className="tool-group__label">{toolGroup.group}</span>
                <div className="tool-chip-list">
                  {toolGroup.items.map((tool) => (
                    <span className="tool-chip" key={tool}>
                      <span className="tool-chip__dot" />{tool}
                    </span>
                  ))}
                </div>
              </div>
              <Icon name="sparkle" size={17} className="tool-group__sparkle" />
            </div>
          ))}
          <p className="tool-note">Editing, motion and color.</p>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="section notes-section" aria-labelledby="notes-title">
      <div className="section-top reveal">
        <SectionLabel index="06">CLIENT FEEDBACK</SectionLabel>
          <span className="section-top__note">CLIENT FEEDBACK</span>
      </div>
      <div className="testimonial-card reveal">
        <div className="testimonial-card__side">
          <span className="testimonial-card__quote-mark">“</span>
          <span className="testimonial-card__label">NO QUOTES TO SHARE</span>
        </div>
        <div className="testimonial-card__main">
          <h2 id="notes-title">Client <em>feedback.</em></h2>
          <p className="testimonial-placeholder">
            No client feedback to share yet.
          </p>
          <span className="testimonial-attribution">NO QUOTES PUBLISHED</span>
          <span className="testimonial-card__index">FEEDBACK / 01</span>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [notice, setNotice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const brief = String(form.get('brief') || '').trim();
    const subject = encodeURIComponent(`Project inquiry from ${name || 'a new collaborator'}`);
    const body = encodeURIComponent(`Hi Avinash,\n\n${brief}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
    setNotice('Your email app should open with the project details ready to send.');
    event.currentTarget.reset();
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-top reveal">
        <SectionLabel index="07">CONTACT</SectionLabel>
        <span className="section-top__note">FREELANCE VIDEO EDITING</span>
      </div>
      <div className="contact-layout">
        <div className="contact-copy reveal">
          <span className="eyebrow"><span className="eyebrow__line" />CONTACT AVINASH</span>
          <h2 id="contact-title">Have footage?<br /><em>Let's edit it.</em></h2>
          <p>Freelance edits for social, YouTube and brands.</p>
          <a className="contact-email" href={`mailto:${portfolio.email}`}>
            {portfolio.email} <Icon name="diagonal" size={19} />
          </a>
          <span className="contact-response"><span /> Project inquiries open · <a href={`tel:${portfolio.phone}`}>{portfolio.phone}</a></span>
        </div>
        <form className="contact-form reveal reveal--delay" onSubmit={handleSubmit}>
          <div className="contact-form__top">
            <span>PROJECT INQUIRY</span>
            <span>01 — 03</span>
          </div>
          <label className="form-field">
            <span>Your name</span>
            <input name="name" type="text" autoComplete="name" placeholder="Name" required />
          </label>
          <label className="form-field">
            <span>Email address</span>
            <input name="email" type="email" autoComplete="email" placeholder="your@email.com" required />
          </label>
          <label className="form-field">
            <span>Project details</span>
            <textarea name="brief" rows="3" placeholder="Format, platform, deadline, deliverables" required />
          </label>
          <button className="button button--primary contact-form__submit" type="submit">
            Send inquiry <Icon name="arrow" size={17} />
          </button>
          <p className="form-notice" role="status" aria-live="polite">{notice}</p>
          <p className="form-privacy">Opens a draft in your email app.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand brand--footer" href="#top" aria-label="Avinash, back to top">
        <span className="brand__mark">A<span>.</span></span>
        <span className="brand__text">
          <strong>AVINASH</strong>
          <small>VIDEO EDITOR · VISUAL STORYTELLER</small>
        </span>
      </a>
      <span className="footer-note">SOCIAL · YOUTUBE · BRAND EDITS</span>
      <a href="#top" className="back-to-top">Back to top <span>↑</span></a>
      <span className="footer-copyright">© {new Date().getFullYear()} AVINASH</span>
    </footer>
  );
}

function MediaDialog({ project, showreelOpen, onClose }) {
  const [mediaUnavailable, setMediaUnavailable] = useState(false);
  const modalRef = useRef(null);
  const videoRef = useRef(null);
  const media = useMemo(() => project || (showreelOpen ? {
    title: 'Avinash · showreel',
    format: 'VIDEO EDITOR · 2026',
    video: portfolio.showreel,
    cover: portfolio.showreelPoster,
    description: 'Showreel preview coming soon.',
    services: [],
  } : null), [project, showreelOpen]);

  useEffect(() => {
    if (!media) return undefined;
    const previousActiveElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    modalRef.current?.focus();
    setMediaUnavailable(false);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      previousActiveElement?.focus?.();
    };
  }, [media, onClose]);

  useEffect(() => {
    if (!media) return;
    const video = videoRef.current;
    if (!video) return;
    video.load();
  }, [media]);

  if (!media) return null;

  const mediaLabel = project ? project.format : 'SHOWREEL';
  const keepFocusInside = (event) => {
    if (event.key !== 'Tab') return;
    const focusable = modalRef.current?.querySelectorAll('button, video[controls], [href], input, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section
        className="media-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="media-modal-title"
        tabIndex={-1}
        ref={modalRef}
        onKeyDown={keepFocusInside}
      >
        <button type="button" className="media-modal__close" onClick={onClose} aria-label="Close video dialog">
          <Icon name="close" size={20} />
        </button>
        <div className={`media-modal__screen${mediaUnavailable ? ' media-modal__screen--unavailable' : ''}`}>
          {!mediaUnavailable ? (
            <video
              ref={videoRef}
              src={media.video}
              poster={media.cover}
              controls
              playsInline
              preload="metadata"
              onError={() => setMediaUnavailable(true)}
              aria-label={`${media.title} video`}
            />
          ) : (
            <div className="media-unavailable">
              <div className="media-unavailable__icon"><Icon name="play" size={17} /></div>
              <span className="eyebrow">COMING SOON</span>
              <p>Video preview coming soon.</p>
            </div>
          )}
        </div>
        <div className="media-modal__details">
          <div>
            <span className="eyebrow">{mediaLabel}</span>
            <h2 id="media-modal-title">{media.title}</h2>
            <p>{media.description}</p>
          </div>
          <div className="media-modal__services">
            {media.services?.map((service) => <span key={service}>{service}</span>)}
          </div>
        </div>
      </section>
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
      });
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />;
}

function useReveal() {
  useEffect(() => {
    const root = document.getElementById('main-content');
    const elements = root?.querySelectorAll('.reveal') ?? [];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    const observeNewElements = () => {
      root?.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => observer.observe(element));
    };
    observeNewElements();
    const mutationObserver = new MutationObserver(observeNewElements);
    if (root) mutationObserver.observe(root, { childList: true, subtree: true });
    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const closeMedia = useCallback(() => {
    setSelectedProject(null);
    setShowreelOpen(false);
  }, []);

  useReveal();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Hero onOpenShowreel={() => setShowreelOpen(true)} />
        <Marquee />
        <Work onSelectProject={setSelectedProject} />
        <FeaturedYoutube onSelectProject={setSelectedProject} />
        <Services />
        <About />
        <Toolkit />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <MediaDialog project={selectedProject} showreelOpen={showreelOpen} onClose={closeMedia} />
    </>
  );
}
