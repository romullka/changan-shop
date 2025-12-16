const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');
const auth = require('../middlewares/authMiddleware');
const admin = require('../middlewares/adminMiddleware');

router.post('/', auth, admin, productController.create);
router.get('/', productController.getAll);

module.exports = router;
