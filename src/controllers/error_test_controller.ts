import ErrorHandler from "../models/error_handler";

class ErrorTestController {
    defaultMethod() {
        throw new ErrorHandler(501, 'Not implemented method');
      }
}

export = new ErrorTestController();