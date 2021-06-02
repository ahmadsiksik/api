
var mysql=require("mysql2/promise");

module.exports=db={};

connection();
async function connection(){
var dbcon=await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"as11nj11",
    database:"project",
});
db.connection = dbcon;
}







