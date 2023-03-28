var ClassMehodosPost = require('../../MehodosPost/Post')


describe('Valida API login', function () {
	context('Realizando testes no endPoint de LOGIN', () => {
		it('validar se o retorno é code 200', () => {
			ClassMehodosPost.GerarLogin('api/login', 200)
		});
	})


	context('Realizando testes no endPoint de NaoNulo', () => {
		it('validar se o retorno Nao é Nulo', () => {
			ClassMehodosPost.GerarLogin('api/login', 200, 'NaoNulo')
		});
	})



	context('Realizando testes no endPoint de Invalido', () => {
		it('validar se o retorno é code 404', () => {
			ClassMehodosPost.GerarLogin('api/Invalido', 404, 'NaoNulo')
		});
	})


	context('Realizando testes de erro Login', () => {
		it('validar se o retorno é code 409', () => {
			ClassMehodosPost.ErrorGerarLogin('api/login', 409, 'ClaroEcommerce5')
		});
	})

})