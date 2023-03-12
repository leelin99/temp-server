module.exports = async (ctx, next) => {
  const content = 'application-type/json;charset=utf-8'
  ctx.set('Content-Type', content)
  ctx.set('Access-Control-Allow-Origin', "*")
  ctx.set('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT")
  ctx.set('Access-Control-Allow-Headers', "*")
  await next()
}