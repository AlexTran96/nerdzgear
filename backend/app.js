const express = require('express');
const { sequelize } = require('./models');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.listen({port: PORT}, async()=> {
    console.log(`Server up on http://localhost:${PORT}`)
    await sequelize.authenticate()
    console.log('Database Connected!');
})

async function main() {
  await sequelize.sync({ alter: true})
}
main()

// Routes