import ErrorHandler from "../models/error_handler";

class DevCaseController {
    defaultMethod() {
        return {
            constructorName: `${this.constructor.name}`,
            name: `Exela.inc backend`,
            version: `0.0.1`,
            env: `TS/NODE.JS/EXPRESS`
        }
    }
}

export = new DevCaseController();