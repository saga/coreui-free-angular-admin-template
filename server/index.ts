import { json, urlencoded } from "body-parser";
import * as compression from "compression";
import * as express from "express";
import * as helmet from "helmet";
import * as path from "path";

const app: express.Application = express();

app.use(helmet());

app.disable("x-powered-by");

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

//app.use(cookieParser(config.cookieSecret));
app.set('trust proxy', 1);

app.use(express.static(path.join(__dirname, "/../client")));

app.get('/', (req, response) => {
  response.send('Hello world!');
});

app.listen(3000);
