import Image from "next/image";

const Arrow = () => <span aria-hidden="true">↗</span>;

const featuredProjects = [
  { title: "Project One", image: "/images/projects/rover.png", tools: "Robotics / Design" },
  { title: "Project Two", image: "/images/projects/sensor.png", tools: "Embedded Systems" },
  { title: "Project Three", image: "/images/projects/gripper.png", tools: "Mechanical Design" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#home">Tracy</a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">Fun</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <p className="eyebrow">Welcome!</p>
        <h1>Hi, I'm Tracy</h1>
        <p className="hero-intro">
          A concise introduction about your engineering interests and the work you want to do.
        </p>
        <div className="hero-actions">
          <a className="button" href="/resume.pdf" target="_blank">Resume</a>

        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <h2>Projects</h2>
        </div>
        <div className="project-gallery">
          {featuredProjects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <a className="project-image" href="#" aria-label={`Open ${project.title}`}>
                <Image src={project.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
                <span className="project-arrow"><Arrow /></span>
              </a>
              <div className="project-caption">
                <div><span>0{index + 1}</span><h3>{project.title}</h3></div>
                <p>{project.tools}</p>
              </div>
            </article>
          ))}
        </div>
        <details className="more-projects">
          <summary><span>View more projects</span><span className="plus" aria-hidden="true">+</span></summary>
          <div className="more-project-grid">
            {["Project Four", "Project Five", "Project Six"].map((title, index) => (
              <a href="#" key={title}>
                <span>0{index + 4}</span>
                <h3>{title}</h3>
                <p>Brief project description and tools used.</p>
                <Arrow />
              </a>
            ))}
          </div>
        </details>
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
        <div className="section-heading">
          <h2>Fun</h2>
        </div>
        <p className="about-copy">
          Add a short note about your interests, hobbies, or what you enjoy outside of work.
        </p>
      </section>

      <footer id="contact">
        <p className="eyebrow">  CONTACT  </p>
        <div className="contact-heading">
          <span className="envelope-icon" aria-hidden="true">
            <span className="envelope-flap" />
            <span className="heart">♥</span>
          </span>
          <h2>Let&apos;s connect.</h2>
        </div>
        <a className="email" href="mailto:your.email@example.com">your.email@example.com <Arrow /></a>
        <div className="footer-bottom">
          <p>© 2026 Your Name</p>
          <div><a href="#">LinkedIn</a><a href="#">GitHub</a><a href="#home">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
