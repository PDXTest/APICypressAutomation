describe('Api testing "Post Call"', ()=>{

        it('Approach-1 - Hard coded JSON object', ()=>{

        const requestBody = {
                                userId: 2,
                                body: "this is post call",
                                title: "voluptatem eligendi optio"
                            }

                            cy.request({
                                        method : 'POST',
                                        url : 'https://jsonplaceholder.typicode.com/posts/',
                                        body : requestBody
                                        })

                                .then( (response) => {
                                                expect(response.status).to.eq(201)
                                                expect(response.body.userId).to.eq(2)
                                    })
            })


            it('Approach-2 - Dynamically Generating JSON object', ()=>{

                const requestBody = {   userId: Math.random(),
                                        body: Math.random().toString(10),
                                        title: Math.random().toString(5),
                                    }
        
                            cy.request({method : 'POST',
                                        url : 'https://jsonplaceholder.typicode.com/posts/',
                                        body : requestBody
                                        })
        
                                        .then( (response) => {
                                                        expect(response.status).to.eq(201)
                                                        expect(response.body.userId).to.eq(requestBody.userId)
                                            })
                    })
        

            it('Approach-3- using Fixture JSON object', ()=>{

               cy.fixture('tourist.json').then((mydata)=>{
                const requestBody = mydata;
                console.log (requestBody);
             

                    cy.request({method : 'POST',
                    url : 'https://jsonplaceholder.typicode.com/posts/',
                    body : requestBody
                    })

                        .then( (response) => {
                        expect(response.status).to.eq(201)
                        expect(response.body.userId).to.eq(2)
                        expect(response.body).has.property('userId', requestBody.userId)
                        })

                    })
            })

})