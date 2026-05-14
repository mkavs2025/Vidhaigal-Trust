const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

const projects = [
  {
    name: "City Forest Alpha",
    status: "Active",
    progress: 65,
    startDate: "Jan 2026",
    targetDate: "Dec 2026",
    lead: "Ramesh K.",
    desc: "Creating a dense micro-forest in the heart of the city."
  },
  {
    name: "Village Solar Setup",
    status: "Planning",
    progress: 10,
    startDate: "Jun 2026",
    targetDate: "Mar 2027",
    lead: "Priya M.",
    desc: "Installing solar panels for 50 homes in rural areas."
  },
  {
    name: "Lake Restoration Phase 1",
    status: "Completed",
    progress: 100,
    startDate: "Jan 2025",
    targetDate: "Dec 2025",
    lead: "Suresh S.",
    desc: "Cleaned and restored the local lake, planting native flora."
  },
  {
    name: "Digital Literacy Drive",
    status: "Active",
    progress: 40,
    startDate: "Feb 2026",
    targetDate: "Aug 2026",
    lead: "Anita R.",
    desc: "Teaching basic computer skills to senior citizens."
  },
  {
    name: "Women Empowerment Workshop",
    status: "Active",
    progress: 55,
    startDate: "Mar 2026",
    targetDate: "Sep 2026",
    lead: "Kavitha D.",
    desc: "Vocational training for women to start micro-businesses."
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    await Project.deleteMany();
    console.log('Cleared existing projects...');

    await Project.insertMany(projects);
    console.log('Projects seeded successfully!');

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
