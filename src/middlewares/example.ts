import { Request, Response, NextFunction } from "express";
import logger from "../logger";

const exampleMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    logger.info("Logging the middleware");
    next();
  } catch (err: any) {
    logger.error(err.message);
    res.status(400).send({ message: err.message });
  }
};

export default exampleMiddleware;
