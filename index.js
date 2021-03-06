import Express, { response, urlencoded } from "express";


const app = Express();
const port = 3000;

app.use(Express.json());


app.post("/test", (req,res) => {
    var string_to_manipulate = req.body.string_to_cut;
    if (string_to_manipulate === undefined){
        return response.status(400).json({error:'No Input Detected'})
    }
    var index = 0;
    var out = '';
    //loop through the string to cut in order to get every third character
    while (string_to_manipulate[index]){
        if((index + 1) % 3 == 0){
            //append it to the return string 
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