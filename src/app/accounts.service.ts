import { LoggingService } from "./logging.service"
import { Injectable, EventEmitter } from "@angular/core"

// when we inject a service into another service
// You add it to the RECEIVING service and the app won't work without it
@Injectable()
export class AccountsService {
    
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ]

    // we can also inject an event emitter from our service and emit 
    // it in our component (account.component.ts)
    statusUpdated = new EventEmitter<string>()

    constructor(private loggingService: LoggingService) {}

    addAccount(name: string, status: string) {
        this.accounts.push({name, status})
        this.loggingService.logStatusChange(status)
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status
        this.loggingService.logStatusChange(status)
    }
}