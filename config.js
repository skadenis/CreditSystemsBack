"use strict";

module.exports = {
  database: {
    user: "postgres",
    host: "178.172.235.222",
    database: "creditsystem",
    password: "Tutanu2211",
    port: 5432,
    max: 3,
  },
  jwt: {
    secretKey: "ILI3FpV5s$B2JnHqNqVYWg1OHN5~SbUj",
    algorithm: "HS256",
    expires: 2880, //in minutes(two days)
    schema: "",
  },
};
