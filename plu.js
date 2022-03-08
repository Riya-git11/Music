const Express = require("express");
const host = "localhost";
const port = 8081;
const server = Express.Server({
  host: host,
  port: port,
});
require("./routes/routes")(server);
const init = async () => {
  await server.start();
  console.log("Server up!!" + port);
};
init();
