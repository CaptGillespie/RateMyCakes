const controller = require('./controller');

module.exports = function (app){
    app.get('/api/cake', controller.allCakes)
    app.post('/api/cake', controller.createCake)
    app.get('/api/cake/:id', controller.oneCake)
    app.delete('/api/cake/:id', controller.deleteCake)
    
    app.post('/api/cake/:id', controller.postRate)

}

