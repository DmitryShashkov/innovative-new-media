import { ngExpressEngine, NgSetupOptions } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { enableProdMode } from '@angular/core';
import { Express, Request, Response } from 'express';
import { join } from 'path';
import * as express from 'express';
import * as cors from 'cors';
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

// important: leave this as require(), cause this file is built dynamically
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

(new class {
    private readonly PORT: number = process.env.PORT || 3223;
    private readonly DIST_FOLDER: string = join(process.cwd(), 'dist');
    private readonly VIEW_FOLDER: string = join(this.DIST_FOLDER, 'browser');
    private readonly templateEngine: string = 'html';
    private readonly engineSetupOptions: NgSetupOptions = {
        bootstrap: AppServerModuleNgFactory,
        providers: [
            provideModuleMap(LAZY_MODULE_MAP)
        ]
    };

    private readonly expressApp: Express = express();

    constructor () {
        // makes server renders faster
        enableProdMode();

        this.expressApp.engine (
            this.templateEngine,
            ngExpressEngine(this.engineSetupOptions)
        );

        this.expressApp.set('view engine', this.templateEngine);
        this.expressApp.set('views', this.VIEW_FOLDER);

        this.expressApp.use(cors());

        this.expressApp.get('*', this.handleRequests.bind(this));

        this.expressApp.listen(this.PORT, this.startCallback.bind(this));
    }

    private startCallback () : void {
        console.log(`Listening on ${this.PORT}`);
    }

    private handleRequests (req: Request, res: Response) : void {
        const view: string = 'index';
        const options: Object = { req };
        return res.render(view, options);
    }
});
