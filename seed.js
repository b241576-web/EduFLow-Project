const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');
dotenv.config();

const dummyData = [
    // B.Tech / Engineering
    { title: "Operating Systems Revision", provider: "GateSmashers (YT)", type: "free", stream: "B.Tech", semester: "4", link: "https://youtube.com", isPanicMode: true },
    { title: "Data Structures & Algorithms", provider: "Physics Wallah", type: "paid", stream: "B.Tech", semester: "3", price: 4000, discountPrice: 1500, link: "https://pw.live", isPanicMode: false },
    { title: "Computer Networks Marathon", provider: "Knowledge Gate", type: "free", stream: "B.Tech", semester: "5", link: "https://youtube.com", isPanicMode: true },
    
    // Medical / NEET
    { title: "NEET Biology One-Shot", provider: "Unacademy", type: "paid", stream: "Medical", price: 2000, discountPrice: 799, link: "https://unacademy.com", isPanicMode: true },
    { title: "Physics Revision for NEET", provider: "Competition Wallah (YT)", type: "free", stream: "Medical", link: "https://youtube.com", isPanicMode: true },
    
    // UPSC & Competitive
    { title: "UPSC GS Foundation 2025", provider: "Unacademy", type: "paid", stream: "UPSC", price: 50000, discountPrice: 19000, link: "https://unacademy.com", isPanicMode: false },
    { title: "Indian Polity Masterclass", provider: "StudyIQ (YT)", type: "free", stream: "UPSC", link: "https://youtube.com", isPanicMode: true },
    
    // School Boards
    { title: "Class 12 Maths Board Prep", provider: "PW Foundation", type: "paid", stream: "Boards", price: 1500, discountPrice: 499, link: "https://pw.live", isPanicMode: false },
    { title: "Class 10 Science Revision", provider: "Learnohub (YT)", type: "free", stream: "Boards", link: "https://youtube.com", isPanicMode: true },

    // Commerce / CA
    { title: "CA Foundation: Accounts", provider: "Adda247", type: "paid", stream: "Commerce", price: 5000, discountPrice: 2100, link: "https://adda247.com", isPanicMode: false }
];

async function seedDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB for Seeding...");
        
        await Course.deleteMany(); // Clears old data
        await Course.insertMany(dummyData);
        
        console.log("✅ Database expanded with diverse courses!");
        process.exit();
    } catch (err) {
        console.error("Seeding error:", err);
        process.exit(1);
    }
}

seedDB();