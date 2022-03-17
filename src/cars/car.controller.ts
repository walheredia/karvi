import {Request, Response} from 'express';
import {getCars} from "./car.service";
import {iCar} from "./car";
import {brToNumber, toNumber} from "../utils";
import {siteBr} from "../constants";

interface iFilter {
    city: string[],
    state: string[],
    brand: string[],
    model: string[]
}

interface iResponse {
    items: iCar[],
    filters: iFilter
}

export const buildCars = async(req: Request, res: Response) => {
    try{
        const site:any = req.query.site;
        const apiKey:any = req.header('api-key');
        let cars:iCar[] = await getCars(site, apiKey);
        let result = <iResponse>{
            items: transformCarData(cars, site),
            filters: buildFilters(cars),
        };
        return res.status(200).send(result);
    } catch(error){
        return res.status(500).send({error: error});
    }
};

const transformCarData = (cars: iCar[], site:any) =>  {
    try{
        return cars.sort((a,b)=> {
            if (site === siteBr){
                return ( brToNumber(b.year) - brToNumber(a.year) ) || (a.price - b.price)
            } else {
                return ( toNumber(b.year) - toNumber(a.year) ) || (a.price - b.price)
            }
        });
    } catch(error:any){
        throw new Error(error)
    }
};

const buildFilters = (cars:iCar[]): iFilter => {
    let filters = <iFilter>{
        city:[],
        state:[],
        brand:[],
        model:[]
    };
    for(const car of cars){
        if (!filters.city.includes(car.city))
            filters.city.push(car.city);

        if (!filters.state.includes(car.state))
            filters.state.push(car.state);

        if (!filters.brand.includes(car.brand))
            filters.brand.push(car.brand);

        if (!filters.model.includes(car.model))
            filters.model.push(car.model);
    }
    return filters;
};

export const buildFilteredCars = async(req: Request, res: Response) => {
    try{
        const site:any = req.query.site;
        const strFilters:any = req.query.ids;
        const filters = strFilters.split(',');
        const apiKey:any = req.header('api-key');
        let cars:iCar[] = await getCars(site, apiKey);
        let filteredCars:iCar[] = cars.filter(car => filters.includes(car.id.toString()));
        return res.status(200).send(transformCarData(filteredCars, site));
    } catch(error){
        return res.status(500).send({error: error});
    }
};

