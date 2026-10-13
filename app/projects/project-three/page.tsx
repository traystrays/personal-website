import type { Metadata } from "next";
import { ProjectDetail } from "../ProjectDetail";
import type { Project } from "../types";

export const projectThree: Project = {
  slug: "project-three", title: "Project Three", image: "/images/projects/gripper.png",
  description: "A robotic gripper project exploring mechanism design and how geometry shapes interaction with objects.",
  tags: ["Mechanical Design", "Robotics", "Mechanisms"],
  overview: "Write the project overview here: explain the objective, your role, and what you learned.",
  sections: [{ heading: "Design", body: "Describe the mechanism, iterations, and final performance here." }],
  gallery: [],
};

export const metadata: Metadata = { title: `${projectThree.title} | Tracy Sun`, description: projectThree.description };
export default function ProjectThreePage() { return <ProjectDetail project={projectThree} />; }
