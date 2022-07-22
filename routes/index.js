const router = require('express').Router();
const fs = require('fs');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');



// GET route for projects

router.get('/projects', (req, res) => {
    console.log('request for projects');

    readFromFile('./db/projects.json').then((data) => res.json(JSON.parse(data)))  
})


// POST route for new projects

router.post('/projects', (req, res) => {
    const { title, details, yarn } = req.body;

    if (title && details && yarn ) {
        
        const newProject = {
            title,
            details,
            yarn,
            project_id: uuid()
        }

        readAndAppend(newProject, './db/projects.json')

        const response = {
            status: 'success',
            body: newProject
        }

        res.json(response)
    } else {
        console.log(error)
    }
})


module.exports = router;