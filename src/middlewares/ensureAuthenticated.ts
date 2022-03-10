import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IFPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  // Receive token

  const authHeaderToken = request.headers.authorization;

  // Validate filled is token

  if (!authHeaderToken) {
    return response.status(401).end();
  }

  const [bearer, token] = authHeaderToken.split(" ");

  // Validate token

  try {
    const { sub } = verify(token, process.env.AUTH_SECRET) as IFPayload;

    request.user_id = sub;

    return next();

  } catch (err) {
    return response.status(401).json({
      message: "Is Token not valid."
    });
  }
}