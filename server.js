const port = process.env.PORT || 80
require('http')
  .createServer((req, res) => {
    console.log(`incoming url: ${req.url} and incoming method: ${req.method}`)
    res.writeHeader(200,{'Content-Type': 'text/html'})
    res.write('<p>DEVOPS</p>')
    res.write('<p>AWS</p>')
    res.end('<h1>WELCOME TO KAAY LABS PVT LTD </h1>')
  })
  .listen(port, (error)=>{
    console.log(`server is running on ${port}`)
  })
