import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routeExample from "./routes/route-example";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req: Request, res: Response) {
  res.status(200).send("Hello World!");
});

app.use("/route-example", routeExample);

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});
