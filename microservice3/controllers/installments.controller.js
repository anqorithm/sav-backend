const Installment = require('../models/Installments');
const axios = require('axios');

// Get all installments
exports.getAllInstallments = async (req, res) => {
  try {
    const installments = await Installment.find();
    const newInstallments = [];
    for (let i = 0; i < installments.length; i++) {
      const installment = installments[i];
      const product = await axios.get(`${process.env.MICRO1}/products/${installment.productId}`);
      const newInstallment = {
        _id: installment._id,
        productId: installment.productId,
        amount: installment.amount,
        dueDate: installment.dueDate,
        productName: product.data.data.name,
        user: installment.user,
        isPaid: installment.isPaid,
        createdAt: installment.createdAt,
      };
      newInstallments.push(newInstallment);
    }
    res.status(200).json(newInstallments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Get installment by ID
exports.getInstallmentById = async (req, res) => {
  try {
    const installment = await Installment.findById(req.params.id);
    if (!installment) {
      return res.status(404).json({ message: 'Installment not found' });
    }
    res.status(200).json(installment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new installment
exports.createInstallment = async (req, res) => {
  let months = req.body.numberOfMonths;
  let amount = req.body.price;
  let installmentAmount = amount / months;

  try {
    for (let i = 0; i < months; i++) {
      let installment = {
        user: req.body.user,
        amount: installmentAmount,
        dueDate: new Date().setMonth(new Date().getMonth() + i),
        isPaid: false,
        productId: req.body.productId
      }
      const newInstallment = new Installment(installment);
      await newInstallment.save();
    }

    res.status(201).json({ message: 'Installments created' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an installment
exports.updateInstallment = async (req, res) => {
  try {
    const updatedInstallment = await Installment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedInstallment) {
      return res.status(404).json({ message: 'Installment not found' });
    }
    res.status(200).json(updatedInstallment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an installment
exports.deleteInstallment = async (req, res) => {
  try {
    const deletedInstallment = await Installment.findByIdAndDelete(req.params.id);
    if (!deletedInstallment) {
      return res.status(404).json({ message: 'Installment not found' });
    }
    res.status(200).json({ message: 'Installment deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all installments for a specific user
exports.getUserInstallments = async (req, res) => {
  try {
    const userInstallments = await Installment.find({ 'user.phone': req.params.phone });
    res.status(200).json(userInstallments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mark installment paid or unpaid
exports.markInstallment = async (req, res) => {
  try {
    const updatedInstallment = await Installment.findByIdAndUpdate(
      req.params.id,
      { isPaid: req.body.paid },
      { new: true }
    );
    if (!updatedInstallment) {
      return res.status(404).json({ message: 'Installment not found' });
    }
    res.status(200).json(updatedInstallment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}