import Image from "next/image";
import Link from "next/link";
import type { Project } from "./types";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main>
      <header className="site-header">
        <Link className="logo" href="/">Home</Link>
        <nav aria-label="Main navigation"><Link href="/#projects">Projects</Link><Link href="/#experience">Experience</Link><Link href="/#contact">Contact</Link></nav>
      </header>
      <article className="project-detail">
        <Link className="back-link" href="/#projects">← All projects</Link>
        <h1>{project.title}</h1>
        <p className="project-detail-intro">{project.description}</p>
        <ul className="project-tags" aria-label="Project topics">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <div className="project-detail-photo"><div className="project-image">
          {project.image ? <Image src={project.image} alt={`${project.title} overview`} fill sizes="(max-width: 860px) 90vw, 792px" priority /> : <span className="project-placeholder">Project photos coming soon</span>}
        </div></div>
        <section className="project-writeup" aria-labelledby="overview">
          <h2 id="overview">Overview</h2><p>{project.overview}</p>
          {project.sections.map((section) => <section className="project-detail-section" key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}
          {project.gallery.length > 0 && <div className="project-detail-gallery">{project.gallery.map((image) => <Image key={image} src={image} alt="" width={1200} height={800} />)}</div>}
        </section>
      </article>
    </main>
  );
}
