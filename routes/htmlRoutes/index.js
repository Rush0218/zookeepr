const path = require('path');
const router = require('express').Router();


//sereves index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//serves animals.html
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, './public/animals.html'));
});

//serves zookeepr.html
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, './public/zookeepers.html'));
});

//* acts as a wildcard meaning any route that is not defined will fall 
//  under this request and receive the homepage in response. 
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


module.exports = router;