import { config } from 'dotenv';
import JWT from 'jsonwebtoken';
import db from '../models';

config();

const secret = process.env.SECRET;
/* eslint-disable */
export const verifyToken = async (req, res, next) => {
  const tokenBearer = req.headers.authorization;
  if (!tokenBearer) {
    return res
      .status(401)
      .jsend.fail({ message: 'Client key is required' });
  }
  const token = tokenBearer.split(' ')[1];
  try {
    JWT.verify(token, secret, async (error, decoded) => {
      if (error) {
        return res.status(403).jsend.fail({ message: 'Proccess Failed, Access Denied' });
      }
      const user = await db.Users.findOne({ _id: decoded._id });
      if (!user) {
        return res
          .status(401)
          .jsend.fail({ message: 'Process Ended, User not found' });
      }
      req.decoded = user;
      next();
    });
  } catch (error) {
    return res.status(401).jsend.fail({ message: error.message });
  }
};
