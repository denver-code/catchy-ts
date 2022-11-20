class DevCaseController {
    defaultMethod() {
        return {
            constructorName: `${this.constructor.name}`,
            name: `Catchy.inc backend`,
            version: `v1 0.0.1`,
            serverTime: new Date().toISOString()
        }
    }
}

export = new DevCaseController();