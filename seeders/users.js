const { User } = require("../models");

User.create(
    {
      name: "Administrador",
      lastname: "GeekStore",
      email: "admin@gmail.com",
      password: "admin",
      admin: true,
    },
  );
  