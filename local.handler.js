const app = require("./handler/router");
const port = 3000;

app.listen(port);
console.info(`listening on http://localhost:${port}`);
