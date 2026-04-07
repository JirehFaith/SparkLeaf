import { motion } from "framer-motion";
import { Home, Building2, Sparkles, Sofa } from "lucide-react";
  const steps = [
    {
      number: "1",
      title: "Request Quote",
      text: "Expect a response from a rep in 24 hours or less.",
    },
    {
      number: "2",
      title: "Review Cleaning Plan",
      text: "Understanding the types of cleaning we offer and which one is best for you. Write if you have more.",
    },
    {
      number: "3",
      title: "Confirm Booking",
      text: "Finalize your booking, we will see you soon!",
    },
  ];
  const services = [
  {
    icon: Home,
    title: "House Cleaning",
    price: "$89",
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    price: "$120",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    price: "$150",
  },
  {
    icon: Sofa,
    title: "Move In/Out Cleaning",
    price: "$189",
  },
  {
    icon: Sofa,
    title: "Carpet & Upholstery Cleaning",
    price: "$99",
  },
  {
    icon: Sofa,
    title: "Post-Construction Cleaning",
    price: "$200",
  },
];

const HomePage = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#054C7A] min-h-[75vh] flex items-center">
        <div className="container mx-auto px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Content */}
          <div className="  w-full lg:w-1/2 text-center lg:text-left text-blue-50">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Professional Cleaning Services Across Multi-City
            </h1>

            <p className="text-lg lg:text-2xl mt-4 opacity-80">
              Book trusted cleaners anytime, anywhere in Multi-City
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <button className="border border-blue-50 text-blue-50 px-6 py-3 rounded-md hover:opacity-90 transition">
                Book now
              </button>

              <button className="border border-primary bg-white text-primary px-6 py-3 rounded-md hover:bg-white/80  transition">
                View Services
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full h-[80vh] lg:w-1/2 flex justify-center">
            <img
              src="./images/cleaning.jpg"
              alt="cleaning service"
              className="lg:max-w-full lg:max-h-full object-cover"
            />
          </div>

        </div>
      </section>
    {/* About us */}
          <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="./images/transform.jpg"
            alt="Cleaning"
            className="rounded-xl w-full  h-[450px] object-cover"
          />

          {/* FLOATING CIRCLE BADGE */}
          <div className="absolute -bottom-18 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-10 bg-white w-36 h-36 rounded-full shadow-lg flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-accent">14+</span>
            <p className="text-xs text-gray-500 mt-1 leading-tight">
              Years Of <br /> Experience
            </p>
          </div>
        </div>

        <div className="space-y-5 mb-24">

      
          <p className="text-teal-500 text-sm font-medium">
            About Us
          </p>

<h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
  SparkLeaf Cleaning <br />
  Services You Can Trust
</h2>


<div className="border-l-4 border-accent pl-4 text-gray-500 italic text-sm">
  "At SparkLeaf, we believe every space deserves to feel fresh, healthy, and welcoming."
</div>


<p className="text-gray-500 text-sm leading-relaxed">
  SparkLeaf delivers reliable and professional cleaning services tailored for homes and businesses. 
  With attention to detail and a commitment to quality, we ensure every space is left spotless, 
  giving you peace of mind and more time to focus on what matters most.
</p>

        
          <div className="flex items-center flex-wrap gap-4 pt-2">
            <button className="bg-primary hover:bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow">
              View Our Services
            </button>

            <span className="text-gray-600 text-sm">
              or Call <span className="font-semibold text-gray-800">+250 794 381 611</span>
            </span>
          </div>

        </div>

      </div>
    </section>
{/* services */}

<section id="services" className="py-16">
  <div>
    <h1 className="text-center text-3xl font-semibold">Our Services</h1>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto px-6">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <div
            key={index}
            className="border border-primary rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            <Icon className="w-8 h-8 text-primary" />
            <p className="font-medium">{service.title}</p>
            <p className="text-sm text-gray-500">
              Price: from {service.price}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>
{/* how it works */}
<section id="how-it-works" className="bg-[#f5f7fb] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-blue-500 text-sm tracking-widest mb-2">
          BOOKING PROCESS
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          How does everything work?
        </h2>

        {/* Steps */}
        <div className="relative mt-8 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Dashed line */}
          <div className="hidden md:block absolute  top-8 left-0 w-full border-t-2 border-dashed border-gray-300 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 w-64 text-center"
            >
              {/* Number box */}
              <div className="w-16 h-16 mx-auto mb-6 py-4 flex items-center justify-center rounded-xl bg-white shadow-md text-accent text-xl font-bold">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="font-semibold mb-2">{step.title}</h3>

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default HomePage;