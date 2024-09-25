import "../../../public/backgrounds/space_colors_back.jpg";

export default function HomeHeroLayout({ children }) {
  const textContent = {
    title: "Revolutionize Your Online Presence\n with Hyprpunk",
  };

  return (
    <section className="h-[80vh]">
      <div className="flex flex-col items-center justify-center h-full bg-home-hero bg-cover bg-bottom bg-no-repeat">
        <h1 className="text-3xl font-bold text-center font-michroma tracking-wider mx-4 drop-shadow-lg">
          {textContent?.title ? textContent.title : 'Please add a title'}
        </h1>
      </div>
    </section>
  );
}
