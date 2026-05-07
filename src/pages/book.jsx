import { useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaClock,
  FaCreditCard,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    date: new Date(),
    time: "",
    address: "",
    city: "",
    phone: "",
  });

  const [selectedServices, setSelectedServices] = useState([]);

  const bookingRef = useMemo(
    () => `BK-${Math.floor(100000 + Math.random() * 900000)}`,
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-secondary">Book now</p>
              <h1 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
                Schedule your cleaning service
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Choose a service, pick a convenient time, enter your address,
                and complete payment securely. Designed for a smooth and
                professional booking experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              <Badge icon={<FaShieldAlt />} text="Secure checkout" />
              <Badge icon={<FaClock />} text="Fast booking" />
              <Badge icon={<FaMapMarkerAlt />} text="Kigali service area" />
            </div>
          </div>

          <div className="mt-6">
            <StepProgress step={step} />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:p-7">
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
                  setStep={setStep}
                  selectedServices={selectedServices}
                />
              )}

              {step === 5 && (
                <StepConfirmation
                  bookingRef={bookingRef}
                  bookingData={bookingData}
                  selectedServices={selectedServices}
                />
              )}
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="grid gap-4 md:grid-cols-3">
                <TrustCard
                  title="Trusted cleaners"
                  text="Professional service teams with attention to detail."
                />
                <TrustCard
                  title="Transparent pricing"
                  text="Know what you pay before you confirm."
                />
                <TrustCard
                  title="Local support"
                  text="Quick help whenever you need assistance."
                />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <BookingSummary
              step={step}
              bookingData={bookingData}
              selectedServices={selectedServices}
            />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Booking;

const Badge = ({ icon, text }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
    <span className="text-secondary">{icon}</span>
    <span>{text}</span>
  </div>
);

const TrustCard = ({ title, text }) => (
  <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
    <h3 className="text-sm font-semibold text-primary">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
  </div>
);

