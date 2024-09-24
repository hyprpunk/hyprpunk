import "../../../public/backgrounds/space_colors_back.jpg";

export default function HomeHeroLayout({ children }) {
  const textContent = {
    title: "Revolutionize Your Online Presence\n with Hyprpunk",
  };

  return (
    <section class="h-[80vh]">
      <div class="flex flex-col items-center justify-center h-full bg-home-hero bg-cover bg-bottom bg-no-repeat">
        <h1 class="text-3xl font-bold text-center font-michroma tracking-wider mx-4 drop-shadow-lg">
          {textContent?.title ? textContent.title : 'Please add a title'}
        </h1>
      </div>
    </section>
  );
}
