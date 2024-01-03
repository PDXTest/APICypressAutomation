/// <reference types="Cypress" />
const person = require ('../../testData/testdata')
const jsonData2 = require('../../testData/testdata.json')

let per = JSON.stringify(person);
let newper = JSON.parse(per)

describe('hello', ()=>{

    it('hello', ()=>{

        cy.log(newper.name)
        cy.log(jsonData2.location)
        cy.log(jsonData2.name)

    // console.log(json.location)
    
    // console.log(testdatajson.name)
    
    // console.log(testdatajson.location)
        
    })

   
})




