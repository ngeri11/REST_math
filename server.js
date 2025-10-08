const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

//POST a végpont a klienstől érkező adatok fogadására.
app.post('/api/math', (req, res) =>{
    //A klienstől érkező adatok elérése változókban
    const {num1, num2, operator} =req.body; // Objektum description

    //Backend oldali validáció - Ellenőrizzük, hogy mind a két szám létezik és szám típúsú
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return res.status(400).json ({error: 'Hiányzó, vagy érvénytelen számok'});
    }

    //Számolási logika
    let result;
    if(operator == "add" ){
        result = num1 + num2;

    }
    else if (operator == "subtract"){
        result = num1 -num2;
    }
    else{
        return res.status(400).json ({message:'Érvénytelen művelet'});
    }
    res.status(200).json({message: 'A kiszámolt eredmény:' ,result});
})

app.listen(port, () =>{
    console.log(`A webszerver fut a http://localhost:${port} webcímen`);
});