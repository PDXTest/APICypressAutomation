describe('Parsing JSON Response', ()=>{

it('Parsing Simple JOSN response', ()=>{

cy.request({
        method: 'GET',
        url: 'https://fakestoreapi.com/products'
            })
            .then((Response) =>{
                    expect(Response.status).equal(200);
                    expect(Response.body[0].id).to.eq(1)
                    expect(Response.body[0].title).to.eq("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
                    expect(Response.body[0].price).to.eq(109.95)
                    expect(Response.body[0].rating.rate).to.eq(3.9)

                    expect(Response.body[19].price).to.eq(12.99)
            })

})



it('Parsing Simple JOSN response', ()=>{

    let totalprice=0;

    cy.request({
                method: 'GET',
                url: 'https://fakestoreapi.com/products',
                qs: {limit:5}
            })
                .then((response) =>{
                        expect(response.status).equal(200);

                    response.body.forEach(element => {
                           totalprice = totalprice + (element.price);
                           console.log(totalprice);
                        });
                      expect(totalprice).to.equal(899.23)
                })
    
    })

})