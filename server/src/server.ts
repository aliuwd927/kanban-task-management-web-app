import express, {Express, Request, Response} from 'express';

const app: Express = express();
const port = 3001;

app.get('/', (req: Request, res: Response)=>{
  res.send('Hello, this is Express + TypeScript');
});

app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`);
});


/*
Note: Make sure to npm run build after making changes to server.ts
      Change Dir to dist on powershell and run node server.js
*/