# nada.js
Web-API for [getnada.cc](https://getnada.cc/) an extremely useful temporary email service that allows users to create a 10-minute email swiftly

## Example
```JavaScript
async function main() {
	const { Nada } = require("./nada.js")
	const nada = new Nada()
	const domains = await nada.getDomains()
	console.log(domains)
}

main()
```
