// a service is a regular Typescript class, no decorator needed

import { Injectable } from "@angular/core";

// @Injectable is not necessary here but might be in future versions, and it considered good practice
@Injectable()
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status)
    }
}