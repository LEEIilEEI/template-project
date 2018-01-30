const source = new EventSource(`http://127.0.0.1:7001/server-test/ss`)

source.onmessage = function(event) {
  console.log(event)
}