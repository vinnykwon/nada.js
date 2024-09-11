class Nada {
	constructor() {
		this.api = "https://getnada.cc/api"
		this.apiKey = "GwNvKEofrdyS7JTXCzHQ"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getDomains() {
		const response = await fetch(
			`${this.api}/domains/${this.apiKey}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async createEmail(email) {
		const response = await fetch(
			`${this.api}/email/${email}/${this.apiKey}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getMessages(email) {
		const response = await fetch(
			`${this.api}/messages/${email}/${this.apiKey}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {Nada}
