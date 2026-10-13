import { projectOne } from "./project-one/page";
import { projectTwo } from "./project-two/page";
import { projectThree } from "./project-three/page";
import { projectFour } from "./project-four/page";
import type { Project } from "./types";

// The homepage uses these summaries; full write-ups live beside each page.
export const projects: Project[] = [projectOne, projectTwo, projectThree, projectFour];
