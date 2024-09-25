import Image from "next/image";
import jsLogo from "../../../public/tech_logos/js_logo.png";
import reactLogo from "../../../public/tech_logos/react_logo.png";
import htmlLogo from "../../../public/tech_logos/html_logo.png";
import cssLogo from "../../../public/tech_logos/css_logo.png";
import rubyLogo from "../../../public/tech_logos/ruby_logo.png";
import pythonLogo from "../../../public/tech_logos/python_logo.png";
import wordpressLogo from "../../../public/tech_logos/wordpress_logo.png";
import shopifyLogo from "../../../public/tech_logos/shopify_logo.png";
import postgresqlLogo from "../../../public/tech_logos/postgresql_logo.png";
import gitLogo from "../../../public/tech_logos/git_logo.png";

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
      alt: "Wordpress logo",
      src: wordpressLogo,
    },
    {
      alt: "Shopify logo",
      src: shopifyLogo,
    },
    {
      alt: "PostGreSQL logo",
      src: postgresqlLogo,
    },
    {
      alt: "Git logo",
      src: gitLogo,
    },
    {
      alt: "Git logo",
      src: '',
    },
    {
      alt: "Git logo",
      src: '',
    },
  ];

  return (
    <section className="py-28 bg-[var(--smokeGray)]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl text-center mb-16 font-michroma tracking-wider">
          {textContent?.title ? textContent.title : "Please add a title"}
        </h2>
        <div className="flex flex-wrap gap-8 justify-between gap-y-10">
          {logos.map((logo, i) => (
            <div key={i} className="">
              {logo.src === "" ? (
                <div>No Logo</div>
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
