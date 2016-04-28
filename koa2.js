const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  return ctx.body = "hello Koa"
});

app.listen(3001);