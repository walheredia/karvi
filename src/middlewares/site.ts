import {Request, Response, NextFunction} from 'express';
import {siteAr, siteBr} from "../constants";

/**
 * Middleware that validates the correct presence of the site
 * */
export const mwSite = (req: Request, res: Response, next: NextFunction) => {
    try{
        const site:any = req.query?.site;
        if (!site)
            return res.status(500).send({error: 'Please, specify the site!'})
        if (site !== siteAr && site !== siteBr)
            return res.status(500).send({error: 'The site provided is invalid!', siteReceived: site})
        next();
    } catch (error: any){
        return res.status(500).send({error: error.message})
    }
}