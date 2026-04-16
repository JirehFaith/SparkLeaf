import { FaArrowLeft, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const BookingPage = () => {
  const [step, setStep] = useState(1);

  const [bookingData, setBookingData] = useState({
    date: new Date(),
    time: "",
    address: "",
    city: "",
    phone: "",
  });

  const [selectedServices, setSelectedServices] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT */}
        <div className="hidden md:flex md:flex-col justify-between w-5/6 bg-gradient-to-b from-white to-gray-50 p-8 border-r border-gray-200">

  {/* Logo + Brand */}
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <img src="./images/logo1.png" alt="logo" className="w-20 h-20 object-contain" />
      <h1 className="text-xl font-semibold tracking-wide text-gray-800">
        SparkLeaf
      </h1>
    </div>

    <p className="text-sm text-gray-500 mb-10">
      Your strategic partner in growth
    </p>
  </div>

  {/* Main Message */}
  <div className="space-y-4">
    <h2 className="text-3xl font-bold leading-tight text-gray-900">
      Book Your <span className="text-primary">Services</span> Today
    </h2>

    <p className="text-gray-600 text-sm leading-relaxed">
        Need brand growth? Get expert advice, tailored strategies,
        and market smarter with confidence.
    </p>
  </div>

  {/* Info */}
  <div className="space-y-3 text-sm text-gray-600">
   <div className="flex flex-col gap-3 text-sm text-gray-600">

  <div className="flex items-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700">
      <FaClock size={14} />
    </div>
    <span>Mon - Fri 9:00 - 17:00</span>
  </div>

  <div className="flex items-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700">
      <FaMapMarkerAlt size={14} />
    </div>
    <span>Kigali, Rwanda</span>
  </div>

</div>

  </div>

  {/* Social Icons */}
  <div className="flex gap-3 mt-10">
    {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, i) => (
      <div
        key={i}
        className="w-10 h-10 flex items-center justify-center rounded-full 
        bg-white shadow-sm border border-gray-200 
        hover:bg-primary hover:text-white hover:scale-105 
        transition-all duration-200 cursor-pointer"
      >
        <Icon size={14} />
      </div>
    ))}
  </div>

</div>

        {/* RIGHT */}
        <div className="p-6 md:p-8">
          {step === 1 && (
            <StepDate
              setStep={setStep}
              bookingData={bookingData}
              setBookingData={setBookingData}
            />
          )}
          {step === 2 && (
            <StepAddress
              setStep={setStep}
              bookingData={bookingData}
              setBookingData={setBookingData}
            />
          )}
          {step === 3 && (
            <StepServices
              setStep={setStep}
              selectedServices={selectedServices}
              setSelectedServices={setSelectedServices}
            />
          )}
          {step === 4 && (
            <StepPayment
              selectedServices={selectedServices}
              setStep={setStep}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;


// STEP 1 date and time selection

const StepDate = ({ setStep, bookingData, setBookingData }) => {
  const [error, setError] = useState("");

  const times = ["09:00","10:00","11:00","12:00","13:00","14:00"];

  const handleContinue = () => {
    if (!bookingData.date || !bookingData.time) {
      setError("Select date and time");
      return;
    }
    setError("");
    setStep(2);
  };

  return (
    <div>
      <button className="flex items-center gap-2 text-gray-400 mb-4 cursor-not-allowed">
        <FaArrowLeft /> Back
      </button>

      <h3 className="text-xl font-semibold mb-6">Select Date & Time</h3>

      <DatePicker
        selected={bookingData.date}
        onChange={(date) =>
          setBookingData({ ...bookingData, date })
        }
        minDate={new Date()}
        inline
      />

      <div className="grid grid-cols-3 gap-3 mt-6">
        {times.map((time) => (
          <button
            key={time}
            onClick={() =>
              setBookingData({ ...bookingData, time })
            }
            className={`py-2 rounded-lg border ${
              bookingData.time === time
                ? "bg-primary text-white"
                : "bg-gray-100 hover:bg-primary hover:text-white"
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      <button
        onClick={handleContinue}
        className="mt-6 w-full py-3 bg-primary text-white rounded-lg"
      >
        Continue
      </button>
    </div>
  );
};

// STEP 2 address input

const StepAddress = ({ setStep, bookingData, setBookingData }) => {
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!bookingData.address || !bookingData.phone) {
      setError("Fill all required fields");
      return;
    }
    setError("");
    setStep(3);
  };

  return (
    <div>
      <button onClick={() => setStep(1)} className="flex gap-2 mb-4">
        <FaArrowLeft /> Back
      </button>

      <h3 className="text-xl font-semibold mb-6">Enter Address</h3>

      <div className="space-y-4">
        <input
          placeholder="Street Address"
          className="w-full border p-3 rounded-lg"
          value={bookingData.address}
          onChange={(e) =>
            setBookingData({ ...bookingData, address: e.target.value })
          }
        />

        <input
          placeholder="City"
          className="w-full border p-3 rounded-lg"
          value={bookingData.city}
          onChange={(e) =>
            setBookingData({ ...bookingData, city: e.target.value })
          }
        />

        <input
          placeholder="Phone"
          className="w-full border p-3 rounded-lg"
          value={bookingData.phone}
          onChange={(e) =>
            setBookingData({ ...bookingData, phone: e.target.value })
          }
        />
      </div>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      <button
        onClick={handleContinue}
        className="bg-primary text-white w-full mt-6 py-3 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
};


// STEP 3 services

const StepServices = ({ setStep, selectedServices, setSelectedServices }) => {
  const services = [
    { name: "Home Cleaning", price: 30 },
    { name: "Deep Cleaning", price: 50 },
  ];

  const toggle = (service) => {
    const exists = selectedServices.find(s => s.name === service.name);

    if (exists) {
      setSelectedServices(prev => prev.filter(s => s.name !== service.name));
    } else {
      setSelectedServices(prev => [...prev, service]);
    }
  };

  return (
    <div>
      <button onClick={() => setStep(2)} className="flex gap-2 mb-4">
        <FaArrowLeft /> Back
      </button>

      <h3 className="text-xl font-semibold mb-6">Select Services</h3>

      <div className="space-y-4">
        {services.map((service) => {
          const selected = selectedServices.find(s => s.name === service.name);

          return (
            <div
              key={service.name}
              onClick={() => toggle(service)}
              className={`p-4 rounded-lg cursor-pointer ${
                selected ? "bg-primary text-white" : "bg-gray-100"
              }`}
            >
              {service.name} - ${service.price}
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setStep(4)}
        disabled={!selectedServices.length}
        className="bg-primary text-white w-full mt-6 py-3 rounded-lg disabled:bg-gray-300"
      >
        Continue
      </button>
    </div>
  );
};

// STEP 4 payment

const StepPayment = ({ selectedServices, setStep }) => {
  const total = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const advance = total * 0.2;

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Payment</h3>

      <p>Total: ${total}</p>
      <p className="text-primary">Pay Now: ${advance}</p>

      <button className="bg-primary text-white w-full mt-6 py-3 rounded-lg">
        Pay ${advance}
      </button>

      <button
        onClick={() => setStep(3)}
        className="mt-4 text-gray-500 underline"
      >
        Go Back
      </button>
    </div>
  );
};