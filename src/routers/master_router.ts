import { Router } from 'express';
import DevCaseRouter from './devcase/devcase_router';
import ErrorTestRouter from './error_test/error_test_router';

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
    this._router.use('/devcase', this._devcase);
    this._router.use('/error', this._error_test);
  }
}

export = new MasterRouter().router;