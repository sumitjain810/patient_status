import express from "express";
const router = express.Router();
import stateMedicineEffect from "../constants/constants.js";

router.get("/checkState", async (req, res) => {
  try {
    console.log("checkState... req.query: ", req.query);
    console.log("stateMedicineEffect: ", stateMedicineEffect);

    const request = req.query;
    const result = {
      F: 0,
      H: 0,
      D: 0,
      T: 0,
      X: 0,
    };

    request.health_status_codes.forEach(status_code => {
      request.drugs_codes.forEach(drug_code => {
        stateMedicineEffect.forEach(element => {
          if(status_code == element.healthState){

            let flag = 0;
            element.med.forEach(m => {
              if(drug_code == m){
                flag++;
              }
              else{
                flag--;
              }
            });

            if(flag){
              result[element.effect]++;
            }

          }
        });
      });
    });

    res.status(200).send({ status: 200, result: result });
  } catch (err) {
    res.status(500).send(err);
  }
});
export default router;
