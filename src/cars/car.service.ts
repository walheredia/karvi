import fetch from "node-fetch";
import {iCar} from "./car";

export let getCars = async(site:string, header:string): Promise<iCar[]> =>  {
    try{
        const response = await fetch(`${process.env.EXT_HOST}?site=${site}` || 'EXT_HOST NOT DEFINED', {
            headers: {'api-key': header}
        });
        const data = await response.json()
        return data
    } catch(error:any){
        throw new Error(error)
    }
}