import KoaRouter from '@koa/router';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import client from '../prisma/client';

export const followerRouter = new KoaRouter({ prefix: '/followers' });

followerRouter.get('/:id', async (ctx) => {
  const { id } = ctx.params;
  const parsed = z
    .preprocess((value) => Number(value), z.number())
    .safeParse(id);

  if (!id || !parsed.success) {
    ctx.status = StatusCodes.BAD_REQUEST;
    return;
  }

  const follower = await client.follower.findUnique({
    where: { id: parsed.data },
  });

  if (!follower) {
    ctx.status = StatusCodes.NOT_FOUND;
    return;
  }

  ctx.body = follower;
  ctx.status = StatusCodes.OK;
});

// TODO: CREATE - Complete this route first.
followerRouter.post('/', (ctx) => {
  ctx.status = StatusCodes.NOT_IMPLEMENTED;
});

// TODO: LIST - Complete after POST request; bonus opportunity.
followerRouter.get('/', (ctx) => {
  ctx.status = StatusCodes.NOT_IMPLEMENTED;
});

// TODO: DELETE - Complete after POST request; bonus opportunity.
followerRouter.delete('/:id', (ctx) => {
  ctx.status = StatusCodes.NOT_IMPLEMENTED;
});

// TODO: UPDATE - Complete after POST request; bonus opportunity.
followerRouter.put('/:id', (ctx) => {
  ctx.status = StatusCodes.NOT_IMPLEMENTED;
});
