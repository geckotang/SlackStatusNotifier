const fastify = require('fastify')()

fastify.get('/statusnotifier', (req, rep) => {
  const token = req.query.token
  if (token) {
    if (token === process.env.CGP_TOKEN) {
      require('./index')
      rep.send('maru')
    }
  }
})

fastify.listen(process.env.PORT, (err) => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
