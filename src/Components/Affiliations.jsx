import { motion } from "framer-motion";
import logoOne from "../assets/clients/nsdc.png";
import logoTwo from "../assets/clients/memc.png";
import logoThree from "../assets/clients/skill_india.png";
import logoFour from "../assets/clients/Lotus.png";
import logoFive from "../assets/clients/Tinnu.png";
import logoSix from "../assets/clients/sony.png";
import logoSeven from "../assets/clients/panasonic.png";
import logoEight from "../assets/clients/Godox.png";

const affiliations = [
  { img: logoOne, name: "NSDC" },
  { img: logoTwo, name: "MEMC" },
  { img: logoThree, name: "Skill India" },
];

const clients = [
  { img: logoFour, name: "Lotus" },
  { img: logoFive, name: "Tinnu" },
  { img: logoSix, name: "Sony" },
  { img: logoSeven, name: "Panasonic" },
  { img: logoEight, name: "Godox" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } },
};

const AffiliationsPage = () => {
  return (
    <div className="bg-black">
      {/* Affiliated Section */}
      <section className="relative pt-16 pb-16 bg-gradient-to-b">
        <div className="w-11/12 md:w-4/5 mx-auto text-center relative z-10">
          <h3 className="font-bold text-3xl md:text-5xl text-white uppercase mb-12">
            Affiliated By
          </h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {affiliations.map((aff, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-center p-4 bg-white rounded-xl shadow-lg"
                variants={itemVariants}
                whileHover="hover"
              >
                <img
                  src={aff.img}
                  alt={aff.name}
                  className="w-24 md:w-32 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="relative pt-16 pb-16 bg-gradient-to-b">
        <div className="w-11/12 md:w-4/5 mx-auto text-center relative z-10">
          <h3 className="font-bold text-3xl md:text-5xl text-white uppercase mb-12">
            Our Brand Partners
          </h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-center p-4 bg-white rounded-xl shadow-lg"
                variants={itemVariants}
                whileHover="hover"
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-24 md:w-32 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AffiliationsPage;
