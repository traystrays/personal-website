export type ProjectSection = { heading: string; body: string };

export type Project = {
  slug: string;
  title: string;
  image: string | null;
  description: string;
  tags: string[];
  overview: string;
  sections: ProjectSection[];
  gallery: string[];
};
