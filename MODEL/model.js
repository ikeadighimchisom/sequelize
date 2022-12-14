// import { Sequelize } from "sequelize";

// import chi from "../CONFIG/config.js";

// const {DataTypes} = Sequelize;

// const price = chi.define("salesinfo",{
//     productName: {
//         type: DataTypes.STRING
//     },
//     productPrice: {
//         type: DataTypes.DOUBLE
//     },
    
// }, {
//     freezeTableName: true
// })

// export default price;

import { Sequelize } from "sequelize";

import chi from "../CONFIG/config.js";

const {DataTypes} = Sequelize;

const price = chi.define("salesinfo", {
    productName: {
        type: DataTypes.STRING
    },
    productPrice: {
        type: DataTypes.DOUBLE
    },
}, {
    freezeTableName: true

});

export default price;