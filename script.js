  const api = "";
  const listId = "aca79236c9";

  const express = require("express");
  const bodyParser = require("body-parser");
  const app = express();
  const https = require("https");
  const path = require("path");

  // Middleware to parse incoming request bodies
  app.use(bodyParser.urlencoded({ extended: true }));

  // Serve static files from the 'static' directory
  app.use(express.static(path.join(__dirname, "static")));

  // Handle GET requests for the root URL
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  // Handle POST requests for the root URL
  app.post("/", (req, res) => {
    // Extracting data from the form submission
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;

    // Data to be sent to the Mailchimp API
    const data = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstname,
        LNAME: lastname,
      },
    };

    const JSONDATA = JSON.stringify(data);

    // Mailchimp API endpoint URL
    const url = `https://us9.api.mailchimp.com/3.0/lists/${listId}/members`;


    // Options for the HTTP request to Mailchimp API
    const options = {
      method: "POST",
      auth: "umairniazi:bbfe2c46f884fc925b3777e2af9f8540-us9",
    };

    // Send the request to Mailchimp API
    const request = https.request(url, options, function (response) {
      let responseData = "";

      // Accumulate data from the response
      response.on("data", function (chunk) {
        responseData += chunk;
      });

      // When the response is complete
      response.on("end", function () {
        // Log the response data (parsed JSON) to the console
        console.log(JSON.parse(responseData));

        // Send a response to the client indicating successful subscription
        res.send("Subscription successful!");
      });
    });

    // Write the JSON data to the request
    request.write(JSONDATA);
    // End the request
    request.end();
  });

  // Start the server on port 3000
  app.listen(3000, () => {
    console.log("App Port Listening to http://localhost:3000/");
  });
