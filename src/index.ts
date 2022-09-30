import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./config";
import routeExample from "./routes/route-example";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req: Request, res: Response) {
  res.status(200).send("Hello World!");
});

app.use("/route-example", routeExample);

app.listen(config.PORT, () => {
  console.log(`Application is running on port ${config.PORT}.`);
});
