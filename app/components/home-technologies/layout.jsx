import Image from "next/image";
import jsLogo from "../../../public/tech_logos/punk-logos/js_logo_punk.png";
import reactLogo from "../../../public/tech_logos/punk-logos/react_logo_punk.png";
import htmlLogo from "../../../public/tech_logos/punk-logos/html_logo_punk.png";
import cssLogo from "../../../public/tech_logos/punk-logos/css_logo_punk.png";
import rubyLogo from "../../../public/tech_logos/punk-logos/ruby_logo_punk.png";
import pythonLogo from "../../../public/tech_logos/punk-logos/python_logo_punk.png";
import postgresqlLogo from "../../../public/tech_logos/punk-logos/postgresql_logo_punk.png";
import gitLogo from "../../../public/tech_logos/punk-logos/git_logo_punk.png";
import wordpressLogo from "../../../public/tech_logos/wordpress_logo.png";
import shopifyLogo from "../../../public/tech_logos/shopify_logo.png";

export default function HomeTechnologiesLayout({ children }) {
  const textContent = {
    title: "We've got a firm grip on the newest tools and frameworks.",
  };

  const logos = [
    {
      alt: "javascript logo",
      src: jsLogo,
    },
    {
      alt: "React logo",
      src: reactLogo,
    },
    {
      alt: "HTML5 logo",
      src: htmlLogo,
    },
    {
      alt: "CSS logo",
      src: cssLogo,
    },
    {
      alt: "Ruby logo",
      src: rubyLogo,
    },
    {
      alt: "Python logo",
      src: pythonLogo,
    },
    {
      alt: "PostGreSQL logo",
      src: postgresqlLogo,
    },
    {
      alt: "Git logo",
      src: gitLogo,
    }
  ];

  return (
    <section id="technologies" className="py-28 bg-[var(--smokeGray)] animate-border border-t-2 border-b-2">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl text-center mb-16 font-michroma tracking-wider">
          {textContent?.title ? textContent.title : "Please add a title"}
        </h2>
        <div className="flex flex-wrap gap-8 justify-center gap-y-8 items-center">
          {logos.map((logo, i) => (
            <div key={i} className="">
              {logo.src === "" ? (
                <div>No Logo</div>
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain w-32"
                  loading="lazy"
                  width={"auto"}
                  height={"auto"}
                  title={logo.alt}
                />
              )}
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-center mt-16 mb-16 text-xl font-michroma">Including popular platforms like:</h3>
          <div className="flex flex-wrap gap-8 justify-center gap-y-8 items-center">
            <Image 
              src={wordpressLogo}
              alt="Wordpress Logo"
              loading="lazy"
              width={"auto"}
              height={"auto"}
              className="object-contain w-32"
              title="Wordpress"
            />
            <Image 
              src={shopifyLogo}
              alt="Shopify Logo"
              loading="lazy"
              width={"auto"}
              height={"auto"}
              className="object-contain w-32"
              title="Shopify"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
