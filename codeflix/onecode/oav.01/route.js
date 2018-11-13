var appRouter = function (app) {
  // each get request to the root of our app we will print welcome
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });
}

module.exports = appRouter;
