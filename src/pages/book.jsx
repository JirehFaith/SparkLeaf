import React, { useState } from "react";

const houseServices = [
  { id: 1, name: "House Cleaning", price: 50 },
  { id: 2, name: "Deep Cleaning", price: 100 },
  { id: 3, name: "Carpet Cleaning", price: 30 },
];

const businessServices = [
  { id: 4, name: "Office Cleaning", price: 150 },
  { id: 5, name: "Window Cleaning", price: 80 },
  { id: 6, name: "Industrial Cleaning", price: 200 },
];

export default function BookingUI() {
  const [selectedDate, setSelectedDate] = useState("Fri 07");
  const [selectedTime, setSelectedTime] = useState("10 - 11 AM");
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceType, setServiceType] = useState("house");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const total = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const advance = total * 0.2;

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-24 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow space-y-6">
          <h2 className="text-lg font-semibold">Select a Slot</h2>

          {/* DATE */}
          <div>
            <p className="text-sm mb-2">Select Date</p>
            <div className="flex gap-2 flex-wrap">
              {["Fri 07", "Sat 08", "Sun 09", "Mon 10"].map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDate(d)}
                  className={`px-3 py-2 rounded border text-sm ${
                    selectedDate === d
                      ? "bg-primary text-white"
                      : "bg-white"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* TIME */}
          <div>
            <p className="text-sm mb-2">Select Time</p>
            <div className="flex gap-2 flex-wrap">
              {["08-09 AM", "10-11 AM", "11-12 AM", "04-06 PM"].map(
                (t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`px-3 py-2 rounded border text-sm ${
                      selectedTime === t
                        ? "bg-primary text-white"
                        : "bg-white"
                    }`}
                  >
                    {t}
                  </button>
                )
              )}
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <p className="text-sm mb-2">Address</p>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* PHONE */}
          <div>
            <p className="text-sm mb-2">Mobile Number</p>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* SERVICES */}
          <div>
            <p className="text-sm mb-2">Select Services</p>
            <div className="space-y-2">
              {/* SERVICES TYPE TOGGLE */}
            <div className="flex bg-gray-200 rounded-lg p-1 w-fit mb-3">
              <button
                onClick={() => {
                  setServiceType("house");
                  setSelectedServices([]);
                }}
                className={`px-4 py-2 rounded-md text-sm ${
                  serviceType === "house"
                    ? "bg-primary text-white"
                    : "text-gray-600"
                }`}
              >
                House
              </button>
              <button
                onClick={() => {
                  setServiceType("business");
                  setSelectedServices([]);
                }}
                className={`px-4 py-2 rounded-md text-sm ${
                  serviceType === "business"
                    ? "bg-primary text-white"
                    : "text-gray-600"
                }`}
              >
                Business
              </button>
            </div>

            {(serviceType === "house" ? houseServices : businessServices).map((service) => (
              <div
                key={service.id}
                className="flex justify-between items-center border p-3 rounded"
              >
                <span>
                  {service.name} (${service.price})
                </span>
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service)}
                  onChange={() => toggleService(service)}
                />
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h3 className="font-semibold">Booking Details</h3>

          <div className="text-sm">
            <p className="font-medium">Services:</p>
            {selectedServices.length === 0 ? (
              <p className="text-gray-400">No service selected</p>
            ) : (
              selectedServices.map((s) => <p key={s.id}>{s.name}</p>)
            )}
          </div>

          <div className="text-sm">
            <p>Date: {selectedDate}</p>
            <p>Time: {selectedTime}</p>
          </div>

          <div className="border-t pt-3 text-sm">
            <p>Total: ${total}</p>
            <p>Advance (20%): ${advance}</p>
          </div>

          <button className="w-full bg-primary text-white py-2 rounded">
            Proceed to Pay ${advance}
          </button>
        </div>
      </div>
    </div>
  );
}
