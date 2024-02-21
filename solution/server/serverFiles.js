const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5050;
app.use(express.json());
app.use(cors());
//ENDPOINTS GO BELOW
const inventory = ['Apple', 'Cat', 'Dog', 'Google', 'Car', 'Backpack', 'TV', 'Hello'];
console.log('Brandon');
app.get("/api/inventory", (req, res) => {
    console.log(req.query)
    if (req.query.item) {
        let { item } = req.query;
        item = item.toLowerCase();
        const index = inventory.findIndex((e) => e.toLowerCase() === item);
        res.status(200).send([inventory[index]]);
    } else {
    res.status(200).send(inventory);
    }
});

app.get("/api/inventory/:index", (req, res) => {
    console.log(req.params.index);
    let { index } = req.params;
    res.status(200).send(inventory[index]);
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
