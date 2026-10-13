import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects/data";
import { profileLinks } from "./profile";

const Arrow = () => <span aria-hidden="true">↗</span>;

const ResumeIcon = () => (
  <svg className="button-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 3.5h8l4 4V20.5H6z" />
    <path d="M14 3.5v4h4M8.5 12h7M8.5 15.5h5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="button-icon button-icon-filled" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5.2 7.1A2.1 2.1 0 1 0 5.2 3a2.1 2.1 0 0 0 0 4.1ZM3.4 9h3.6v11.5H3.4zM9 9h3.4v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.4 4.5 5.5v6.4H17v-5.7c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.8H9z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="button-icon button-icon-filled" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.5a9.7 9.7 0 0 0-3.1 18.9c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.7 9.7 0 0 0 12 2.5Z" />
  </svg>
);


export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#home">Home</a>
        <nav aria-label="Main navigation">
          <a className="nav-resume" href={profileLinks.resume ?? "/resume.pdf"} target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">Fun</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">WELCOME!</p>
          <h1> Tracy Sun</h1>
          <p className="hero-intro">
            A concise introduction about your engineering interests and the work you want to do.
          </p>
          <div className="hero-actions">
            {[
              { label: "Resume", href: profileLinks.resume, icon: <ResumeIcon /> },
              { label: "LinkedIn", href: profileLinks.linkedin, icon: <LinkedInIcon /> },
              { label: "GitHub", href: profileLinks.github, icon: <GitHubIcon /> },
            ].map(({ label, href, icon }) => href ? (
              <a className="button" href={href} target="_blank" rel="noopener noreferrer" key={label}>
                {icon}<span className="button-label">{label}</span>
              </a>
            ) : (
              <span className="button button-disabled" role="link" aria-disabled="true" title={`${label} will be available soon`} key={label}>
                {icon}<span className="button-label">{label}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="hero-polaroid">
          <div className="hero-photo-placeholder">
            <span>Add your photo</span>
            <small>public/images/profile.jpg</small>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <h2>Projects</h2>
        </div>
        <div className="project-gallery">
          {projects.map((project) => (
            <Link className="project-card polaroid-frame" href={`/projects/${project.slug}`} key={project.slug} aria-label={`View ${project.title}`}>
              <div className="project-image">
                {project.image ? <Image src={project.image} alt="" fill sizes="(max-width: 440px) calc(100vw - 66px), (max-width: 700px) 374px, (max-width: 904px) calc((100vw - 88px) / 2 - 26px), 382px" /> : <span className="project-placeholder">Next project <span aria-hidden="true">↗</span></span>}
                <span className="project-arrow"><Arrow /></span>
              </div>
              <div className="project-caption">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tags" aria-label="Project topics">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </Link>
          ))}
        </div>

      </section>

      <section className="section experience" id="experience">
        <div className="section-heading">
          <h2>Experience</h2>
        </div>
        <div className="experience-list">
          <article>
            <p className="date">20XX — PRESENT</p>
            <div><h3>Role Title</h3><p>Organization Name</p></div>
          </article>
          <article>
            <p className="date">20XX — 20XX</p>
            <div><h3>Role Title</h3><p>Organization Name</p></div>
          </article>
          <article>
            <p className="date">20XX — 20XX</p>
            <div><h3>Role Title</h3><p>Organization Name</p></div>
          </article>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-content">
          <div className="section-heading">
            <h2>Fun</h2>
          </div>
          <p className="about-copy">
            Add a short note about your interests, hobbies, or what you enjoy outside of work.
          </p>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-bottom">
          <p>© 2026 Your Name</p>
          <div>
            <a href="mailto:your.email@example.com">Email</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
