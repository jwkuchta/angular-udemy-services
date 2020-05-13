// import { Component, EventEmitter, Output } from '@angular/core';
// import { LoggingService } from '../logging.service';

// @Component({
//   selector: 'app-new-account',
//   templateUrl: './new-account.component.html',
//   styleUrls: ['./new-account.component.css'],
//   // we need to add a property to use the service
//   providers: [LoggingService]
// })
// export class NewAccountComponent {
//   @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

//   // this is how we inform Angular we need an instance of this service
//   constructor(private loggingService: LoggingService) {}

//   onCreateAccount(accountName: string, accountStatus: string) {
//     this.accountAdded.emit({
//       name: accountName,
//       status: accountStatus
//     });
//     // console.log('A server status changed, new status: ' + accountStatus);
//     this.loggingService.logStatusChange(accountStatus)
//   }
// }

// WITH ACCOUNTS SERVICE

import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // we need to add a property to use the service
  // providers: [LoggingService]
})
export class NewAccountComponent {

  // this is how we inform Angular we need an instance of this service
  constructor(private loggingService: LoggingService, 
    private accountsService: AccountsService) {
      // we subscribe/listen to the event emitted in account.component.ts
      this.accountsService.statusUpdated.subscribe(
        (status: string) => alert('New Status is: ' + status)
      )
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountsService.addAccount(accountName, accountStatus)
    // this.loggingService.logStatusChange(accountStatus)
  }
}
