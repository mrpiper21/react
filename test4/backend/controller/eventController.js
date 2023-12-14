const Event = require('../model/eventModel')
const dayjs = require('dayjs')

const allEvent = async(req, res) => {
    try {
        const events = await Event.find()
        res.json(events)
    } catch (err) {
        throw new Error(err)
    }
}

const addEvent = async(req, res) => {
    const { text, date } = req.body;
    // if (!event) throw new Error('Required')

    try {
        const newEvent = await Event.create({ text: text, date: dayjs(date, "YYYY-MM-DD").format("MM-DD-YYYY") })
        res.json(newEvent)
    } catch (err) {
        throw new Error(err)
    }
}

const singleEvent = async(req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findById({ _id: id })
        if(!event) throw new Error('Event not found')
        res.json(event)
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    allEvent,
    singleEvent,
    addEvent
}