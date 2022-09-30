import { Router, Request, Response } from "express";
import exampleMiddleware from "../middlewares/example";
import exampleController from "../controllers/example";
import logger from "../logger";

const router = Router();

router.get("/", exampleGet);
router.post("/", exampleMiddleware, examplePost);

async function examplePost(req: Request, res: Response) {
  try {
    const { exampleField } = req.body;
    const response = await exampleController.exampleMethod(exampleField);
    res.status(201).send(response);
  } catch (err: any) {
    logger.error(err.message);
    res.status(500).send({ message: err.message });
  }
}

async function exampleGet(req: Request, res: Response) {
  try {
    const response = await exampleController.exampleGet();
    res.status(200).send(response);
  } catch (err: any) {
    logger.error(err.message);
    res.status(500).send({ message: err.message });
  }
}

export default router;
