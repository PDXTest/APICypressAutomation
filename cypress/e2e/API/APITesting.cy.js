/// <reference types="Cypress" />


describe('HTTP Requests', ()=>{
    
    it('Get Call', ()=> {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200)
    })

    it('Post call', ()=> {

        cy.request({
            methid: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body:{
                "userId": 2,
                "body": "this is post call",
                "title": "voluptatem eligendi optio"
                 }
            
            })

         .its('status')
         .should('equal', 200)
    })

    it('it Put call', ()=>{

        cy.request({

            methid: 'put',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                "userId": 2,
                "body": "this is Put call",
                "title": "voluptatem eligendi optio",
                "id": 101
                }
            })

        .its('status')
        .should('equal', 200)
    
    })
    
})