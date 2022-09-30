import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("getting route-example");
});

router.post("/", (req: Request, res: Response) => {
  console.log("body", req.body);
  console.log("query", req.query);
  console.log("params", req.params);
  res.status(200).send("posting route-example");
});

export default router;
