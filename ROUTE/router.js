// import { allprice } from "../CONTROLLER/controller.js";

// import express from "express";

// const salesrouter = express.Router();
// salesrouter.get('/sales',allprice)
// export default salesrouter;

import { allprice, singleSale,newSale, updateSale, deleteSale} from "../CONTROLLER/controller.js";

import express from "express";

const salesrouter = express.Router();
salesrouter.get('/sales',allprice)

// endpoint to get a single sales
salesrouter.get('/sales/:id', singleSale)

// endpoint to create
salesrouter.post('/sales', newSale)

// // endpoint to delete
// salesrouter.delete('/sales/:id', deleteSale)

// endpoint to remove a sale from the database table
salesrouter.delete('/sales/:id', deleteSale)

// endpoint to update
salesrouter.patch('/sales/:id', updateSale)
export default salesrouter;