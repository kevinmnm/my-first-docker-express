const path = require('path');
const express = require('express');
const router = express.Router();
const cors = require('cors');

const corsOption = {
   origin: (origin, callback) => {
      callback(null, true);
   }
}

router.get('/', cors(corsOption), (req, res) => {
   res.status(200).json({ success: true });
});