const StepProgress = ({ step }) => {
  const steps = [
    { id: 1, label: "Date" },
    { id: 2, label: "Address" },
    { id: 3, label: "Services" },
    { id: 4, label: "Payment" },
    { id: 5, label: "Done" },
  ];

  return (
    <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
      <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
        <span>Booking progress</span>
        <span>
          Step {step} of {steps.length}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {steps.map((item, index) => {
          const active = step === item.id;
          const done = step > item.id;

          return (
            <div key={item.id} className="flex flex-1 items-center gap-2">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition ${
                  done
                    ? "bg-accent text-white"
                    : active
                    ? "bg-secondary text-white shadow-lg shadow-sky-200"
                    : "bg-white text-slate-400 ring-1 ring-slate-200"
                }`}
              >
                {done ? "✓" : item.id}
              </div>

              <div className="hidden sm:block">
                <p
                  className={`text-xs font-semibold ${
                    active || done ? "text-primary" : "text-slate-400"
                  }`}
                >
                  {item.label}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`h-[2px] flex-1 rounded-full ${
                    step > item.id ? "bg-accent" : "bg-slate-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-primary">{title}</h2>
    <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
  </div>
);

const BackButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-secondary hover:bg-sky-50 hover:text-secondary"
  >
    <FaArrowLeft size={13} />
    Back
  </button>
);

const StepDate = ({ setStep, bookingData, setBookingData }) => {
  const [error, setError] = useState("");
  const times = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00"];

  const handleContinue = () => {
    if (!bookingData.date || !bookingData.time) {
      setError("Please select both a date and time.");
      return;
    }
    setError("");
    setStep(2);
  };

  return (
    <div>
      <BackButton onClick={() => setStep(1)} />
      <SectionTitle
        title="Select date & time"
        subtitle="Pick the best slot for your service."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-3">
          <DatePicker
            selected={bookingData.date}
            onChange={(date) => setBookingData({ ...bookingData, date })}
            minDate={new Date()}
            inline
          />
        </div>

        <div className="space-y-4">
          <div className="rounded-[24px] border border-slate-200 bg-white p-5">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
              <FaClock className="text-secondary" /> Available times
            </p>

            <div className="grid grid-cols-3 gap-3">
              {times.map((time) => {
                const selected = bookingData.time === time;
                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setBookingData({ ...bookingData, time })}
                    className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition ${
                      selected
                        ? "border-secondary bg-secondary text-white shadow-lg shadow-sky-200"
                        : "border-slate-200 bg-white text-slate-700 hover:border-secondary hover:bg-sky-50"
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-primary">Selected slot</p>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Date</span>
                <span className="font-medium text-primary">
                  {bookingData.date.toDateString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Time</span>
                <span className="font-medium text-primary">
                  {bookingData.time || "Not selected"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {error && <p className="mt-4 text-sm font-medium text-red-500">{error}</p>}

      <button
        onClick={handleContinue}
        className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-secondary px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-primary"
      >
        Continue
      </button>
    </div>
  );
};

const StepAddress = ({ setStep, bookingData, setBookingData }) => {
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!bookingData.address || !bookingData.city || !bookingData.phone) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setStep(3);
  };

  return (
    <div>
      <BackButton onClick={() => setStep(1)} />
      <SectionTitle
        title="Enter address"
        subtitle="Tell us where the service should take place."
      />

      <div className="grid gap-4">
        <InputField
          label="Street address"
          placeholder="Enter street address"
          value={bookingData.address}
          onChange={(e) =>
            setBookingData({ ...bookingData, address: e.target.value })
          }
        />

        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            label="City"
            placeholder="Enter city"
            value={bookingData.city}
            onChange={(e) =>
              setBookingData({ ...bookingData, city: e.target.value })
            }
          />

          <InputField
            label="Phone number"
            placeholder="07XXXXXXXX"
            value={bookingData.phone}
            onChange={(e) =>
              setBookingData({ ...bookingData, phone: e.target.value })
            }
          />
        </div>
      </div>

      <div className="mt-5 rounded-[22px] border border-sky-100 bg-sky-50 p-4 text-sm text-primary">
        We use your details only to complete the booking and contact you if
        needed.
      </div>

      {error && <p className="mt-4 text-sm font-medium text-red-500">{error}</p>}

      <button
        onClick={handleContinue}
        className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-secondary px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-primary"
      >
        Continue
      </button>
    </div>
  );
};

const InputField = ({ label, ...props }) => {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <input
        {...props}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-secondary focus:ring-4 focus:ring-sky-100"
      />
    </label>
  );
};

const StepServices = ({ setStep, selectedServices, setSelectedServices }) => {
  const services = [
    {
      title: "House Cleaning",
      price: 30,
      duration: "2–3 hrs",
      desc: "Routine cleaning for homes and apartments.",
    },
    {
      title: "Deep Cleaning",
      price: 50,
      duration: "4–5 hrs",
      desc: "Detailed cleaning for stubborn dirt and buildup.",
    },
    {
      title: "Move In/Out Cleaning",
      price: 60,
      duration: "4–6 hrs",
      desc: "Perfect for moving day and handover cleaning.",
    },
    {
      title: "Carpet Cleaning",
      price: 25,
      duration: "1–2 hrs",
      desc: "Freshen carpets and remove dust buildup.",
    },
    {
      title: "Office Cleaning",
      price: 40,
      duration: "2–3 hrs",
      desc: "Keep your workspace clean and professional.",
    },
    {
      title: "Commercial Cleaning",
      price: 70,
      duration: "5+ hrs",
      desc: "For larger business spaces and shared areas.",
    },
    {
      title: "Maintenance Cleaning",
      price: 35,
      duration: "2 hrs",
      desc: "Regular upkeep to keep spaces spotless.",
    },
  ];

  const toggle = (service) => {
    const exists = selectedServices.find((s) => s.title === service.title);

    if (exists) {
      setSelectedServices((prev) =>
        prev.filter((s) => s.title !== service.title)
      );
    } else {
      setSelectedServices((prev) => [...prev, service]);
    }
  };

  return (
    <div>
      <BackButton onClick={() => setStep(2)} />
      <SectionTitle
        title="Choose services"
        subtitle="Select one or more services for your booking."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {services.map((service) => {
          const selected = selectedServices.some(
            (s) => s.title === service.title
          );

          return (
            <button
              key={service.title}
              type="button"
              onClick={() => toggle(service)}
              className={`rounded-[24px] border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
                selected
                  ? "border-secondary bg-sky-50 shadow-[0_10px_24px_rgba(14,165,233,0.12)]"
                  : "border-slate-200 bg-white hover:border-secondary hover:bg-sky-50/40"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-primary">
                      {service.title}
                    </h3>
                    {selected && (
                      <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-white">
                        Selected
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                    <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">
                      {service.duration}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">
                      Flexible booking
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold text-primary">
                    ${service.price}
                  </p>
                  {selected ? (
                    <FaCheckCircle className="ml-auto mt-3 text-2xl text-accent" />
                  ) : (
                    <div className="ml-auto mt-3 h-6 w-6 rounded-full border border-slate-300" />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => setStep(4)}
        disabled={!selectedServices.length}
        className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-secondary px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        Continue ({selectedServices.length} selected)
      </button>
    </div>
  );
};

const StepPayment = ({ setStep, selectedServices }) => {
  const [method, setMethod] = useState("mtn_momo");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const subtotal = useMemo(
    () => selectedServices.reduce((acc, item) => acc + item.price, 0),
    [selectedServices]
  );

  const upfront = subtotal * 0.2;
  const remaining = subtotal - upfront;

  const isValidRwandaNumber = (num) => /^(07\d{8}|2507\d{8})$/.test(num);

  const paymentMethods = [
    {
      id: "mtn_momo",
      label: "MTN MoMo",
      hint: "Local",
      logo: "/images/payments/mtn_momo.png",
    },
    {
      id: "airtel_momo",
      label: "Airtel Money",
      hint: "Local",
      logo: "/images/payments/airtel_momo.png",
    },
    {
      id: "visa",
      label: "Visa",
      hint: "Card",
      logo: "/images/payments/visa.png",
    },
    {
      id: "mastercard",
      label: "Mastercard",
      hint: "Card",
      logo: "/images/payments/mastercardLogo.svg",
    },
    {
      id: "paypal",
      label: "PayPal",
      hint: "Online",
      logo: "/images/payments/paypal.png",
    },
  ];

  const handlePay = () => {
    if (
      (method === "mtn_momo" || method === "airtel_momo") &&
      !isValidRwandaNumber(phone)
    ) {
      setError("Enter a valid mobile money number.");
      return;
    }
    setError("");
    setStep(5);
  };

  const activeLabel =
    paymentMethods.find((item) => item.id === method)?.label || "Payment";

  return (
    <div>
      <BackButton onClick={() => setStep(3)} />
      <SectionTitle
        title="Secure payment"
        subtitle="Choose your preferred payment method."
      />

      <div className="mb-6 flex items-center gap-2 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
        <FaShieldAlt />
        Secure checkout protected with standard payment safeguards
      </div>

      <div className="grid gap-3 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-4">
<div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {paymentMethods.map((item) => (
              <PaymentChoice
                key={item.id}
                active={method === item.id}
                onClick={() => setMethod(item.id)}
                logo={item.logo}
                label={item.label}
                hint={item.hint}
              />
            ))}
          </div>

          {(method === "visa" || method === "mastercard") && (
            <div className="rounded-[24px] border border-slate-200 bg-white p-5">
              <div className="grid gap-4">
                <InputField
                  label="Card number"
                  placeholder="1234 5678 9012 3456"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <InputField label="Cardholder name" placeholder="Name on card" />
                  <InputField label="Expiry / CVC" placeholder="MM/YY • CVC" />
                </div>
              </div>
            </div>
          )}

          {(method === "mtn_momo" || method === "airtel_momo") && (
            <div className="rounded-[24px] border border-slate-200 bg-white p-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Mobile money number
              </label>

              <div className="flex overflow-hidden rounded-2xl border border-slate-200 focus-within:ring-4 focus-within:ring-sky-100">
                <span className="flex items-center bg-slate-50 px-4 text-sm font-semibold text-slate-500">
                  +250
                </span>
                <input
                  type="tel"
                  placeholder="78XXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 text-sm outline-none"
                />
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Use the number linked to your mobile money account.
              </p>
            </div>
          )}
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-primary">Order summary</p>

          <div className="mt-4 space-y-3">
            {selectedServices.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="text-slate-600">{item.title}</span>
                <span className="font-semibold text-primary">${item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 border-t border-slate-200 pt-4 text-sm">
            <div className="flex items-center justify-between text-slate-600">
              <span>Total</span>
              <span className="font-semibold text-primary">${subtotal}</span>
            </div>
            <div className="mt-2 flex items-center justify-between font-semibold text-secondary">
              <span>Pay now (20%)</span>
              <span>${upfront}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-slate-500">
              <span>Remaining</span>
              <span>${remaining}</span>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-white p-4 text-xs text-slate-500">
            The remaining balance will be due after completion of the service.
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Selected method
            </p>
            <p className="mt-1 text-sm font-semibold text-primary">{activeLabel}</p>
          </div>
        </div>
      </div>

      {error && <p className="mt-4 text-sm font-medium text-red-500">{error}</p>}

      <button
        onClick={handlePay}
        disabled={
          (method === "mtn_momo" || method === "airtel_momo") &&
          !isValidRwandaNumber(phone)
        }
        className={`mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3.5 text-sm font-semibold text-white transition ${
          (method === "mtn_momo" || method === "airtel_momo") &&
          !isValidRwandaNumber(phone)
            ? "cursor-not-allowed bg-slate-300"
            : "bg-secondary hover:bg-primary"
        }`}
      >
        Pay ${upfront}
      </button>
    </div>
  );
};

const PaymentChoice = ({ active, onClick, logo, label, hint }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex h-14 w-24 items-center justify-center rounded-[20px] border p-3 transition hover:-translate-y-0.5 ${
      active
        ? "border-secondary bg-sky-50 "
        : "border-slate-200 bg-white hover:border-secondary hover:bg-sky-50/40"
    }`}
  >
    <img src={logo} alt={label} className="h-full w-full object-contain" />
  </button>
);

const StepConfirmation = ({ bookingRef, bookingData, selectedServices }) => {
  const total = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const upfront = total * 0.2;
  const remaining = total - upfront;

  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
        <FaCheckCircle className="text-5xl text-accent" />
      </div>

      <h2 className="text-3xl font-bold text-primary">Booking confirmed</h2>
      <p className="mt-2 text-sm text-slate-600">
        Your service has been successfully scheduled.
      </p>

      <div className="mt-6 grid gap-4 rounded-[24px] border border-slate-200 bg-slate-50 p-5 text-left sm:grid-cols-2">
        <DetailRow label="Reference" value={bookingRef} />
        <DetailRow label="Date" value={bookingData.date.toDateString()} />
        <DetailRow label="Time" value={bookingData.time} />
        <DetailRow label="City" value={bookingData.city} />
        <DetailRow label="Address" value={bookingData.address} />
        <DetailRow label="Phone" value={bookingData.phone} />
      </div>

      <div className="mt-6 rounded-[24px] border border-slate-200 bg-white p-5 text-left">
        <p className="text-sm font-semibold text-primary">Services</p>

        <div className="mt-4 space-y-3">
          {selectedServices.map((service, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <span className="text-slate-600">{service.title}</span>
              <span className="font-semibold text-primary">${service.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-slate-200 pt-4 text-sm">
          <div className="flex items-center justify-between text-slate-600">
            <span>Total</span>
            <span className="font-semibold text-primary">${total}</span>
          </div>
          <div className="mt-2 flex items-center justify-between font-semibold text-secondary">
            <span>Paid now</span>
            <span>${upfront}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-slate-500">
            <span>Remaining</span>
            <span>${remaining}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex flex-1 items-center justify-center rounded-2xl bg-secondary px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-primary"
        >
          Back to Home
        </Link>

        <button
          onClick={() => window.print()}
          className="inline-flex flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-secondary hover:bg-sky-50 hover:text-secondary"
        >
          Print confirmation
        </button>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="rounded-[18px] bg-white p-4">
    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
      {label}
    </p>
    <p className="mt-1 text-sm font-semibold text-primary">{value}</p>
  </div>
);

const BookingSummary = ({ step, bookingData, selectedServices }) => {
  const subtotal = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const upfront = subtotal * 0.2;
  const remaining = subtotal - upfront;

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-primary">Summary</h3>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          Step {step}
        </span>
      </div>

      <div className="mt-5 space-y-4">
        <SummaryRow
          label="Date"
          value={bookingData.date.toDateString()}
          placeholder="Not selected"
        />
        <SummaryRow
          label="Time"
          value={bookingData.time}
          placeholder="Not selected"
        />
        <SummaryRow
          label="City"
          value={bookingData.city}
          placeholder="Not selected"
        />
        <SummaryRow
          label="Address"
          value={bookingData.address}
          placeholder="Not selected"
        />
      </div>

      <div className="mt-6 rounded-[22px] bg-slate-50 p-4">
        <p className="text-sm font-semibold text-primary">Selected services</p>

        <div className="mt-3 space-y-2">
          {selectedServices.length ? (
            selectedServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-slate-600">{service.title}</span>
                <span className="font-semibold text-primary">${service.price}</span>
              </div>
            ))
          ) : (
            <p className="text-sm text-slate-500">No services selected yet.</p>
          )}
        </div>

        <div className="mt-4 border-t border-slate-200 pt-4 text-sm">
          <div className="flex items-center justify-between text-slate-600">
            <span>Total</span>
            <span className="font-semibold text-primary">${subtotal}</span>
          </div>
          <div className="mt-2 flex items-center justify-between font-semibold text-secondary">
            <span>Pay now</span>
            <span>${upfront}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-slate-500">
            <span>Remaining</span>
            <span>${remaining}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-[22px] border border-emerald-100 bg-emerald-50 p-4">
        <p className="text-sm font-semibold text-emerald-700">Need help?</p>
        <p className="mt-1 text-sm text-emerald-700/80">
          Our support team can help you complete your booking.
        </p>
      </div>
    </div>
  );
};

const SummaryRow = ({ label, value, placeholder }) => (
  <div className="flex items-center justify-between gap-4 border-b border-slate-200 py-2 last:border-0">
    <span className="text-sm text-slate-500">{label}</span>
    <span className="text-right text-sm font-semibold text-primary">
      {value || placeholder}
    </span>
  </div>
);