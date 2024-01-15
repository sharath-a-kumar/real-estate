const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");

const customerRoutes = require('./app/routes/customer.rotes'); 
const sellerRoutes = require ('./app/routes/seller.rotes');
const buyerRoutes = require ('./app/routes/buyer.routes');
const dealscompletedRoutes = require ('./app/routes/dealscompleted.routes');


db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "welcome to the Real Estate " });
});



app.use('/api/customers', customerRoutes);
app.use('/api/sellers', sellerRoutes); 
app.use('/api/buyers',buyerRoutes);
app.use('/api/dealscompleted',dealscompletedRoutes);




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
