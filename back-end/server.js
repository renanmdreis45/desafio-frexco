const express = require('express');
const router = express.Router();
const cors = require('cors');
const axios = require('axios');
const api = require('./api'); 

router.use(cors());



router.get("/api/fruit/:id", (req, res) => {
     const {id} = req.params;
  const getFrutas = async() => {
    try {
      const response = await api.get(`api/fruit/${id}`);
      res.json(response.data);

    } catch(error) {
       return res.send({error: error.message})
    }
  };
  getFrutas();
})

const app = express();
app.use(express.json());
app.use('/',router);
app.listen(8000);