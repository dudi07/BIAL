import express from 'express'
const router = express.Router()
import fetch from 'node-fetch';


router.get('/', (req,res) =>{
  console.log(req.query)
  const dep_iata = req.query.dep_iata
  const arr_iata = req.query.arr_iata
  const date = req.query.flight_date
  const YOUR_ACCESS_KEY = 'e2d63ff1e35ade9a141da03ca7b371e8'
  var url = `http://api.aviationstack.com/v1/flights?access_key=${YOUR_ACCESS_KEY}&dep_iata=${req.query.dep_iata}&arr_iata=${req.query.arr_iata}&flight_date=${req.query.flight_date}`
  console.log(dep_iata , arr_iata ,date)
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        res.send( data);
    })
    .catch(err => {
        res.send(err);
    });
})

export default router