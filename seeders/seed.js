const { Product } = require("../models");

Product.bulkCreate([
  {
    name: "Logitech Ergo M575",
    description:
      "Minimize movement and maximize comfort with the ERGO M575, a wireless trackball with an ergonomically contoured shape. With no need to move your arm to move the cursor, your hand and arm remain relaxed. The efficient thumb-operated control can be used anywhere, and with no need to move it, the ERGO M575 is perfect for space-constrained workbenches.",
    image_URL: "https://i.imgur.com/TRycEHa.png",
    price: 35,
    stock: 5,
  },
  {
    name: "Logitech Hero G502",
    description:
      "Designed for advanced gaming performance. G502 HERO features a HERO 25K gaming sensor with sub-micron precision tracking, customizable LIGHTSYNC RGB, built-in profiles, repositionable weights, and more.",
    image_URL: "https://i.imgur.com/3LpFS58.png",
    price: 29,
    stock: 7,
  },
  {
    name: "Logitech G300S",
    description:
      "The factory settings give great results, or you can set up triggers to perform complex actions that often require the use of menus with a single button. Have at your fingertips the communications activated with just a button. Temporarily lowers the dpi value. Remap any in-game command or multi-command macro to any of nine programmable buttons with Logitech Gaming Software.",
    image_URL: "https://i.imgur.com/qwgPcQI.png",
    price: 15,
    stock: 35,
  },
  {
    name: "Logitech G903",
    description:
      "Ultimate Gaming Mouse Low latency wireless LIGHTSPEED technology. The HERO 25K sensor features submicron tracking. Design for ambidextrous use. Super fast scrolling. POWERPLAY compatible for continuous wireless charging. Supreme Gaming Mouse Low latency wireless LIGHTSPEED technology. The HERO 25K sensor features submicron tracking. Design for ambidextrous use. Super fast scrolling. POWERPLAY compatible for continuous wireless charging.",
    image_URL: "https://i.imgur.com/7N7Gs5I.png",
    price: 45,
    stock: 21,
  },
  {
    name: "Logitech G915 TKL",
    description:
      "A breakthrough in design and engineering. Pro-grade LIGHTSPEED wireless technology, advanced LIGHTSYNC RGB, and low-profile, pro-grade mechanical switches. Made with premium materials. Available in black or white.",
    image_URL: "https://i.imgur.com/nhl9giF.png",
    price: 95,
    stock: 30,
  },
  {
    name: "Logitech G413",
    description:
      "Design for advanced performance with the right features. The compact aluminum alloy case has, among other things, USB pass-through, backlit keys and Romer-G mechanical switches.",
    image_URL: "https://i.imgur.com/swXQDsm.png",
    price: 40,
    stock: 75,
  },
  {
    name: "Logitech K480",
    description:
      "The K480 is a comfortable multi-device keyboard that saves space and makes it easy to type on your laptop, tablet or mobile. You can pair up to three devices and easily switch usage between all three. Thoughtfully designed, this durable keyboard with long battery life is what you need for increased productivity, anywhere.",
    image_URL: "https://i.imgur.com/3vn5UUp.png",
    price: 50,
    stock: 30,
  },
  {
    name: "Razer Basilisk V3 Pro",
    description:
      "Favored by millions worldwide, the mouse’s signature shape perfectly supports different grips, while its numerous easy-access buttons allow for an endless combination of commands and macros.For smooth, high-speed scrolling perfect for covering content quickly or emulating repeated game commands.",
    image_URL: "https://i.imgur.com/KBqrSfv.png",
    price: 48,
    stock: 25,
  },
  {
    name: "Razer Blackwidow V3 mini",
    description:
      "Compact enough for any space, and versatile enough for all setups—this is the Razer BlackWidow V3 Mini HyperSpeed. Enjoy seamless gaming in a sleek package with a wireless 65% mechanical gaming keyboard that’s the perfect balance of form and function.",
    image_URL: "https://i.imgur.com/jP4Pg1X.png",
    price: 65,
    stock: 15,
  },
  {
    name: "Razer Deathadder V2 X",
    description:
      "Iconic ergonomics now comes with limitless control, thanks to dual connectivity via ultra-fast Razer™ HyperSpeed ​​Wireless technology or Bluetooth, as well as 7 programmable buttons including 2 easily accessible buttons on the edge.Whether you're assigning the basics or going to the death with advanced macros, have all the control you need at your fingertips with 2 unique quick-access buttons on the edge and 2 side buttons.",
    image_URL: "https://i.imgur.com/OT30ktH.png",
    price: 60,
    stock: 29,
  },
  {
    name: "Razer Viper 8KHz",
    description:
      "Razer™ HyperPolling Technology surpasses the industry standard with a true 8000 Hz polling rate— sending up to 8 times more data in a second and reducing delay from 1 to 1/8th of a millisecond.",
    image_URL: "https://i.imgur.com/XpqYlgz.png",
    price: 55,
    stock: 15,
  },
  {
    name: "Razer Viper Mini",
    description:
      "Born to push the very limits of ultra-lightweight gaming, the Razer Viper Mini takes up a smaller form that remains just as big in performance. Shortening its length and grip width, we’ve worked with enthusiasts and esports athletes to hone its design even further, ensuring that absolute control now belongs in the hands of more gamers—so take hold of our leanest and lightest gaming mouse yet.",
    image_URL: "https://i.imgur.com/e4EYPj2.png",
    price: 49,
    stock: 33,
  },
  {
    name: "Razer-Ornata-V3-X",
    description:
      "Take the first step toward high-end performance with the Razer Ornata V3 X, a low-profile, ergonomic gaming keyboard designed to elevate your work and play. It's the perfect path to an unfair advantage, thanks to its ultra-slim design, longer-lasting keys, and Razer Chroma™ RGB.",
    image_URL: "https://i.imgur.com/FKTYtq5.png",
    price: 70,
    stock: 23,
  },
  {
    name: "Razer-Huntsman-Mini",
    description:
      "Enter a deadly new dimension with the Razer Huntsman Mini: a gaming keyboard shrunk to 60% of its size and featuring state-of-the-art Razer™ Optical Switches. Portable and ideal for small desks, it's time to experience lightning-fast drive with our most compact design yet.",
    image_URL: "https://i.imgur.com/VLQOwrZ.png",
    price: 66,
    stock: 45,
  }
]);
