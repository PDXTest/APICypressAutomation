/// <reference types="Cypress" />

describe("API tesing", ()=>{

    const queryparam = {page: 2}

it('passing query parameters', ()=>{

    
cy.request({
    methid: 'GET',
    url: 'https://reqres.in/api/users',
    qs: queryparam
    })

.then((response)=>{

expect(response.status).to.eq(200);
expect(response.status).equal(200);
expect(response.body.data).has.length(6);
expect(response.body.data[0]).have.property('first_name' , "Michael");
expect(response.body.data[0]).have.property('last_name' , "Lawson");

})

})




})