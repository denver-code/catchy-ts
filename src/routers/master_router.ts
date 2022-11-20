import { Router } from 'express';
import DevCaseRouter from './v1/devcase/devcase_router';
import ErrorTestRouter from './v1/error_test/error_test_router';

class MasterRouter {
  private _router = Router();
  private _devcase = DevCaseRouter;
  private _error_test = ErrorTestRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.use('/v1/', this._devcase);
    this._router.use('/v1/error', this._error_test);
  }
}

export = new MasterRouter().router;