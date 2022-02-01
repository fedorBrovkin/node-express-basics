import {addMeadowlarkResource} from "./ts/express/resource/MeadowlarkResource";

const port = process.env.PORT || 3000;
const express = require('express');

const app = express();

console.log(app.constructor.name);
addMeadowlarkResource(app);

app.listen(port, ()=> console.log(
        'Express is running...'+
        `http://localohost:${port}`+
        ' press Ctrl + C for terminate it...'
    )
)