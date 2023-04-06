const User = require('../models/userModel');
const bcrypt = require('bcryptjs')
const {generateToken} = require('../middlewares/index')

const getUsers = async(req, res) => {
    let response = await User.find({});
    if (response) {
        res.send(response);
    } else {
        res.send("error")
    }
}

const createUser = async(req, res) => {
    const user = await User.findOne({email: req.body.email});
  if(user){
    res.status(400).send({msg: "user already registered"})
  }else{
    const newUser = new User({

      password: bcrypt.hashSync(req.body.password, 8),
      email: req.body.email
    })

    const createdUser = await newUser.save();
        res.status(200).send({
            _id : createdUser._id,
            
            email: createdUser.email
        });
  }
}

const signinUser = async(req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(!user){
      res.status(400).send({msg: "user not already registered"})
    }else{
      if(bcrypt.compareSync(req.body.password, user.password)){
        res.send({
            _id : user._id,
            
            email: user.email,
            token: generateToken(user)
        });
        
    } else{
        res.status(400).send({msg: "wrong password"})
    }
    }
}

const logOutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.clearCookie('session_id');
      res.status(200).json({ message: 'Logged out successfully' });
    }
  });
};

module.exports = {getUsers, createUser, signinUser,logOutUser};