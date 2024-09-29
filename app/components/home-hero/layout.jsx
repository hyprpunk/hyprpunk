import Image from "next/image";
import "../../../public/backgrounds/squared_cyber_back.png";
import logo from "../../../public/logos/hp_logo_white_no_punch.svg";


export default function HomeHeroLayout({ children }) {
  const textContent = {
    title: "Revolutionize Your Online Presence\n with ",
  };

  return (
    <section className="h-[60vh] md:h-[80vh]">
      <div className="flex flex-col items-center justify-center h-full bg-home-hero bg-cover bg-bottom bg-no-repeat px-4">
        <h1 className="text-2xl leading-relaxed font-bold text-center font-michroma tracking-wider drop-shadow-lg whitespace-pre-line sm:text-3xl md:text-4xl md:leading-relaxed">
          {textContent?.title ? textContent.title : 'Please add a title'}
        </h1>
        <Image src={logo} alt="Hyprpunk logo" width={500} height={131}/>
      </div>
    </section>
  );
}
