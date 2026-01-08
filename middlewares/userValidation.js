const joi = require('joi');
const userSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
    phone: joi.string().pattern(/^[0-9]{10,15}$/).required()

});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);  
    if (error) {
    return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
module.exports = validateUser;
    


