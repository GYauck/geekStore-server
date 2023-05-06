const { Brand } = require("../models");

Brand.bulkCreate([
    {
      name: "Logitech",
      logo_URL: "https://i.imgur.com/CI4MjDF.png",
    },
    {
      name: "Razer",
      logo_URL: "https://i.imgur.com/J08GvNe.png",
    },
  ]);