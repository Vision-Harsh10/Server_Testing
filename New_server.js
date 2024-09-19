const express = require('express');
const app = express();
const Database = require('./Database.js'); 
const menu = require('./Models/menu.js'); 
require('dotenv').config();
 
app.use(express.json());
const PORT = process.env.PORT || 3000; // Express has in-built support for JSON parsing

app.get('/Life', (req, res) => {
  res.send('Yes, I am always here for you.');
});

// Import the router files
const Personroutes = require('./routes/Personroutes');
// Use the routers
app.use('/person', Personroutes);



app.listen(PORT, () => {
  console.log('Server is listening on port 3000');
});

// POST API -- MENU
// app.post('/menu', async (req,res) => {
//   try{
//     //Assuming the request body contains the menu data
//     const menuItemData = req.body;
//     const menuItem = new MenuItem(menuItemData);
//     const menu_data = await menuItem.save();
//     console.log('menu item saved');
//     res.status(200).json(menu_data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error :'Internal server error'});
//   }
// });

// //GET API -- MENU
// app.get('/menu', async (req,res) => {
//   try{
//     const menuItems = await MenuItem.find();
//     console.log('Menu Data fetch Successfully');
//     res.status(200).json(menuItems);
//   }
//   catch(err){
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// })

// app.listen(3001, () => {
//   console.log('Server is listening on port 3001');
// });





