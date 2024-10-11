export default function ContactSections() {
  return (
    <section id="contact" className="py-28 bg-[var(--black)] animate-border border-t-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Get in Touch with Us</h2>
          <p className="mt-4 text-sm md:text-base">
            We're here to help you bring your ideas to life! Whether you have a project in mind, need assistance with our services, or simply want to say hello, we're just a message away. Please fill out the form below, and we’ll respond promptly to discuss your needs and how we can assist you.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="w-full md:w-1/2 min-w-[300px]">
            <div className="flex justify-center">
              <iframe
                src="https://us11.list-manage.com/contact-form?u=f32c2eedf5acaf8a022afbe47&form_id=93489f86ab790742b1a70708373faddb"
                width="100%"
                height="850"
                frameBorder="0"
                scrolling="no"
                className="rounded-lg"
                title="Contact Us Form"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
