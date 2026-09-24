"use client";

import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      const res = await axios.post("/api/contact", userInput);

      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#B59E7D] text-xl uppercase">Contact with me</p>
      <div className="max-w-3xl text-[#58473B] rounded-lg border border-[#B59E7D] p-3 lg:p-5 bg-[#F1EADA]">
        <p className="text-sm text-[#58473B]">
          If you have any questions or concerns, please don&apos;t hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base text-[#58473B]">Your Name:</label>
            <input
              type="text"
              maxLength="100"
              required
              className="bg-[#F1EADA] w-full border rounded-md border-[#B59E7D] focus:border-[#58473B] focus:outline-none px-3 py-2 text-[#58473B]"
              value={userInput.name}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-[#58473B]">Your Email:</label>
            <input
              type="email"
              maxLength="100"
              required
              className="bg-[#F1EADA] w-full border rounded-md border-[#B59E7D] focus:border-[#58473B] focus:outline-none px-3 py-2 text-[#58473B]"
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && <p className="text-sm text-red-500">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-[#58473B]">Your Message:</label>
            <textarea
              rows="4"
              maxLength="500"
              required
              className="bg-[#F1EADA] w-full border rounded-md border-[#B59E7D] focus:border-[#58473B] focus:outline-none px-3 py-2 text-[#58473B]"
              value={userInput.message}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
            />
          </div>

          {error.required && <p className="text-sm text-red-500">All fields are required!</p>}

          <button
            onClick={handleSendMail}
            disabled={isLoading}
            className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#B59E7D] to-[#58473B] px-6 py-3 text-sm font-medium uppercase text-[#F1EADA] transition-all hover:gap-4"
          >
            {isLoading ? "Sending Message..." : (
              <>
                Send Message <TbMailForward size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
