const Cakes = require('./models')
const Rate = require('./models')

const controllers ={
    createCake: (req, res) => {
        Cakes.create(req.body)
            .then(data=> res.json ({info: data, msg:'success'}))
            .catch(err=> res.json({info: err, msg: 'ERROR!'}))
    },

    oneCake: (req, res) =>{
        Cakes.findById(req.params.id)
        .then(data=> res.json ({info: data, msg:'success'}))
        .catch(err=> res.json({info: err, msg: 'ERROR!'}))
    },

    deleteCake: (req, res) =>{ console.log("hit the delete route")
        Cakes.remove({_id: req.params.id})
        .then(data=> res.json ({info: data, msg:'deleted!'}))
        .catch(err=> res.json({info: err, msg: 'ERROR!'}))
        },
    
    updateCake: (req, res) =>{ console.log("hit the update route")
        Cakes.update({_id: req.params.id})
        .then(data=> res.json ({info: data, msg:'deleted!'}))
        .catch(err=> res.json({info: err, msg: 'ERROR!'}))
        },

    allCakes: (req, res) =>{
        Cakes.find()
            .then(data=> res.json ({info: data, msg:'success'}))
            .catch(err=> res.json({info: err, msg: 'ERROR!'}))
    },

    postRate: (req, res) => {
        Rate.create(req.body, (err, rating) => {
            if (err) {
                let data = {}
                for (let key in err.errors) {
                    data[key] = err.errors[key].message;
                }
                res.json({ status: "Error", message: data });
            } else {
                Cake.findByIdAndUpdate({ _id: req.params.cakeID }, { $push: { ratings: rating } }, (err) => {
                    if (err) {
                        res.json({ status: "Error", message: err });
                    } else {
                        res.json({ status: "Rating successfully added!" });
                    }
                })
            }
        });


}


}
module.exports = controllers

