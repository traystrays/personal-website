import type { Metadata } from "next";
import { ProjectDetail } from "../ProjectDetail";
import type { Project } from "../types";

export const projectTwo: Project = {
  slug: "project-two", title: "Project Two", image: "/images/projects/sensor.png",
  description: "A sensor project exploring the connection between physical measurements, electronics, and embedded systems.",
  tags: ["Embedded Systems", "Sensors", "Electronics"],
  overview: "Write the project overview here: introduce the problem, your approach, and the outcome.",
  sections: [{ heading: "Implementation", body: "Describe the hardware, software, testing, and results here." }],
  gallery: [],
};

export const metadata: Metadata = { title: `${projectTwo.title} | Tracy Sun`, description: projectTwo.description };
export default function ProjectTwoPage() { return <ProjectDetail project={projectTwo} />; }
