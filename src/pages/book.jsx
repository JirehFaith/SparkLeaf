import { FaArrowLeft, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";


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
       We provide professional cleaning solutions tailored to your lifestyle and business needs, ensuring every space we touch reflects cleanliness, order, and comfort.
        Our services range from routine home cleaning to intensive deep cleaning and commercial maintenance, all delivered with attention to detail and consistency.
        With a focus on reliability and quality, we help you maintain a spotless environment so you can focus on what truly matters.
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
         {step === 5 && (
  <StepConfirmation
    bookingData={bookingData}
    selectedServices={selectedServices}
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

  const allServices = [
    { title: "House Cleaning", price: 30 },
    { title: "Deep Cleaning", price: 50 },
    { title: "Move In/Out Cleaning", price: 60 },
    { title: "Carpet Cleaning", price: 25 },

    { title: "Office Cleaning", price: 40 },
    { title: "Commercial Cleaning", price: 70 },
    { title: "Maintenance Cleaning", price: 35 },
  ];

  const toggle = (service) => {
    const exists = selectedServices.find(s => s.title === service.title);

    if (exists) {
      setSelectedServices(prev =>
        prev.filter(s => s.title !== service.title)
      );
    } else {
      setSelectedServices(prev => [...prev, service]);
    }
  };

  return (
    <div className="pt-12">

      {/* Back Button */}
      <button 
        onClick={() => setStep(2)} 
        className="flex items-center gap-2 mb-6 text-primary font-medium hover:opacity-80"
      >
        <FaArrowLeft />
        Back
      </button>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">
        Select Services
      </h3>

      <p className="text-sm text-gray-500 mb-6">
        Choose one or more services for your booking
      </p>

      {/* Services List */}
      <div className="space-y-3">

        {allServices.map((service) => {
          const selected = selectedServices.find(
            s => s.title === service.title
          );

          return (
            <div
              key={service.title}
              onClick={() => toggle(service)}
              className={`p-4 rounded-lg cursor-pointer flex justify-between items-center transition ${
                selected
                  ? "bg-primary text-white border border-primary"
                  : "bg-gray-100 hover:bg-gray-200 border border-transparent"
              }`}
            >
              {/* Service Name */}
              <span className="font-medium">
                {service.title}
              </span>

              {/* Price */}
              <span className="font-semibold">
                ${service.price}
              </span>
            </div>
          );
        })}

      </div>

      {/* Continue Button */}
      <button
        onClick={() => setStep(4)}
        disabled={!selectedServices.length}
        className="bg-primary text-white w-full mt-6 py-3 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Continue ({selectedServices.length})
      </button>

    </div>
  );
};



// STEP 4 payment



const StepPayment = ({ selectedServices, setStep }) => {
  const [method, setMethod] = useState("visa");
  const [phone, setPhone] = useState("");

  const isValidRwandaNumber = (num) => {
    return /^(07|2507)\d{8}$/.test(num);
  };

  const subtotal = useMemo(() => {
    return selectedServices.reduce((acc, item) => acc + item.price, 0);
  }, [selectedServices]);

  const upfront = subtotal * 0.2;
  const remaining = subtotal - upfront;

  return (
    <div>
      {/* Back */}
      <button onClick={() => setStep(3)} className="flex gap-2 mb-4">
        ← Back
      </button>

      <h3 className="text-xl font-semibold mb-6">Payment Method</h3>

      {/* Payment Methods */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">

        <label className={`border p-3 rounded-lg flex items-center justify-center cursor-pointer ${method==="mastercard"?"border-primary":"border-gray-200"}`}>
          <input type="radio" className="mr-2" checked={method==="mastercard"} onChange={()=>setMethod("mastercard")} required />
          <img src="/images/payments/mastercardLogo.svg" className="h-6 object-contain" />
        </label>

        <label className={`border p-3 rounded-lg flex items-center justify-center cursor-pointer ${method==="visa"?"border-primary":"border-gray-200"}`}>
          <input type="radio" className="mr-2" checked={method==="visa"} onChange={()=>setMethod("visa")} />
          <img src="/images/payments/visa.png" className="h-6 object-contain" />
        </label>

        <label className={`border p-3 rounded-lg flex items-center justify-center cursor-pointer ${method==="paypal"?"border-primary":"border-gray-200"}`}>
          <input type="radio" className="mr-2" checked={method==="paypal"} onChange={()=>setMethod("paypal")} required />
          <img src="/images/payments/paypal.png" className="h-6 object-contain"  />
        </label>

        <label className={`border p-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer ${method==="momo"?"border-primary":"border-gray-200"}`}>
          <input type="radio" checked={method==="momo"} onChange={()=>setMethod("momo")} required />
          <img src="/images/payments/mtn_momo.png" className="h-6 object-contain" />
          <span className="text-sm">MoMo</span>
        </label>

        <label className={`border p-3 rounded-lg flex items-center justify-center cursor-pointer ${method==="cash"?"border-primary":"border-gray-200"}`}>
          <input type="radio" className="mr-2" checked={method==="cash"} onChange={()=>setMethod("cash")} />
          <span className="text-sm">Cash</span>
        </label>
      </div>

      {/* Card Fields */}
      {(method === "visa" || method === "mastercard") && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input placeholder="Card Number" className="border p-2 rounded-md w-full" />
            <input placeholder="Cardholder" className="border p-2 rounded-md w-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
            <input placeholder="MM/YY" className="border p-2 rounded-md w-full" />
            <input placeholder="CVC" className="border p-2 rounded-md w-full" />
          </div>
        </>
      )}

      {/* MoMo */}
      {method === "momo" && (
        <div className="mb-6">
          <label className="text-sm text-gray-600">MTN MoMo Number</label>

          <div className="flex items-center border rounded-md mt-1 overflow-hidden">
            <span className="px-3 bg-gray-100 text-gray-600 text-sm">+250</span>
            <input
              type="tel"
              placeholder="78XXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 outline-none"
            />
          </div>

          {phone && !isValidRwandaNumber(phone) && (
            <p className="text-red-500 text-xs mt-1">
              Enter valid MTN number
            </p>
          )}
        </div>
      )}

      {/* Summary */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p className="font-semibold mb-3">Summary</p>

        {selectedServices.map((item, i) => (
          <div key={i} className="flex justify-between text-sm mb-1">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))}

        <div className="border-t mt-3 pt-3 text-sm">
          <div className="flex justify-between">
            <span>Total</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between text-primary font-semibold mt-2">
            <span>Pay Now (20%)</span>
            <span>${upfront}</span>
          </div>

          <div className="flex justify-between text-gray-500 mt-1">
            <span>Remaining</span>
            <span>${remaining}</span>
          </div>
        </div>
      </div>

      {/* Pay Button */}
    <button 
  onClick={() => setStep(5)}
  disabled={method==="momo" && !isValidRwandaNumber(phone)}
  className={`w-full py-3 rounded-lg text-white ${
    method==="momo" && !isValidRwandaNumber(phone)
      ? "bg-gray-400"
      : "bg-primary"
  }`}
>
  Pay ${upfront}
</button>
    </div>
  );
};

// confirmation of payment

const StepConfirmation = ({ bookingData, selectedServices }) => {
  const total = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const upfront = total * 0.2;
  const remaining = total - upfront;

  return (
    <div className="text-center">

      {/* Success Icon */}
      <div className="flex justify-center mb-4">
        <FaCheckCircle className="text-green-500 text-5xl" />
      </div>

      <h3 className="text-2xl font-bold mb-2">
        Booking Confirmed 
      </h3>

      <p className="text-gray-600 mb-6">
        Your service has been successfully scheduled.
      </p>

      {/* DETAILS */}
      <div className="bg-gray-50 rounded-lg p-4 text-left space-y-3 mb-6">

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Date</span>
          <span>{bookingData.date.toDateString()}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Time</span>
          <span>{bookingData.time}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Address</span>
          <span>{bookingData.address}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Phone</span>
          <span>{bookingData.phone}</span>
        </div>

      </div>

      {/* SERVICES */}
      <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
        <p className="font-semibold mb-3">Services</p>

        {selectedServices.map((service, i) => (
          <div key={i} className="flex justify-between text-sm mb-1">
            <span>{service.name}</span>
            <span>${service.price}</span>
          </div>
        ))}

        <div className="border-t mt-3 pt-3 text-sm">
          <div className="flex justify-between">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <div className="flex justify-between text-primary font-semibold mt-2">
            <span>Paid (20%)</span>
            <span>${upfront}</span>
          </div>

          <div className="flex justify-between text-gray-500 mt-1">
            <span>Remaining</span>
            <span>${remaining}</span>
          </div>
        </div>
      </div>

      {/* ACTION BUTTON */}
      <button
        onClick={() => window.location.href = "/"}
        className="w-full bg-primary text-white py-3 rounded-lg font-semibold"
      >
        Back to Home
      </button>

    </div>
  );
};

