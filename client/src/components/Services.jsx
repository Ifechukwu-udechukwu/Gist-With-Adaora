const Services = () => {

  const whatsappNumber = "+2348060311892"; 

  const servicesList = [
    {
      title: "Lifestyle Advice & Guidance",
      description:
        "Get personalized lifestyle tips, wellness routines, and self-improvement strategies to help you live smarter, healthier, and happier."
    },
    {
      title: "Celebrity News & Analysis",
      description:
        "Stay informed with the latest celebrity news, trends, and inspiring stories, all analyzed with honesty and insight."
    },
    {
      title: "Therapist Services",
      description:
        "Professional guidance and support for mental health, stress management, and emotional well-being."
    },
    {
      title: "Non-Governmental Services (NGO Support)",
      description:
        "Learn about initiatives, volunteering opportunities, and projects by NGOs that make a positive impact in society."
    },
    {
      title: "Interview Services",
      description:
        "We conduct in-person interviews with celebrities, experts, and ordinary people to share their stories with the world."
    },
    {
      title: "Online Interview Services",
      description:
        "Connect remotely for interviews, podcasts, or Q&A sessions, making it easier to share stories globally."
    },
    {
      title: "Chef Services",
      description:
        "Explore culinary experiences, cooking tips, and personalized recipes that inspire and delight."
    },
    {
      title: "Share Your Story",
      description:
        "A safe space for readers and followers to share their personal stories, experiences, or challenges with our community."
    },
    {
      title: "Other Services",
      description:
        "We offer additional services and projects tailored to inform, educate, and empower our audience."
    },
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12">
      <h1 className="text-4xl font-extrabold text-center mb-8">Our Services</h1>

      <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
        At <span className="font-semibold">Gist with Adaora</span>, we offer a wide range of services aimed at educating, empowering, and entertaining our audience. Whether it’s lifestyle guidance, celebrity insights, or helping you share your personal story, we have something for everyone.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {servicesList.map((service, index) => (
          <div key={index} className="p-6 border rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
            <p className="text-lg leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition duration-300"
        >
          Contact Me on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Services;
