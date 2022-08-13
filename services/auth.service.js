const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthorizedError } = require("../errors/index");

const register = async (req, res, collection) => {
  const user = await collection.create({ ...req.body });

  return res.status(StatusCodes.OK).json({ user });
};

const login = async (req, res, collection) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("please provide email and password");
  }
  const user = await collection.findOne({ email });

  if (!user) {
    throw new UnauthorizedError("email is not registered");
  }

  const isPasswordCorrect = await user.matchPassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthorizedError("incorrect password");
  }

  const token = await user.createJWT();
  // .cookie("test", "this is the test cookie", { maxAge: 900000, httpOnly: true, domain: "http://localhost:3000" })

  return res.status(StatusCodes.OK).cookie("token", token, { sameSite: "none", secure: true, httpOnly: true }).send();

  // return res.status(StatusCodes.OK).cookie("test", "this is the test cookie", { maxAge: 900000, domain: "http://localhost:3000" }).json({ username: user.username, token });
};

module.exports = { login, register };
