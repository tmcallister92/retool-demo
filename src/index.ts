import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { followerRouter } from './follower';

export const app = new Koa();
const PORT = '3000';

app.use(bodyParser());
app.use(followerRouter.routes());

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening at: http://localhost:${PORT}`);
  });
}
