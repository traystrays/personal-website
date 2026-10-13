import type { Metadata } from "next";
import { ProjectDetail } from "../ProjectDetail";
import type { Project } from "../types";

export const projectFour: Project = {
  slug: "project-four", title: "Project Four", image: null,
  description: "A space for the next project. Photos, a summary, and project details are coming soon.",
  tags: ["Coming soon"], overview: "Add a short overview for this project.",
  sections: [{ heading: "Details", body: "Add the project write-up here." }], gallery: [],
};

export const metadata: Metadata = { title: `${projectFour.title} | Tracy Sun`, description: projectFour.description };
export default function ProjectFourPage() { return <ProjectDetail project={projectFour} />; }
