import Image from "next/image";

export default function ProjectSections() {
  const projects = [
    {
      title: "Future Bikes",
      image: "/clients/future-bikes.png", 
      description: "For Future Bikes, I transformed their website into a visually stunning platform that showcases their innovative range of bicycles. By implementing a modern design that emphasizes vibrant imagery and easy navigation, users can now seamlessly explore product features, specifications, and pricing. I enhanced the user experience by optimizing the site for mobile devices, ensuring that potential customers can browse and make purchases on-the-go. Additionally, I integrated a blog section to share cycling tips, maintenance advice, and the latest industry trends, fostering a community of cycling enthusiasts around the brand.",
      dimensions: { width: 1838, height: 1846 }, 
    },
    {
      title: "Finding Peace Life Coaching",
      image: "/clients/finding-peace.png", 
      description: "The website for Finding Peace Life Coaching underwent a complete overhaul to create a calming and inviting online space for clients seeking guidance. I focused on a soothing color palette and intuitive layout that reflects the essence of life coaching. Key features include a comprehensive services page detailing various coaching options, along with testimonials that build trust and credibility. By adding a blog, I enabled the client to share valuable insights and strategies for personal growth, while also optimizing the site for search engines to attract a wider audience seeking support on their journey to finding peace.",
      dimensions: { width: 1842, height: 1742 }, 
    },
    {
      title: "A New View Counseling and Psychological Services",
      image: "/clients/new-view.png", 
      description: "A New View Counseling and Psychological Services needed a user-friendly website that conveys professionalism and empathy. I redesigned their online presence to include clear information about therapy services, therapist bios, and educational resources for mental health awareness. The website now features an easy-to-navigate appointment booking system, making it convenient for clients to schedule sessions. Additionally, I incorporated informative content such as articles and resources on mental health topics, helping to position the practice as a trusted authority in the field while providing valuable information to visitors.",
      dimensions: { width: 1399, height: 1611 }, 
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
            {project.image && ( 
              <div className="w-full md:w-1/2"> 
                <Image
                  src={project.image}
                  width={project.dimensions?.width}
                  height={project.dimensions?.height} 
                  alt={project.title}
                  className="w-full h-auto rounded-md"
                  quality={90}
                />
              </div>
            )}
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
