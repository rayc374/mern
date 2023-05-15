const router = require('express').Router();
const Event = require('../models/Event');

router.post({
  path: '/create-event',
  handlers: async (req, res) => {
    const event = Event(req.body);
    await event.save();
    res.sendStatus({ code: 201 });
  },
});
router.get({
  path: '/get-events',
  handlers: async (req, res) => {
    const events = await Event.find({ start: {} });
  },
});
