const koa = require("koa")
const path = require("path")
const router = require("./route/index")
const { koaBody } = require('koa-body');
const koaStatic = require('koa-static');
const app = new koa()
if(process.env.NODE_ENV === "development") {
  const middlewareHeader = require("./middleware/koa-response-header")
  app.use(middlewareHeader)
}
app.use(koaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, `/static/image`), //上传文件存储目录
    keepExtensions: true,//允许保留后缀名
    multipart: true,
    filename:(name, ext, part, from) => (name+ext) 
  }
}))
app.use(router.routes())
app.use(router.allowedMethods())
app.use(koaStatic(path.join(__dirname, "./static")))
app.listen(3002)
