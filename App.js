
var express = require('express');
var app = express();
var db = require("./db")
var cors = require("cors");
app.use(cors());
const bodyParser = require('body-parser');
var bodyParserurl = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());


app.get('/nutrients', async (req, res) => {
    let [result] = await db.connection.execute("SELECT * FROM ingredient");
    res.status(200).json(result)
});


app.get('/type', async (req, res) => {
  let [result] = await db.connection.execute("SELECT * FROM type");
  res.status(200).json(result)
});


app.delete("/delete/ingredient/:id", async (req, res) => {

    try {
      const { id } = req.params;
      const Delete = await db.connection.query("DELETE FROM ingredient WHERE id_ingredient = ?", [id]);
      res.json("deleted!")
    } 
    
    catch (err) {
      console.log(err.message);
    }
  });

  
app.delete("/delete/type/:id", async (req, res) => {

  try {
    const { id } = req.params;
    const Delete = await db.connection.query("DELETE FROM type WHERE id_type = ?", [id]);
    res.json("deleted!")
  } 
  
  catch (err) {
    console.log(err.message);
  }
});

  

app.post('/login', bodyParserurl, function (req, res) {
  const userDetails = req.body;
  console.log(userDetails);
  User.findOne({username:userDetails.username},(err,user)=>{
    if(err){
      console.log(error)
    }
    else{
      if(!user){
        res.status(401).send('Invalid email')
      }
      else
        if(user.password!==userDetails.password){
          res/status(401).send('Invalid password')
        }
      else{
        res.status(200).send(user)
      }
    }
  })
});




app.post('/create', bodyParserurl, function (req, res) {
const userDetails = req.body;
console.log(userDetails);
var sql = 'INSERT INTO create_account SET ?';
db.connection.query(sql, userDetails, function (err, data) {
    if (err) throw err;
    console.log(" inserted successfully ");
});
});

app.post('/submit', bodyParserurl, function (req, res) {
  const userDetails = req.body;
  console.log(userDetails);

  var sql = 'INSERT INTO ingredient SET ?';
  db.connection.query(sql, userDetails, function (err, data) {
      if (err) throw err;
      console.log(" inserted successfully ");
  });
  });


  app.post('/Type', bodyParserurl, function (req, res) {
    const userDetails = req.body;
    console.log(userDetails);
  
    var sql = 'INSERT INTO type SET ?';
    db.connection.query(sql, userDetails, function (err, data) {
        if (err) throw err;
        console.log(" inserted successfully ");
    });
    });
  
    
/*
  app.put("/put/ingredient/:id", async (req, res) => {

    try {
      const { id } = req.params;
      const Updata = await db.connection.query("UPDATE FROM ingredient WHERE id_ingredient = ?", [id]);
      res.json("Update!")
    } 
    
    catch (err) {
      console.log(err.message);
    }
  });
  
*/


//http://localhost:4000/nutrients
app.listen(4000, () => {
  console.log("success");
})





