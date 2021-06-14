import Express, { response, urlencoded } from "express";


const app = Express();
const port = 3000;

app.use(Express.json());


app.post("/test", (req,res) => {
    var string_to_manipulate = req.body.string_to_cut;
    var index = 0;
    var out = '';
    while (string_to_manipulate[index]){
        if((index + 1) % 3 == 0){
            out += string_to_manipulate[index];
            index += 1;
        }
        else{
            index += 1;
        }
    }
    res.json({"return_string" : out})
    res.sendStatus(200);
})

app.listen(port, ()=> console.log("listenting on port " + port))