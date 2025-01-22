const mongoose = require("mongoose")

mongoose.connect(process.env.url)
    .then(() => {
        console.log("Succes connected");
    })
    .catch((err) => console.log(err))   