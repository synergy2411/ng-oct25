import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error: Error): void {
    // log errors in some log file
    console.log('GLOBALLY CAUGHT ERROR MESSAGE: ', error.message);
  }
}
