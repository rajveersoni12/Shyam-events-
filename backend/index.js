const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.use(cors());
app.use(express.json());

// Bookings
app.post('/api/bookings', async (req, res) => {
  const { clientName, email, phone, eventType, eventDate, guestCount, venue, budget, notes } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO bookings (client_name, email, phone, event_type, event_date, guest_count, venue, budget, notes, status)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,'pending') RETURNING *`,
      [clientName, email, phone, eventType, eventDate, guestCount, venue, budget, notes]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

app.get('/api/bookings', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bookings ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// Contact
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO contacts (name, email, phone, subject, message) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [name, email, phone, subject, message]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));