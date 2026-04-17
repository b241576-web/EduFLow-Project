const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.get('/', async (req, res) => {
    try {
        let query = {};
        
        // Filter Logic
        if (req.query.stream) query.stream = req.query.stream;
        if (req.query.semester) query.semester = req.query.semester;
        if (req.query.panic === 'true') query.isPanicMode = true;
        
        // Search Logic (Fuzzy Regex Search)
        if (req.query.search) {
            query.$or = [
                { title: { $regex: req.query.search, $options: 'i' } },
                { provider: { $regex: req.query.search, $options: 'i' } }
            ];
        }

        const courses = await Course.find(query);
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;