const express = require('express')
const app = express()
const cors = require('cors')

// const logger = require('morgan')
// const AuthRouter = require('./routes/AuthRouter')
// const PilgrimRouter = require('./routes/PilgrimRouter')
// app.use(logger('dev'))

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/auth', AuthRouter)
// app.use('/pilgrim', PilgrimRouter)

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
