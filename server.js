const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

// This function reads a file and sends it to the browser.

function sendFile(filePath, contentType, statusCode, res) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      // If something goes wrong while reading the file, send 500 error.
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 - Internal Server Error");
      return;
    }

    res.writeHead(statusCode, { "Content-Type": contentType });
    res.end(data);
  });
}


const server = http.createServer((req, res) => {
  const url = req.url;

  // This route serves the CSS file.

  if (url === "/style.css") {
    const cssPath = path.join(__dirname, "public", "style.css");
    sendFile(cssPath, "text/css", 200, res);
  }
  // Home page route

  else if (url === "/" || url === "/home") {
    const homePath = path.join(__dirname, "pages", "home.html");
    sendFile(homePath, "text/html", 200, res);
  }
  // About page route

  else if (url === "/about") {
    const aboutPath = path.join(__dirname, "pages", "about.html");
    sendFile(aboutPath, "text/html", 200, res);
  }
  // Contact page route

  else if (url === "/contact") {
    const contactPath = path.join(__dirname, "pages", "contact.html");
    sendFile(contactPath, "text/html", 200, res);
  }
  // Extra route to show that more pages can also be added

  else if (url === "/services") {
    const servicesPath = path.join(__dirname, "pages", "services.html");
    sendFile(servicesPath, "text/html", 200, res);
  }
  // If route does not match, show custom 404 page
  
  else {
    const errorPath = path.join(__dirname, "pages", "404.html");
    sendFile(errorPath, "text/html", 404, res);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
