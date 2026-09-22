module.exports = {
  apps : [{
    name   : "app1",
    script: "./node_modules/vite/bin/vite.js",
    args: "preview --host 0.0.0.0",
    interpreter: "node",
  }]
}
