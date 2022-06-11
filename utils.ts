
import jwt from "jsonwebtoken"


const secret = process.env.JWT_SECRET as string;

const generateToken = (id: string) => {
  return jwt.sign({ id }, secret, { expiresIn: '30d' });
};