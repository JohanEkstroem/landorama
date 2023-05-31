import express from "express";
const app = express();
const PORT = 5001

app.use(express.static('public'))

app.listen(PORT, () => {
console.log(`Listening on port: ${PORT}`)
})

