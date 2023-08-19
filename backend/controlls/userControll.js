import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//////////////////////////////////////////////////////////////////////// importing from file
import UserModel from "../model/UserModel.js";

const salt = await bcrypt.genSalt(10);
const maxAge = 172800;

const createToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.TOKEN_KEY, { expiresIn: maxAge });
};

// @login
// @/user/login
// @post req
////////////////////////////////////////////////////////////////////////
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "all fields are required" });
  }
  try {
    const user = await UserModel.findOne({ email })
    if (!user) {
      return res
        .status(404)
        .json({
          message: "user not found please sign up or check your email once",
        });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const token = createToken(user._id, user.email);
    res.cookie("token", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({email : user.email , name : user.name});
  } catch (error) {
    console.log(error);
  }
};

// @sign up
// @/user/signup
// @post req
////////////////////////////////////////////////////////////////////////
const signup = async (req, res) => {
  let { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "all fields are required" });
  }
  if(name.length < 4){
    res.status(400).json({message : "Minimum name length is 4"})
  }
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already registered" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: `please enter valid email` });
    }
    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ message: `password is not strong enough` });
    }
    const hashedPassword = await bcrypt.hash(password, salt);
    password = hashedPassword;

    const registerUser = await UserModel.create({
      name,
      email,
      password,
    });
    res.status(201).json({ registerUser });
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////////////////////////////////////////////

const logout = (req, res) => {
  let { cookie } = req.headers;
  res.cookie("token", "hello", { httpOnly: true, maxAge: 1 });
  res.status(200).json({message : 'cookie expired'})
};

export { signup, login, logout };
