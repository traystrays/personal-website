import type { Metadata } from "next";
import { ProjectDetail } from "../ProjectDetail";
import type { Project } from "../types";

export const projectOne: Project = {
  slug: "project-one", title: "Project One", image: "/images/projects/rover.png",
  description: "A rover project exploring how mechanical design and robotic systems come together in a mobile platform.",
  tags: ["Robotics", "Mechanical Design", "Prototyping"],
  overview: "Write the project overview here: what did you build, why did you build it, and what was the result?",
  sections: [
    { heading: "Process", body: "Describe the most important design decisions, experiments, and lessons from this project." },
    // Add more objects for more sections: { heading: "Results", body: "..." },
  ],
  gallery: [],
};

export const metadata: Metadata = { title: `${projectOne.title} | Tracy Sun`, description: projectOne.description };
export default function ProjectOnePage() { return <ProjectDetail project={projectOne} />; }
