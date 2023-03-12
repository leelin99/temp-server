module.exports = {
  apps: [{
    name: "node-server", // 应用名称
    script: "./app.js", // 启用的脚本地址
    node_args: ['--inspect'], // 传递给节点可执行文件的参数
    env: { // 我的demo项目中不需要这个，就没有配置
      NODE_ENV: "production"
    },
    watch: [ // 监听 更新
      "config",
      "route",
      "utils"
    ],
    ignore_watch: [ // 不监听的目录 
      "node_modules",
    ],
    error_file: "./logs/pm2/app-err.log",  // 错误日志路径
    out_file: "./logs/pm2/app-out.log",  // 普通日志路径
    autorestart: true // 程序崩溃后自动重启
  }]
}