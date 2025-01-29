// app.js
const express = require('express');
const path = require('path');

const app = express();

// Setze den Port
const PORT = process.env.PORT || 3000;

// Verwende statische Dateien wie CSS, JS und Bilder
app.use(express.static(path.join(__dirname, 'public')));

// Routen definieren
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/leistungen', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'leistungen.html'));
});

app.get('/impressum', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'impressum.html'));
});

app.get('/kontakt', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'kontakt.html'));
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
