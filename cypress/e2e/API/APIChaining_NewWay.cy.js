/// <reference types="Cypress" />

describe('Go Rest API chaining', ()=>{

    const auth_token = 'Bearer 01d03033fa8706fb257be1222f2a76ba14a1e9acf50cf18759144934b859ba9a'

  it('Create, update, delete user', ()=> {
    cy.request({

        method : 'POST',
        url : 'https://gorest.co.in/public/v2/users',
        body:{
            name: 'John Kenedy',
            gender: 'male',
            email: Math.random().toString(5).substring(2)+ "@gmail.com",
            status: "active"
            },

            headers:{
                Authorization: auth_token
                     }

             })
             .then((response)=>{

                expect(response.status).to.equal(201)
                const userId = response.body.id
           
                return userId
                
             })

             //updating the resource
        .then((userId)=>{
             cy.request(
                {
                    method:'PUT',
                    url: `https://gorest.co.in/public/v2/users/${userId}`,
                    body:{
                            name: 'Rajesh Patil'
                        },

                  headers: {
                                 Authorization: auth_token
                            }

                })
                .then((responsenew)=>{

                    expect(responsenew.status).to.equal(200)
                    expect(responsenew.body.name).to.equal('Rajesh Patil')

                })

        })

        // .then((userId)=>{
        //         cy.request(
        //             {
        //                 method:'DELETE',
        //                 url: `https://gorest.co.in/public/v2/users/${userId}`,
        //                 body:{
        //                         name: 'Rajesh Patil'
        //                     },
    
        //               headers: {
        //                              Authorization: auth_token
        //                         }
    
        //             })

        //             .then((res)=>{
        //                 expect(res.status).to.equal(204)
                
        //             })

        //         })
          
    
    
    })

  



})