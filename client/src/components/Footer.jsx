const Footer = () => {
  const year = new Date().getFullYear();

  const menus = {
    title: "Quick Links",
    items: ["Home", "About Us", "Contact Us", "Services", "FAQs"],
  };

  const helps = {
    title: "Need Help?",
    items: ["Need a Therapist", "Send some Info"],
  };

  const medias = {
    title: "Follow Us",
    items: ["Facebook", "Instagram", "Twitter", "Whatsapp"],
  };

  const sections = [menus , helps, medias];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 ">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-black-400 text-black-500">
        <div>
          <img src="/logo.png" alt="logo" className="w-32 sm:w-44" />
          <p className="max-w-[410px] mt-6">
            Gist with Adaora is where lifestyle, celebrity stories, and real talk about identity and self-love come together. Bold, honest, and beautifully human.
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-black-700 mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.items.map((item, idx) => (
                  <li key={idx} className="hover:underline cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-black-500">
        © {year} Gist with Adaora. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
