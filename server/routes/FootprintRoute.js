const { postData, getData } = require('../controllers/FootprintController');
const router = require('express').Router();

router.post('/postData', postData);
router.get('/getData/:mon', getData);

module.exports = router;
