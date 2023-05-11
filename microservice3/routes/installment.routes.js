const express = require('express');
const router = express.Router();
const installmentController = require('../controllers/installments.controller');

router.get('/', installmentController.getAllInstallments);
router.get('/:id', installmentController.getInstallmentById);
router.post('/', installmentController.createInstallment);
router.put('/:id', installmentController.updateInstallment);
router.delete('/:id', installmentController.deleteInstallment);
router.get('/user/:phone', installmentController.getUserInstallments);
router.put('/updatePayment/:id', installmentController.markInstallment);


module.exports = router;