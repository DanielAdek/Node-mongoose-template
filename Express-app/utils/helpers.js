import JWT from 'jsonwebtoken';
import { config } from 'dotenv';

config();

const secret = process.env.SECRET;

export const tokenGenerator = async (payload, expiresIn) => {
  try {
    const token = await JWT.sign(payload, secret, { expiresIn });
    return { success: true, token: `Bearer ${token}` };
  } catch (error) {
    return { success: false, error: error.mssage };
  }
};

export const emailSender = () => {
  // YOUR EMAIL SENDER CODE
};
