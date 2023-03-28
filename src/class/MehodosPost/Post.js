var chai = require("chai"),
	expect = chai.expect
const request = require("request")
const baseUrl = 'https://workflowpagamentoshomologn.azurewebsites.net/';
const massaDeTeste = require('../../Payloads/credencial.json');
const credencial_invalida = require('../../Payloads/credencial_invalida.json');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
module.exports = {
	GerarLogin(urlVerification, statusCodePost, NaoNulo) {
		request.post({
				url: `${baseUrl}${urlVerification}`,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(massaDeTeste)
			},
			function (error, response, body) {
				expect(response.statusCode).to.equal(statusCodePost)
				const NaoNulo = expect(response.body).not.to.be.null;

			})
	},

	ErrorGerarLogin(urlVerification, statusCodePost, ClaroEcommerce5) {
		request.post({
				url: `${baseUrl}${urlVerification}`,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(credencial_invalida)
			},
			function (err, response, body) {
				expect(response.statusCode).to.equal(statusCodePost)


			})





	}


}