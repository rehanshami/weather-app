import express from "express";
import axios from "axios";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();

const port = 3000;
const API_key = "62e1453b6486773559e7c89e3dcc4fec";
const API_URL =  "https://api.openweathermap.org/data/2.5/weather?q=";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/weather", async (req, res) => {

    try {
        const response = await axios.get(API_URL+req.body.location.toLowerCase()+"&appid="+API_key+"&units=metric");
        console.log(response);
        // What I need is temperature, description, humidity and wind
        const temperature = response.data.main.temp;
        const description = response.data.weather[0].description;
        const humidity = response.data.main.humidity;
        const wind = response.data.wind.speed;
        const icon = response.data.weather[0].icon;
        const location = response.data.name;
    
        console.log(temperature)
        res.render("index.ejs", {icon: icon, location: location, temperature: temperature, description: description, humidity: humidity, wind: wind})
    } catch (error) {
        res.render("index.ejs", {location: "City not found"});
    }



})


app.listen(port, ()=> {
    console.log("Listening on port: ", port);
})