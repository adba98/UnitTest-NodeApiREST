const { Router } = require('express');

const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        name: 'adba',
        website: 'adba98.com'
    };
    res.json(data);
});  

module.exports = router;