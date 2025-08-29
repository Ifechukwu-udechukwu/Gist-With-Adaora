import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  // Email link
  const email = "peterifechukwuudechukwu@gmail.com";

  const menus = {
    title: "Quick Links",
    items: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about", internal: true },
      { name: "Contact Us", href: `mailto:${email}` },
      { name: "Services", href: "/services", internal: true },
    ],
  };

  const helps = {
    title: "Need Help?",
    items: [
      { name: "Need a Therapist", href: `mailto:${email}` },
      { name: "Send some Info", href: `mailto:${email}` },
    ],
  };

  const medias = {
    title: "Follow Us",
    items: [
      { name: "Facebook", href: "https://facebook.com/ife.chukwu.571761", external: true },
      { name: "Instagram", href: "https://instagram.com/gist-with-adaora", external: true },
      { name: "Twitter", href: "https://twitter.com/gist-with-adaora", external: true },
      { name: "Whatsapp", href: "https://wa.me/+2348060311892", external: true },
    ],
  };

  const sections = [menus, helps, medias];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
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
                  <li key={idx}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline cursor-pointer"
                      >
                        {item.name}
                      </a>
                    ) : item.internal ? (
                      <Link
                        to={item.href}
                        className="hover:underline cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="hover:underline cursor-pointer"
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-black-500">
        © {year} Gist with Adaora. All rights reserved. (708b2ce5)  (Tr#h673@8o74)
      </p>
    </div>
  );
};

export default Footer;
