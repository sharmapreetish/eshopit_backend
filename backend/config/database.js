const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect('mongodb+srv://preet123:preet123@cluster0.3tug3ya.mongodb.net/mernstack?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase