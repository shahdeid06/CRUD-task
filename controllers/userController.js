let users = [];
let userId = 1;


const registerUser = (req, res) => {
    try {
  const { email, password, username, phone } = req.body;
  const user = { id: userId++,
     email,
      password,
    username,
phone,
// avatar: req.file ?.filename || null
};
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
  }
    users.push(user);
    res.status(201).json({ message: 'User registered successfully', user });
} catch (error) {
    res.status(500).json({ error: error.message });
}
};

const loginUser = (req, res) => {
    try {
  const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
} catch (error) {
    res.status(500).json({ error: error.message });
}   
};

const getAllUsers = (req, res) => {
    try {
    res.status(200).json({ message: "Users List", data: { users } });
} catch (error) {
    res.status(500).json({ error: error.message });
}
};

const getUserById = (req, res) => {
    try {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: "User Details", data: { user } });
} catch (error) {
    res.status(500).json({ error: error.message });
}
};

const updateUser = (req, res) => {
    try {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    const { email, password, phone ,username} = req.body;
    // users[userIndex] = { ...users[userIndex], email, password, phone, username };
    if (email) users[userIndex].email = email;
    if (password) users[userIndex].password = password;
    if (phone) users[userIndex].phone = phone;
    if (username) users[userIndex].username = username;
    res.status(200).json({ message: 'User updated successfully', user: users[userIndex] });
} catch (error) {
    res.status(500).json({ error: error.message });
}
};

const deleteUser = (req, res) => {
    try {
    const id = parseInt(req.params.id); 
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.status(200).json({ message: 'User deleted successfully' });
} catch (error) {
    res.status(500).json({ error: error.message });
}
};

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};

