const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// PostgreSQL at ${process.env.DATABASE_URL}
app.get('/', (req, res) => {
    res.send(`Nerdgearz-API is running!`)
})

app.get('/setup', (req, res) => {
    async function main() {
      await sequelize.sync({ alter: true})
    }
    main()
})

app.use('/api/offers', require('./routes/offersRoute'));
app.use('/api/parts', require('./routes/partsRoute'));

app.listen(PORT, ()=> {
    console.log(`listening at ${PORT}`)
})


