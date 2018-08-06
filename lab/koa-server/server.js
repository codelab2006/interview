const Koa = require('koa');

const server = new Koa();

server.use(async (ctx, next) => {
  await next();
});

server.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

server.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

server.use(async ctx => {
  ctx.body = 'Hello World';
});

server.listen(3000);
