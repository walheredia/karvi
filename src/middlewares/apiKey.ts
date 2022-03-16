import {Request, Response, NextFunction} from 'express';
import {Md5} from 'ts-md5/dist/md5'

/**
 * Middleware that validates the correct presence of the api-key
 * */

export const mwApiKey = (req: Request, res: Response, next: NextFunction) => {
    try{
        const api_key = req.header('api-key')
        if (!api_key) return res.status(401).send({error: 'Please, specify your api-key!'})
        if (Md5.hashStr(api_key) !== process.env.HASHED_API_KEY) return res.status(401).send({error: 'The api-key provided is invalid!', apiKeyReceived: api_key})
        next();
    } catch (error: any){
        return res.status(500).send({error: error.message})
    }
}