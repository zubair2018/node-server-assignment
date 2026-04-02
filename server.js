const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  if (req.url === '/style.css') {
    fs.readFile(path.join(__dirname, 'public', 'style.css'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading css');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
      }
    });

  } else if (req.url === '/' || req.url === '/home') {

    // home page
    fs.readFile(path.join(__dirname, 'pages', 'home.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Home page error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });

  } else if (req.url === '/about') {

    // about page
    fs.readFile(path.join(__dirname, 'pages', 'about.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('About page error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });

  } else if (req.url === '/contact') {
    // contact page
    fs.readFile(path.join(__dirname, 'pages', 'contact.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Contact page error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });

  } else if (req.url === '/services') {

    // extra route
    fs.readFile(path.join(__dirname, 'pages', 'services.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Services page error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });

  } else {
    
    // 404 page
    fs.readFile(path.join(__dirname, 'pages', '404.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('404 page error');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
