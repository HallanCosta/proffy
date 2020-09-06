import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

interface JWTDecoded {
  id: number;
}

export default class Authenticate {
  async auth(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;
    
    if (!authorization) {
      return response.status(401).json({ message: "No token provided" });
    }

    try {
      const { id } = await promisify(jwt.verify)(authorization, "secret") as JWTDecoded;
      
      request.body.id = id;

      return next();
    } catch (err) {
      return response.status(401).json({ message: "Token invalid" });
    } 
  }
}