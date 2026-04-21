import { FaHome, FaBuilding, FaCouch, FaBroom } from "react-icons/fa";
import { motion } from "framer-motion";
import { Home, Building2, Sparkles, Sofa } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Truck, Package, Clock, MapPin } from "lucide-react";


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
const plans = [
  {
    name: "Basic Cleaning",
    price: "30,000",
    description: "Perfect for small homes & quick cleanups",
    features: [
      "General Room Cleaning",
      "Dusting & Vacuuming",
      "Kitchen Surface Cleaning",
      "Email Support",
    ],
    highlight: false,
  },
  {
    name: "Standard Cleaning",
    price: "40,000",
    description: "Ideal for regular home & office cleaning",
    features: [
      "All Basic services",
      "Deep Kitchen Cleaning",
      "Bathroom Sanitization",
      "Priority Scheduling",
    ],
    highlight: true,
  },
  {
    name: "Premium Cleaning",
    price: "50,000",
    description: "Complete deep cleaning for homes & businesses",
    features: [
      "All Standard services",
      "Deep Carpet Cleaning",
      "Window & Glass Cleaning",
      "24/7 Priority Support",
    ],
    highlight: false,
  },
];
const logisticsServices = [
  {
    title: "Parcel Delivery",
    description: "Fast and secure delivery for packages of all sizes.",
    icon: Package,
  },
  {
    title: "Same-day Delivery",
    description: "Urgent deliveries handled within hours.",
    icon: Clock,
  },
  {
    title: "Bulk Transport",
    description: "Efficient logistics for large and heavy goods.",
    icon: Truck,
  },
  {
    title: "Real-time Tracking",
    description: "Track your shipments live with our system.",
    icon: MapPin,
  },
];



const HomePage = () => {
  const navigate = useNavigate
  const [active, setActive] = useState("Monthly");
  
    const tabs = ["One-time", "Weekly", "Bi-Weekly", "Monthly"];
  
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
 

<section
  id="home"
  className="bg-[#054C7A] min-h-[90vh] flex items-center"
>
  <div className="container mx-auto px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
    
    {/* Content */}
    <motion.div
      className="w-full lg:w-1/2 text-center lg:text-left text-blue-50"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-3xl lg:text-5xl font-bold leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Professional Cleaning Services Across Multi-City
      </motion.h1>

      <motion.p
        className="text-lg lg:text-2xl mt-4 opacity-80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Book trusted cleaners anytime, anywhere in Multi-City
      </motion.p>

      {/* CTA */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
  <motion.div
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }}
>
  <Link
    to="/login"
    className="inline-block border border-blue-50 text-blue-50 px-6 py-3 rounded-md hover:opacity-90 transition"
  >
    Book now
  </Link>
</motion.div>

        <motion.button
          className="border border-primary bg-white text-primary px-6 py-3 rounded-md hover:bg-white/80 transition"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link to="#services">View services</Link>
        </motion.button>
      </motion.div>
    </motion.div>

    {/* Image */}
    <motion.div
      className="w-full h-[90vh] lg:w-1/2 flex justify-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="./images/cleaning.jpg"
        alt="cleaning service"
        className="lg:max-w-full lg:max-h-full object-cover"
      />
    </motion.div>
  </div>
</section>
    {/* About us */}
         

