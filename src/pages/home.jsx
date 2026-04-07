import { FaHome, FaBuilding, FaCouch, FaBroom } from "react-icons/fa";
import { motion } from "framer-motion";
import { Home, Building2, Sparkles, Sofa } from "lucide-react";
import { useState } from "react";


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
  

const houseServices = [
  {
    icon: FaHome,
    title: "House Cleaning",
    description: "Professional cleaning for your home spaces.",
  },
  {
    icon: FaBroom,
    title: "Deep Cleaning",
    description: "Detailed cleaning for every corner.",
  },
  {
    icon: FaCouch,
    title: "Move In/Out Cleaning",
    description: "Perfect cleaning when moving homes.",
  },
  {
    icon: FaCouch,
    title: "Carpet Cleaning",
    description: "Fresh and clean carpets.",
  },
];

const businessServices = [
  {
    icon: FaBuilding,
    title: "Office Cleaning",
    description: "Clean and productive office spaces.",
  },
  {
    icon: FaBuilding,
    title: "Commercial Cleaning",
    description: "Large-scale cleaning services.",
  },
  {
    icon: FaBroom,
    title: "Maintenance Cleaning",
    description: "Routine cleaning for businesses.",
  },
  {
    icon: FaBroom,
    title: "Post Construction",
    description: "Cleanup after construction.",
  },
];

const HomePage = () => {
  
  const [type, setType] = useState("house");

  const itemsPerPage = 4;


const [startIndex, setStartIndex] = useState(0);



// choose correct services (house/business)
const services = type === "house" ? houseServices : businessServices;

// slice visible ones
const visibleServices = services.slice(startIndex, startIndex + itemsPerPage);

// next
const handleNext = () => {
  if (startIndex + itemsPerPage < services.length) {
    setStartIndex(startIndex + 1);
  } else {
    setStartIndex(0); // loop
  }
};

// previous
const handlePrev = () => {
  if (startIndex > 0) {
    setStartIndex(startIndex - 1);
  } else {
    setStartIndex(services.length - itemsPerPage);
  }
};

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

 <section id="services" className=" bg-gray-100/10 py-20 px-6">
  <div className="max-w-7xl mx-auto">

    {/* TOP HEADER */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">

      {/* Left */}
      <div>
        <p className="text-xs tracking-widest text-gray-500 uppercase mb-3">
          Our Services
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#1f2d2b] leading-tight">
          Perfect cleanliness <br />
          without effort!
        </h2>
      </div>

      {/* Right Toggle */}
      <div className="mt-6 md:mt-0 flex bg-gray-200 rounded-md p-1 w-fit">
        <button
          onClick={() => setType("house")}
          className={`px-5 py-2 text-sm rounded-md ${
            type === "house"
              ? "bg-primary text-white"
              : "text-gray-600"
          }`}
        >
          House
        </button>

        <button
          onClick={() => setType("business")}
          className={`px-5 py-2 text-sm rounded-md ${
            type === "business"
              ? "bg-primary text-white"
              : "text-gray-600"
          }`}
        >
          Business
        </button>
      </div>
    </div>


 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
  {visibleServices.map((service, index)=> {
    const Icon = service.icon;

    return (
      <div
        key={index}
        className="group p-6 rounded-lg  shadow-sm hover:shadow-lg hover:-translate-y-2   transition-all duration-300"
      >

        <div className="mb-6">
          <div className="w-12 h-12 flex items-center justify-center bg-accent/50 rounded-full group-hover:bg-white transition">
            <Icon className="text-xl text-[#2f4f46]" />
          </div>
        </div>

        <h3 className="text-lg font-semibold text-[#1f2d2b] mb-3 group-hover:text-white transition">
          {service.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed mb-6 group-hover:text-gray-200 transition">
          {service.description}
        </p>

       
      </div>
    );
  })}
</div>

    {/* BOTTOM NAV */}
    <div className="flex items-center justify-center mt-16 gap-6">

  {/* PREV */}
  <button
    onClick={handlePrev}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition"
  >
    ←
  </button>

  {/* LINE */}
  <div className="w-16 h-[2px] bg-gray-400"></div>

  {/* NEXT */}
  <button
    onClick={handleNext}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 transition"
  >
    →
  </button>

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