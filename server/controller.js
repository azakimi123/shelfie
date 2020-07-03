module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send(err))
    },

    addProduct: (req, res) => {
        const {name, price, img} = req.body;
        const db = req.app.get('db');
    


        db.create_product({name, price, img})
        .then( () => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    }
}