<section id="about" className="bg-white py-16 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGE */}
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img
        src="./images/transform.jpg"
        alt="Cleaning"
        className="rounded-xl w-full h-[450px] object-cover"
      />

      {/* FLOATING CIRCLE BADGE */}
      <motion.div
        className="absolute -bottom-18 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-10 bg-white w-36 h-36 rounded-full shadow-lg flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-3xl font-bold text-accent">14+</span>
        <p className="text-xs text-gray-500 mt-1 leading-tight">
          Years Of <br /> Experience
        </p>
      </motion.div>
    </motion.div>

    {/* RIGHT CONTENT */}
    <motion.div
      className="space-y-5 mb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.p
        className="text-teal-500 text-sm font-medium"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        About Us
      </motion.p>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        SparkLeaf Cleaning <br />
        Services You Can Trust
      </motion.h2>

      <motion.div
        className="border-l-4 border-accent pl-4 text-gray-500 italic text-sm"
        variants={{
          hidden: { opacity: 0, x: 20 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        "At SparkLeaf, we believe every space deserves to feel fresh, healthy, and welcoming."
      </motion.div>

      <motion.p
        className="text-gray-500 text-sm leading-relaxed"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        SparkLeaf delivers reliable and professional cleaning services tailored for homes and businesses. 
        With attention to detail and a commitment to quality, we ensure every space is left spotless, 
        giving you peace of mind and more time to focus on what matters most.
      </motion.p>

      <motion.div
        className="flex items-center flex-wrap gap-4 pt-2"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <button className="bg-primary hover:bg-teal-600 text-white px-6 py-2.5 rounded text-sm font-medium shadow">
          View Our Services
        </button>

        <span className="text-gray-600 text-sm">
          or Call <span className="font-semibold text-gray-800">+250 794 381 611</span>
        </span>
      </motion.div>
    </motion.div>

  </div>
</section>
{/* services */}
<section id="services" className="bg-gray-100/10 py-20 px-6">
  <div className="max-w-7xl mx-auto">

    {/* TOP HEADER */}
    <motion.div
      className="flex flex-col md:flex-row md:items-center md:justify-between mb-14"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
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
      <motion.div
        className="mt-6 md:mt-0 flex bg-gray-200 rounded-md p-1 w-fit"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
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
      </motion.div>
    </motion.div>

    {/* SERVICES GRID */}
    <motion.div
      className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {visibleServices.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={index}
            className="group p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 40, rotate: -3 },
              visible: { opacity: 1, y: 0, rotate: 0 },
            }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div className="mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-white transition">
                <Icon className="text-xl text-accent" />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-[#1f2d2b] mb-3 group-hover:text-white transition">
              {service.title}
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed mb-6 group-hover:text-gray-200 transition">
              {service.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>

    {/* BOTTOM NAV */}
    <motion.div
      className="flex items-center justify-center mt-16 gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
    >
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
        className="w-10 h-10 flex items-center justify-center rounded-full bg-accent hover:bg-yellow-500 transition"
      >
        →
      </button>
    </motion.div>

  </div>
</section>
{/* logistics services */}
  <section className="bg-primary py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-14"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
              Logistics Services
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Fast. Reliable. Delivered.
            </h2>
          </div>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {logisticsServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                className="group p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-accent transition">
                    <Icon className="text-xl text-accent group-hover:text-black" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
{/* pricing section */}
<section id="pricing">
  <div className="min-h-screen bg-[#f7f7f7] flex flex-col items-center px-4 sm:px-6 py-12 sm:py-16">

    {/* Header */}
    <motion.div
      className="text-center mb-10 sm:mb-14 max-w-2xl"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="inline-block px-4 sm:px-5 py-2 rounded-full bg-accent text-primary text-xs sm:text-sm font-medium mb-5 sm:mb-6">
        PROFESSIONAL CLEANING PLANS
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
        Cleaning <span className="text-primary">Packages</span>
      </h1>

      <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
        Choose the perfect cleaning service for your home or business
      </p>

      {/* Tabs */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-200 p-1.5 sm:p-2 rounded-full flex gap-1 sm:gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActive(tab)}
              className={`whitespace-nowrap px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition ${
                active === tab
                  ? "bg-white text-accent shadow"
                  : "text-gray-600"
              }`}
            >
              
              {tab}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>

    {/* Cards */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          className={`relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border transition-transform duration-300 ${
            plan.highlight
              ? "border-primary lg:scale-105"
              : "border-gray-200"
          }`}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -8 }}
        >
          {plan.highlight && (
            <motion.span
              className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary text-white text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              MOST POPULAR
            </motion.span>
          )}

          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
            {plan.name}
          </h3>

          <div className="flex items-baseline mb-2">
            <span className="text-sm sm:text-lg mr-1">Rwf</span>
            <span className="text-3xl sm:text-4xl font-bold">
              {plan.price}
            </span>
          </div>

          <p className="text-gray-500 text-sm sm:text-base mb-5 sm:mb-6">
            {plan.description}
          </p>

          {/* Features */}
          <motion.ul
            className="space-y-2 sm:space-y-3 mb-6 sm:mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {plan.features.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-2 text-sm sm:text-base text-gray-700"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <span className="text-primary">✔</span>
                {feature}
              </motion.li>
            ))}
          </motion.ul>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className={`w-full py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition ${
              plan.highlight
                ? "bg-primary text-white hover:bg-secondary"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Book Now
          </motion.button>
        </motion.div>
      ))}
    </motion.div>

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

    {/* contacts */}


<section id="contact" className="py-20 px-6 overflow-hidden">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      <motion.h2
        className="text-5xl font-semibold text-black leading-tight mb-6"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Get in — <br />
        touch with us
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-8 max-w-md leading-relaxed"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        We’re here to help! Whether you have a question about our services,
        need assistance with your account, or want to provide feedback, our
        team is ready to assist you.
      </motion.p>

      {/* Email */}
      <motion.div
        className="mb-4"
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="text-gray-500 text-sm">Email:</p>
        <p className="text-lg font-medium text-black">
          sparkleaf@gmail.com
        </p>
      </motion.div>

      {/* Phone */}
      <motion.div
        className="mb-6"
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="text-gray-500 text-sm">Phone:</p>
        <p className="text-lg font-medium text-black">
          +250 794 381 611
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Available Monday to Friday, 9 AM - 6 PM GMT
        </p>
      </motion.div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-primary text-white px-6 py-3 rounded shadow hover:opacity-90 transition"
      >
        Live Chat
        <motion.span
          className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full"
          whileHover={{ x: 5 }}
        >
          →
        </motion.span>
      </motion.button>
    </motion.div>

    {/* RIGHT SIDE (FORM) */}
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-sm"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <form className="space-y-6">

        {/* Name Row */}
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="text-sm text-gray-600">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name..."
              className="w-full mt-2 px-4 py-3 rounded border border-gray-200 outline-none focus:ring-2 focus:ring-black transition"
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label className="text-sm text-gray-600">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name..."
              className="w-full mt-2 px-4 py-3 rounded border border-gray-200 outline-none focus:ring-2 focus:ring-black transition"
            />
          </motion.div>
        </div>

        {/* Email */}
        <motion.div whileFocus={{ scale: 1.02 }}>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email address..."
            className="w-full mt-2 px-4 py-3 rounded border border-gray-200 outline-none focus:ring-2 focus:ring-black transition"
          />
        </motion.div>

        {/* Message */}
        <motion.div whileFocus={{ scale: 1.02 }}>
          <label className="text-sm text-gray-600">
            How can we help you?
          </label>
          <textarea
            rows="5"
            placeholder="Enter your message..."
            className="w-full mt-2 px-4 py-3 rounded border border-gray-200 outline-none focus:ring-2 focus:ring-black resize-none transition"
          ></textarea>
        </motion.div>

        {/* Submit */}
        <div className="flex justify-end">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-primary text-white px-6 py-3 rounded shadow hover:opacity-90 transition"
          >
            Send Message
            <motion.span
              className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full"
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </motion.button>
        </div>

      </form>
    </motion.div>

  </div>
</section>
    </>
  );
};

export default HomePage;