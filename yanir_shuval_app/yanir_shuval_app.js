const  express = require('express')
const yanir_shuval_app = express();
const port = 8080;

yanir_shuval_app.get('/', (req, res) => {
res.send('Hello World!')
})
yanir_shuval_app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})