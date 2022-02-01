import {Request, Response} from "express";
import {getJsonBodyWithRandomUUID} from "../service/MeadowlarkService";
import {uuidv1} from "../../common/import/BasicsImports";

export function addMeadowlarkResource(app: any) {

    app.use((request: Request, response: Response, next: any) => {

        console.log("Filter is calling...")

        response.setHeader(`Content-Type`, `text/plain`);
        response.statusCode = 504;
        //response.end(`500 - Internal Server Error`);

        return next();
    });

    app.get('/about', (request: Request, response: Response) => {

        console.log('About was called...');
        response.set('Att', '123');
        response.set('Content-Type', 'application/json');

        console.log(uuidv1())
        response.set('E-Tag', uuidv1())
        response.status(200);

        response.send(getJsonBodyWithRandomUUID());
    });

    app.use((error: any, request: Request, response: Response, next: any) => {

        console.log("Error filter is calling...")
        console.error(error.message);

        response.setHeader(`Content-Type`, `text/plain`);
        response.statusCode = 500;
        response.send(`500 - Internal Server Error`);
    });

    app.use((request: Request, response: Response) => {

        response.setHeader(`Content-Type`, `text/plain`);
        response.statusCode = 400;
        response.end(`404 - Not found`);
    });
}