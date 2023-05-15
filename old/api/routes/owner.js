const express = require('express')
const DatabaseHandler = require('../Database')
const router = express.Router();

router.get('/', (req, res) => { 
    const Database = new DatabaseHandler(`${process.cwd()}/src/api/database/owner.json`)
    res.end(Database.data.username)
})

router.post('/', (req, res) => {
    const Database = new DatabaseHandler(`${process.cwd()}/src/api/database/owner.json`)

    try {
        Database.write(Database.data.username = req.body.username)
        res.end('Owner username changed successfully!')
    } catch(error) {
        res.end(`An error occurred!\n${error}`)
    }
})

module.exports = router;