// import price from "../MODEL/model.js";

// export const allprice = async (req, res) => {
//     try{
//         const sale = await price.findAll();
//     if (sale.length === 0) {
//         res.status(404).json({
//             message: "no record in table"
//         })
//         console.log("no record in table")
//     } else {
//         res.status(200).json({
//             message: "All sales done",
//             data: sales
//         })
//     }
//     }catch(err){
//         console.log(err)
//     }
// }


import price from "../MODEL/model.js";

export const allprice = async (req, res) => {
    try{
        const sale = await price.findAll();
    if(sale.length === 0) {
        res.status(404).json({
            message: "no table found",
        })
        console.log("no record on the table")
    }else{
        res.status(200).json({
            message: "All sales created:"+ sale.length,
            data: sale
        })
    }
    }catch(err){
        console.log(err)

    }
}

// logic to get a single student
export const singleSale = async (req, res) => {
  try{
    // grab the id from the url
    const id = req.params.id;
    const sale = await price.findAll({
          where: { id: id}
    });
    if( sale.length === 0) {
        res.status( 404 ).json({
            message: `no such id: ${ id }`
        });
        console.log(saleTable[0].id)
    } else {
        res.status( 200 ).json({
            data: sale[0]
        });
    }
  } catch(err) {
    res.status(404).json({
        message: err.message
    });
  }
}


// create a new sale
export const newSale = async (req, res) => {
    try{
        const sale = await price.create(req.body);
        res.status( 201 ).json({
            data: sale
        });
    } catch (err) {
        res.status( 404 ).json( {
            message: err.message
        });
    }
}


// update an existing sale


// delete a single sale

// export const deleteSale = async (req, res) => {
//     try{
//       // grab the id from the url
//       const id = req.params.id;
//       if( !id ) {
//           res.status( 404 ).json({
//               message: `This id: ${id} is the student deleted.`
//           })
//       } else {
//           const sale = await price.findOne( {
//               where : {id: id}
//           });
//           if (sale) {
//             await sale.destroy();
//             res.status( 200 ).json ({
//                 message: `Below is the student id deleted: ${ id }`,
//                 data: sale[0]
//           });
//            } else {
//             res.status( 200 ).json ({
//                 message: `Below is the student id deleted: ${ id }`,
        
          
//           });
//       }

//      }
//     } catch (err) {
//         res.status( 404 ).json({
//           message: err.message
//         });
//     }
//   }

// update a single sale
export const updateSale = async (req, res) => {
    try{
        // grab the id from the url
        const id = req.params.id;
        const updatedSale = await price.update(req.body, { where: { id: id } });
        if( updatedSale[0] === 0) {
            res.status(404).json( {
                message: `no such id: ${id}`
            });
            console.log(updatedSale[0])
        } else{
            // return the result
            res.status( 200 ).json({
                message: "updated successfully",
                data: updatedSale
            });
        }
    } catch (err) {
        res.status( 500 ).json({
            message: err.message
        })
    }
}

// remove a single sale
export const deleteSale = async (req, res) => {
    try {
        // grab the id from the url
        const id = req.params.id;
        // remove the sale with the specified id passed
        const removedSale = await price.destroy( {
            where: { id: id}
        });
        // check for wrong id
        if ( removedSale === 0 ) {
            res.status(404).json({
                message: `No such id: ${ id }`
            });
            console.log(removedSale)
        } else {
            // return the result
            res.status(200).json({
                message: "successfully deleted",
                data: removedSale
            });
        }
    }  catch (err) {
        res.status(404).json({
            message: err.message
        });

    }
}