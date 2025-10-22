import express from 'express';
import cors from 'cors';

//initializing express
const server = express();

server.use(cors())
server.use(express.json());


server.get('/api/blog', (req, res) => {
    res.json ({
        fullName: "Johnson Manaseh",
        Role: "Software Developer",
        Category: "Male",
        Description: "Tall fair man from Abagana"
    })
})

server.get('/api/blog2', (req, res) => {
    res.json ({
        fullName: "Sophia Yu",
        Role: "Web Developer",
        Category: "Female",
        Description: "One of a kind eyes"
    })
})

server.get('/api/blog3', (req, res) => {
    res.json ({
        fullName: "Tony Stark",
        Role: "Team Lead",
        Category: "Male",
        Description: "Rich Billonaire"
    })
})

server.get('/api/blog4', (req, res) => {
    res.json ({
        fullName: "Marcus Swerve",
        Role: "Frontend Engineer",
        Category: "Male",
        Description: "Sternman"
    })
})

server.get('/api/blog5', (req, res) => {
    res.json ({
        fullName: "Peter Packer",
        Role: "Data Analyst",
        Category: "Male",
        Description: "Spider-man"
    })
})

server.get('/api/blog6', (req, res) => {
    res.json ({
        fullName: "Kara Danverse",
        Role: "Reporter",
        Category: "Female",
        Description: "Super-woman"
    })
})

server.post('/api/blog', (req, res) => {
    res.json ({
        fullName: "Nnamani Adaeze",
        Role: "Frontend Developer",
        Category: "Female",
        Description: "Very Dangerous lady from Abagana"
    })
})

//listen to the endpoint
server.listen('4000', () => {
    console.log("server is up")
})