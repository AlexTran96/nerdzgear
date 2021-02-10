const Sequelize = require('sequelize');
const runing_mode = "comercial";
if (runing_mode === "dev")
    module.exports = new Sequelize('postgres://cdtcgpexmfpjru:733466258d3dcd2424d861d00604047961ac8ed81bfd00933adae1d1c52f820b@ec2-52-2-6-71.compute-1.amazonaws.com:5432/depb14ubd2lunn', {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    });
else
    module.exports = new Sequelize(`${process.env.DATABASE_URL}`, {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    });
