import { motion } from "framer-motion";
import logoFour from "../assets/clients/Lotus.png";
import logoFive from "../assets/clients/Tinnu.png";
import logoSix from "../assets/clients/sony.png";
import logoSeven from "../assets/clients/panasonic.png";
import logoEight from "../assets/clients/Godox.png";

const clients = [
  { img: logoFour, name: "Lotus" },
  { img: logoFive, name: "Tinnu" },
  { img: logoSix, name: "Sony" },
  { img: logoSeven, name: "Panasonic" },
  { img: logoEight, name: "Godox" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: { scale: 1.1, rotate: 3, transition: { duration: 0.3 } },
  float: { y: [0, -8, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } },
};

const AffiliationsPage = () => {
  return (
    <div className="bg-white">
      <section className="relative py-20 bg-gradient-to-b from-purple-50 via-white to-purple-50 overflow-hidden">
        <motion.div
          className="w-11/12 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-10"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Title */}
          <h3 className="font-bold text-3xl md:text-5xl text-purple-700 uppercase text-center md:text-left md:w-1/3">
             Our <br /> Brand Partners
          </h3>

          {/* Logos in staggered/brick layout */}
          <motion.div
            className="grid grid-cols-5 gap-6 md:gap-8 auto-rows-auto"
            variants={containerVariants}
          >
             {clients.map((client, index) => (
              <motion.div
                key={index}
                className={`w-28 h-28 md:w-36 md:h-36 bg-white rounded-2xl shadow-lg border border-purple-200 hover:border-purple-400 flex justify-center items-center ${
                  index % 2 === 1 ? "translate-y-6 md:translate-y-8" : ""
                }`}
                variants={itemVariants}
                whileHover="hover"
                animate="float"
              >
                 <img src={client.img} alt={client.name} className="w-20 h-20 object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default AffiliationsPage;


// import { useRef, useEffect } from "react";
// import Matter from "matter-js";

// import logoOne from "../assets/clients/nsdc.png";
// import logoTwo from "../assets/clients/memc.png";
// import logoThree from "../assets/clients/skill_india.png";
// import logoFour from "../assets/clients/Lotus.png";
// import logoFive from "../assets/clients/Tinnu.png";
// import logoSix from "../assets/clients/sony.png";
// import logoSeven from "../assets/clients/panasonic.png";
// import logoEight from "../assets/clients/Godox.png";

// const affiliations = [logoOne, logoTwo, logoThree];
// const clients = [logoFour, logoFive, logoSix, logoSeven, logoEight];

// const preloadImages = (paths) =>
//   Promise.all(
//     paths.map(
//       (src) =>
//         new Promise((resolve, reject) => {
//           const img = new Image();
//           img.onload = () => resolve(img);
//           img.onerror = reject;
//           img.src = src;
//         })
//     )
//   );

// const FallingImages = ({
//   images = [],
//   titleInsideCanvas = "",
//   width = 800,
//   height = 400,
// }) => {
//   const sceneRef = useRef(null);

//   useEffect(() => {
//     if (!sceneRef.current) return;

//     let cancelled = false;

//     (async () => {
//       const loadedImages = await preloadImages(images);
//       if (cancelled) return;

//       const {
//         Engine,
//         Render,
//         Runner,
//         World,
//         Bodies,
//         Mouse,
//         MouseConstraint,
//         Body,
//         Events,
//       } = Matter;

//       const engine = Engine.create();
//       const world = engine.world;
//       world.gravity.y = 0.5;

//       const render = Render.create({
//         element: sceneRef.current,
//         engine,
//         options: { width, height, background: "#111111", wireframes: false },
//       });

//       // Walls to contain boxes
//       const wallThickness = 100;
//       const walls = [
//         Bodies.rectangle(
//           width / 2,
//           -wallThickness / 2,
//           width + wallThickness * 2,
//           wallThickness,
//           { isStatic: true }
//         ),
//         Bodies.rectangle(
//           width / 2,
//           height + wallThickness / 2,
//           width + wallThickness * 2,
//           wallThickness,
//           { isStatic: true }
//         ),
//         Bodies.rectangle(
//           -wallThickness / 2,
//           height / 2,
//           wallThickness,
//           height + wallThickness * 2,
//           { isStatic: true }
//         ),
//         Bodies.rectangle(
//           width + wallThickness / 2,
//           height / 2,
//           wallThickness,
//           height + wallThickness * 2,
//           { isStatic: true }
//         ),
//       ];

//       // Boxes
//       const boxes = loadedImages.map((img, i) => {
//         const size = 100;
//         const x = 100 + (i % 5) * 160;
//         const y = Math.random() * -300;
//         const body = Bodies.rectangle(x, y, size, size, {
//           restitution: 0.9, 
//           frictionAir: 0.05,
//         });
//         body.customImage = img;
//         return body;
//       });

//       World.add(world, [...walls, ...boxes]);

//       // Mouse drag
//       const mouse = Mouse.create(render.canvas);
//       const mouseConstraint = MouseConstraint.create(engine, {
//         mouse,
//         constraint: { stiffness: 0.3, render: { visible: false } },
//       });
//       World.add(world, mouseConstraint);

//       // Prevent canvas from blocking scroll
//       render.canvas.style.touchAction = "auto";

//       // Clamp boxes inside walls
//       Events.on(engine, "beforeUpdate", () => {
//         boxes.forEach((body) => {
//           const halfSize = 45;
//           if (body.position.x < halfSize)
//             Body.setPosition(body, { x: halfSize, y: body.position.y });
//           if (body.position.x > width - halfSize)
//             Body.setPosition(body, { x: width - halfSize, y: body.position.y });
//           if (body.position.y < halfSize)
//             Body.setPosition(body, { x: body.position.x, y: halfSize });
//           if (body.position.y > height - halfSize)
//             Body.setPosition(body, {
//               x: body.position.x,
//               y: height - halfSize,
//             });
//         });
//       });

//       Render.run(render);
//       const runner = Runner.create();
//       Runner.run(runner, engine);

//       const ctx = render.context;
//       const draw = () => {
//         ctx.clearRect(0, 0, width, height);
//         ctx.fillStyle = "#111111";
//         ctx.fillRect(0, 0, width, height);

//         // Draw title inside canvas
//         ctx.save();
//         ctx.fillStyle = "#ffffff";
//         ctx.font = "48px bold Space Grotesk, sans-serif";
//         ctx.textAlign = "center";
//         ctx.textBaseline = "top"; // better alignment for title

//         // Draw a border around the canvas properly
//         ctx.strokeStyle = "#ffffff"; // border color
//         ctx.lineWidth = 4; // border thickness
//         ctx.strokeRect(
//           ctx.lineWidth / 2,
//           ctx.lineWidth / 2,
//           width - ctx.lineWidth,
//           height - ctx.lineWidth
//         );

//         // Draw the title
//         ctx.fillText(titleInsideCanvas, width / 2, 20); // slightly below top
//         ctx.restore();

//         // Draw boxes
//         boxes.forEach((body) => {
//           const { position, angle, customImage } = body;
//           ctx.save();
//           ctx.translate(position.x, position.y);
//           ctx.rotate(angle);

//           const boxSize = 150;
//           ctx.fillStyle = "#fff";
//           ctx.strokeStyle = "#e5e7eb";
//           ctx.lineWidth = 2;
//           ctx.fillRect(-boxSize / 2, -boxSize / 2, boxSize, boxSize);
//           ctx.strokeRect(-boxSize / 2, -boxSize / 2, boxSize, boxSize);

//           const imgSize = 100;
//           ctx.drawImage(
//             customImage,
//             -imgSize / 2,
//             -imgSize / 2,
//             imgSize,
//             imgSize
//           );

//           ctx.restore();
//         });

//         requestAnimationFrame(draw);
//       };
//       draw();

//       return () => {
//         cancelled = true;
//         Render.stop(render);
//         Runner.stop(runner);
//         World.clear(world, false);
//         Matter.Engine.clear(engine);
//         render.canvas.remove();
//       };
//     })();

//     return () => (cancelled = true);
//   }, [images, width, height, titleInsideCanvas]);

//   return (
//     <div
//       ref={sceneRef}
//       className="mx-auto w-full md:w-[800px] h-[400px] rounded-xl overflow-hidden"
//     />
//   );
// };

// // Affiliations page
// const Affiliations = () => (
//   <div className="bg-black text-white min-h-screen py-20">
//     <section className="text-center mb-32">
//       <FallingImages images={affiliations} titleInsideCanvas="Affiliated By" />
//     </section>
//     <section className="text-center">
//       <FallingImages images={clients} titleInsideCanvas="Our Brand Partners" />
//     </section>
//   </div>
// );

// export default Affiliations;
