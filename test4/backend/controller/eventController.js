const Event = require('../model/eventModel');
const dayjs = require('dayjs');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "_" + Date.now() + ext);
  }
});

const upload = multer({
  storage: storage
});


const getAllEvent = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addEvent = async (req, res) => {
  const { title, text, date } = req.body;

  try {
    const newEvent = new Event({
      title: title,
      text: text,
      date: dayjs(date, "YYYY-MM-DD").format("MM-DD-YYYY"),
      image: req.file ? req.file.filename : null
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllEvent,
  upload,
  addEvent
};

// const singleEvent = async(req, res) => {
//     const { id } = req.params;
//     try {
//         const event = await Event.findById({ _id: id })
//         if(!event) throw new Error('Event not found')
//         res.json(event)
//     } catch (err) {
//         throw new Error(err)
//     }
// }
