const express = require('express');
const app = express();
const port = 4000;

app.use(express.urlencoded({extended: true}));

//  set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//  use express router
app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is running on port : ${port}`);
});