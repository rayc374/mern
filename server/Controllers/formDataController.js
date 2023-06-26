const FormData = require('../models/FormData');

//處理表單提交
const submitForm = (req, res) => {
  const formData = req.body;

  const newFormData = new FormData(formData);
  newFormData
    .save()
    .then(() => {
      res.status(200).json({ message: '表單提交成功' });
    })
    .catch((error) => {
      res.status(500).json({ message: '表單提交失敗', error });
    });
};

module.exports = { submitForm };
