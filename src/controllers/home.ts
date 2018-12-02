import { Request, Response } from "express";

export let index = (req: Request, res: Response) => {

    return res.json({
        text: 'Hello world'
    })
}