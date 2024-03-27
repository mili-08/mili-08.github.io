let express = require('express');
let app = express();
let PORT = 3030;


app.use(express.static('public'));


app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/views/index.html')
});

app.listen(PORT,()=>{
    console.log(`Server runnig on port ${PORT}`);
});

