import Image from "next/image";

export default function HomeServicesLayout({ children }) {
  const textContent = {
    title: "The Services You Need",
  };

  const cards = [
    {
      title: "Card 1",
      image: "",
      description: "",
    },
    {
      title: "Card 2",
      image: "",
      description: "",
    },
    {
      title: "Card 3",
      image: "",
      description: "",
    },
    {
      title: "Card 4",
      image: "",
      description: "",
    },
  ];

  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sed nulla in finibus. Maecenas sed dolor tortor. Praesent a tempor tortor, ac commodo felis. Etiam dignissim lacus sed mauris ultricies vestibulum.";

  return (
    <section class="py-28 bg-[var(--darkBlue)]">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl text-center mb-16 font-michroma tracking-wider">
          {textContent?.title ? textContent.title : "Please add a title"}
        </h2>
        <div class="flex flex-row gap-9 mx-4 flex-wrap sm:flex-nowrap lg:flex-nowrap">
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                class="bg-white p-6 rounded-lg flex flex-col gap-8 lg:w-[25%] flex-grow"
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
                  <div class="h-52 w-full bg-[var(--neonGreen)] relative bottom-3"></div>
                )}
                <p class="text-base text-black">
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
