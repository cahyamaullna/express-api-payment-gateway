// import {Sequelize} from "sequelize";

// const db = new Sequelize('db_payment','root','',{
//     host: "localhost",
//     dialect: "mysql"
// });

// export default db;

import {Sequelize} from "sequelize";

const db = new Sequelize('postgres','postgres','123',{
    host: "localhost",
    port: 5432,
    dialect: "postgres"
});

export default db;