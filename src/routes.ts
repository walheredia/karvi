import {Router, Request, Response} from 'express';
import {buildCars, buildFilteredCars} from './cars/car.controller';
import {mwApiKey} from "./middlewares/apiKey";
import {mwSite} from "./middlewares/site";
import {mwIds} from "./middlewares/ids";

const router = Router();

/*Welcome*/
router.get('/', async(req: Request, res: Response) => {res.send('KARVI API')})

router.get('/cars',[mwApiKey, mwSite], buildCars);
router.get('/filteredCars',[mwApiKey, mwSite, mwIds], buildFilteredCars);

export {router as routes}