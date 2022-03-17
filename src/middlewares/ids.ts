import {Request, Response, NextFunction} from 'express';

/**
 * Middleware that validates the correct presence of the ids to filter
 * */
export const mwIds = (req: Request, res: Response, next: NextFunction) => {
    try{
        const ids:any = req.query?.ids;
        if (!ids)
            return res.status(500).send({error: 'Please, specify the Ids to filter!'})
        next();
    } catch (error: any){
        return res.status(500).send({error: error.message})
    }
}