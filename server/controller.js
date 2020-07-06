module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send(err))
    },

    getOne: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');

        db.get_one({id})
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))

    },

    addProduct: (req, res) => {
        const {name, price, img} = req.body;
        const db = req.app.get('db');
    


        db.create_product({name, price, img})
        .then( () => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    },

    deleteProduct: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');
        console.log(id)

        db.delete_product({id})
        .then( () => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    },

    editProduct: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');
        const {name, price, img} = req.body;
        // console.log(id)
        // console.log(img)

        db.edit_product({id, name, price, img})
        .then( () => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
        
    }
}