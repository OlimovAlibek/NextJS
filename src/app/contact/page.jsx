"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram, FaTwitter, FaBlogger } from "react-icons/fa"; // Import social icons

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formError, setFormError] = useState("");
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setFormError("");

    const userMessage = form.current.user_message.value.trim();
    const userEmail = form.current.user_email.value.trim();

    if (!userMessage || !userEmail) {
      setFormError("Please fill in all the fields.");
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl sm:text-6xl text-center lg:text-left">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-2/3 lg:h-full lg:w-1/2 bg-blue-300 dark:bg-gray-900 rounded-xl text-xl flex flex-col pb-20 gap-4 justify-center p-4 sm:p-12 md:p-16 lg:p-24"
        >
          <span className="font-bold text-gray-700 dark:text-white">Dear Ali,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black dark:border-b-white dark:text-white  outline-none resize-none p-2 placeholder-lightblue dark:placeholder-gray-500"
            name="user_message"
            placeholder="Your message"
          />
          <span className="font-bold dark:text-white text-gray-700">My mail address is:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black dark:border-b-white dark:text-white  outline-none resize-none p-2 placeholder-lightblue dark:placeholder-gray-500"
            placeholder="Your email"
          />
          <span className="font-bold dark:text-white text-gray-700">Regards,</span>
          <button className="bg-blue-500 text-white rounded font-semibold p-4 hover:bg-blue-600 transition duration-200 dark:bg-black dark:hover:bg-gray-800">
            Send
          </button>
          {formError && (
            <span className="text-red-600 font-semibold">{formError}</span>
          )}
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}

          {/* Social Media Icons Section */}
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://linkedin.com/in/OlimovAlibek" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-white hover:text-blue-500 transition-transform transform hover:scale-125">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/OlimovAlibek" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-gray-500 transition-transform transform hover:scale-125">
              <FaGithub size={30} />
            </a>
            <a href="https://instagram.com/Olimov__Alibek" target="_blank" rel="noopener noreferrer" className="text-pink-500 dark:text-white hover:text-pink-300 transition-transform transform hover:scale-125">
              <FaInstagram size={30} />
            </a>
            <a href="https://t.me/OlimovAlibek" target="_blank" rel="noopener noreferrer" className="text-blue-400 dark:text-white hover:text-white-300 transition-transform transform hover:scale-125">
              <FaTelegram size={30} />
            </a>
            <a href="https://twitter.com/OlimovAlibek" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-white hover:text-blue-400 transition-transform transform hover:scale-125">
              <FaTwitter size={30} />
            </a>
            <a href="https://t.me/AlibekBlog" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-white hover:text-orange-400 transition-transform transform hover:scale-125">
              <FaBlogger size={30} />
            </a>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
