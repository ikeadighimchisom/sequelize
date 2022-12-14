// import { Sequelize } from "sequelize";

// const chi = new Sequelize ("salesproduct", "root", "root", {
//     host: "localhost",
//     dialect: "mysql"
// })

// export default chi;

import { Sequelize } from "sequelize";

const chi = new Sequelize ("salesproduct", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});

export default chi;