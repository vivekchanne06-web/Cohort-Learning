const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

require("dotenv").config()
const app= require("./src/app") 
const connectToData = require("./src/config/database");


connectToData()

app.listen(9000, () => {
    console.log("Server Port 9000 per chalu hua hai");
    
})