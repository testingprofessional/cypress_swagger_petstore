describe('API GET Request get pet id', () => {
    it('should perform a GET request get pet id', () => {
      cy.request({
        method: 'GET',
        url: 'v2/pet/1',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        });
    });
  });
  