describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('title is correct', () => {
		cy.contains('title', 'Chat App')
	});
});