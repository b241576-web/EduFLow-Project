const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');
dotenv.config();

const dummyData = [
    // Engineering
    { title: "Operating Systems Revision", provider: "GateSmashers (YT)", type: "free", stream: "B.Tech", semester: "4", link: "https://youtube.com", isPanicMode: true },
    { title: "Data Structures Mastery", provider: "Physics Wallah", type: "paid", stream: "B.Tech", semester: "3", price: 4000, discountPrice: 1500, link: "#", isPanicMode: false },
    { title: "Database Systems Marathon", provider: "Knowledge Gate", type: "free", stream: "B.Tech", semester: "4", link: "#", isPanicMode: true },
    
    // Medical
    { title: "NEET Biology One-Shot", provider: "Unacademy", type: "paid", stream: "Medical", price: 2000, discountPrice: 799, link: "#", isPanicMode: true },
    { title: "Organic Chemistry NEET", provider: "Competition Wallah", type: "free", stream: "Medical", link: "#", isPanicMode: true },
    
    // UPSC & Competitive
    { title: "UPSC GS Foundation 2025", provider: "Unacademy", type: "paid", stream: "UPSC", price: 50000, discountPrice: 19000, link: "#", isPanicMode: false },
    { title: "Indian Polity Revision", provider: "StudyIQ", type: "free", stream: "UPSC", link: "#", isPanicMode: true },
    
    // Boards
    { title: "Class 12 Physics Revision", provider: "Learnohub", type: "free", stream: "Boards", link: "#", isPanicMode: true },
    { title: "Class 10 Math Full Course", provider: "Adda247", type: "paid", stream: "Boards", price: 2000, discountPrice: 499, link: "#", isPanicMode: false },

    // Certifications
    { title: "NPTEL: Data Mining One Shot", provider: "NPTEL Curated", type: "free", stream: "B.Tech", link: "#", isPanicMode: true }
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
    await Course.deleteMany();
    await Course.insertMany(dummyData);
    console.log("✅ Database expanded and Search Ready!");
    process.exit();
});