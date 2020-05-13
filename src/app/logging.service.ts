// a service is a regular Typescript class, no decorator needed

export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status)
    }
}