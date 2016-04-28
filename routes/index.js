var router = require('koa-router')();

router.get('/', (ctx) => {
  
  return ctx.render('index', {
    title:'Hello Koa'
  })
})
module.exports = router;
