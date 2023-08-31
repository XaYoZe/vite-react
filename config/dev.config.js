module.exports = {
  "root": './',
  "server": {
    watch: true,
    host:  '0.0.0.0',
    port: 8080
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify("development")
  }
}