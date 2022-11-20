import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import ErrorHandler from './models/error_handler';
import MasterRouter from './routers/master_router';


dotenv.config({
  path: '.env'
});


class Server {
  public app = express();
  public router = MasterRouter;
}


const server = new Server();


server.app.use('/api', server.router);


server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message
  });
});

server.app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({
    status: "error",
    statusCode: 404,
    message: "route not found"
  });
});

((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();