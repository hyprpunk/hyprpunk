import Image from "next/image";

export default function HomeServicesLayout({ children }) {
  const textContent = {
    title: "The Services You Need",
  };

  const cards = [
    {
      title: "Card 1",
      image: "",
      topText: "Website Development",
      description:
        "Custom Website Development\n\n Responsive Web Design\n\n CMS Development",
    },
    {
      title: "Card 2",
      image: "",
      topText: "Web Application Development",
      description:
        "Custom Web Applications\n\n API Integration\n\n Google Analytics Setup",
    },
    {
      title: "Card 3",
      image: "",
      topText: "Consulting and Strategy",
      description:
        "Web Strategy Consulting\n\n Conversion Rate Optimization (CRO)\n\n Search Engine Optimization (SEO)",
    },
    {
      title: "Card 4",
      image: "",
      topText: "Website Maintenance and Support",
      description:
        "Bug Fixes and Updates\n\n Website Backup\n\n Performance Optimization",
    },
  ];

  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sed nulla in finibus. Maecenas sed dolor tortor. Praesent a tempor tortor, ac commodo felis. Etiam dignissim lacus sed mauris ultricies vestibulum.";

  return (
    <section
      id="services"
      className="py-28 bg-[var(--darkBlue)] animate-border border-t-2 "
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl text-center mb-16 font-michroma tracking-wider px-2">
          {textContent?.title ? textContent.title : "Please add a title"}
        </h2>
        <div className="flex flex-wrap gap-y-12 md:gap-y-12 md:gap-[3%] xl:gap-[3%] px-4 justify-evenly">
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className="bg-smokeGray text-center w-full sm:w-full md:w-[47%] xl:w-[22%] relative rounded-xl shadow-neon-pink pb-6"
              >
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    width={200}
                    height={200}
                  />
                ) : (
                  <div className="h-32 bg-[var(--neonGreen)] relative p-4 flex justify-center items-center mx-3.5 bottom-4 rounded-xl bg-gradient-to-b from-[var(--darkerPink)] to-[var(--neonDarkBlue)]">
                    <h3 className="text-xl font-michroma">
                      {card?.topText ? card.topText : "Add text here"}
                    </h3>
                  </div>
                )}
                <p className="text-white whitespace-pre-line font-robotoMono text-lg p-3.5">
                  {card?.description ? card.description : loremIpsum}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
