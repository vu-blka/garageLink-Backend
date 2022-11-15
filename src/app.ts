import * as express from 'express';
import router from './routes';
import { AppDataSource } from './data-source';


AppDataSource.initialize()
  .then(async () => {
    console.log('Data source has been initialized!');
  })
  .catch((error) => console.log(error));


const app = express();
app.use(express.json());
router(app);

app.listen(5000, () => 'App listening port 5000!');

export default app;