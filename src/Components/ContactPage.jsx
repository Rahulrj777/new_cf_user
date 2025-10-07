import { MdOutlineMail, MdOutlinePhoneAndroid } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05 },
  };

  const phoneNumber = "+919884683888";

  // Helper function to return proper link
  const getPhoneLink = () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
      return `tel:${phoneNumber}`; // opens dialer
    } else {
      return `https://wa.me/${phoneNumber.replace(/\D/g, "")}`; // opens WhatsApp Web
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Map container */}
      <div className="relative w-full h-[100vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9165469023337!2d80.24601647460486!3d13.04098381335422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267006fba7507%3A0x503e1b6f9895ffa7!2sCinema%20Factory%20Academy!5e0!3m2!1sen!2sin!4v1723875566990!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full z-0"
          style={{ filter: "brightness(0.6)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Overlay container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-20 gap-12 z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white uppercase text-center drop-shadow-lg"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2
              style={{
                textShadow: `
      0 0 3px #D47BFF,
      0 0 6px #D47BFF,
      0 0 10px rgba(212,123,255,0.5)
    `,
              }}
            >
              Get in Touch
            </h2>
          </motion.h1>

          <motion.p
            className="text-gray-200 text-center max-w-3xl text-lg md:text-xl drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Have questions about our courses or want to join the film and media
            industry? Reach out today, and let’s start creating cinematic magic
            together.
          </motion.p>

          {/* Contact cards */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-10 justify-center">
            {/* Email */}
            <motion.a
              href="mailto:contact@cinemafactoryacademy.com"
              className="bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-6 flex items-center gap-4 cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <div className="bg-green-600 p-3 rounded-full text-white">
                <MdOutlineMail className="text-xl" />
              </div>
              <p className="text-white font-semibold text-lg">
                contact@cinemafactoryacademy.com
              </p>
            </motion.a>

            {/* Phone / WhatsApp */}
            <motion.a
              href={getPhoneLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-6 flex items-center gap-4 cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <div className="bg-yellow-500 p-3 rounded-full text-white">
                <MdOutlinePhoneAndroid className="text-xl" />
              </div>
              <p className="text-white font-semibold text-lg">{phoneNumber}</p>
            </motion.a>

            {/* Location */}
            <motion.a
              href="https://www.google.com/maps?q=Cinema+Factory+Academy,+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-6 flex items-center gap-4 cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <div className="bg-purple-600 p-3 rounded-full text-white">
                <FaLocationArrow className="text-xl" />
              </div>
              <p className="text-white font-semibold text-lg">Our Location</p>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
