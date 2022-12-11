const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

app.use(cors({
     origin: "*",
     credentials: true,
}
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api", (req,res)=>{
    const bodys = req.body;
    console.log(bodys);


let data = {
    "token": bodys.token,
    "amount": bodys.amount
};

let config = {
    headers: {'Authorization': 'Key test_secret_key_4caee9e36c66484497c2d3b53e9675d4'}
};

axios.post("https://khalti.com/api/v2/payment/verify/", data, config)
    .then(response => {
        console.log(response.data);
        console.log("sucessful transaction");
    })
    .catch(error => {
        console.log(error);
    });

})
 

app.listen(3001);