const express = require('express');
const app = express();
// const port = 3000;
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', require('./routes/userRoute'));
app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

