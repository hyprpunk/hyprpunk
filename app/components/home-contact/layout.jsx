export default function ContactSections() {
    return (
      <section id="contact" className="py-28 bg-[var(--black)] animate-border border-t-2">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Let's Talk About Your Project</h2>
          <p className="mt-4 text-sm md:text-base text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sed nulla in finibus. 
            Maecenas sed dolor tortor. Praesent a tempor tortor, ac commodo felis.
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="flex justify-center">
                <iframe
                  src="https://us11.list-manage.com/contact-form?u=f32c2eedf5acaf8a022afbe47&form_id=93489f86ab790742b1a70708373faddb"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  scrolling="no"
                  className="rounded-lg border-2 border-gray-300"
                  title="Contact Us Form"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  