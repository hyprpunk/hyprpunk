import Image from "next/image";

export default function ProjectSections() {
  const projects = [
    {
      title: "Project 1",
      image: "", 
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sed nulla in finibus. Maecenas sed dolor tortor. Praesent a tempor tortor, ac commodo felis.",
    },
    {
      title: "Project 2",
      image: "", 
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sed nulla in finibus. Maecenas sed dolor tortor. Praesent a tempor tortor, ac commodo felis.",
    },
    {
      title: "Project 3",
      image: "", 
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sed nulla in finibus. Maecenas sed dolor tortor. Praesent a tempor tortor, ac commodo felis.",
    },
  ];

  return (
    <section id="projects" className="py-28 bg-[var(--darkBlue)] animate-border border-t-2">
      <div className="max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "gap-8 items-center" : "md:flex-row-reverse gap-8 items-center"
            } mb-16`}
          >
            <Image
              src={project.image}
              width={300}
              height={200}
              alt={project.title}
              className="w-full md:w-1/2 rounded-md"
            />
            <div className="w-full md:w-1/2 text-center md:text-left px-4">
              <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>
              <p className="text-sm md:text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
