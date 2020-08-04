const router = require('express').Router();
const home = require('../controllers/home')


router.get('/', (req, res, next) => {
    let data = "heloossss"
    console.log(data);
    res.send(data);
});

router.get('/getProducts', (req, res, next) => {
    let houseType = 3, location = 0;
    let data = home.getProducts(houseType, location);
    res.json(data);
});


router.get('/getHouseType', (req, res, next) => {
    let data = home.getHouseTypeList();
    res.json(data);
});


router.get('/getLocation', (req, res, next) => {
    let data = home.getLocationList();
    res.json(data);
});


module.exports = router;
