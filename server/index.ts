import { json, urlencoded } from "body-parser";
import * as compression from "compression";
import * as express from "express";
import * as helmet from "helmet";
import * as path from "path";

const app: express.Application = express();

app.use(helmet());
app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));
app.set('trust proxy', 1);

// serve the client side
app.use(express.static(path.join(__dirname, "../client")));

app.get('/api', (req, response) => {
    response.send('Hello world!');
});

app.listen(4200, () => {
    console.log("server start to monitor 4200");
});
