import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const corsOptions = {
  origin: "http://localhost:4200",
};
import hospitalController from "./controllers/hospital.controller.js";

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/patients", hospitalController);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}.`);
});
