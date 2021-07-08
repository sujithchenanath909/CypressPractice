describe('tables',()=>{

    it('tables cases',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')
        //checking value presence anywhere in table
        cy.get('[name="BookTable"]').contains('td','Learn Selenium').should('be.visible');
        
        //checking value presence in specific row and coloumn
        cy.get('table[name="BookTable"] > tbody > tr:nth-child(2) > td:nth-child(3)')
        .contains('Selenium').should('be.visible');

        //verify the table content iterating through it

        cy.get('table[name="BookTable"] > tbody > tr td:nth-child(2)').each(($e1,index,$list) =>{
            const text=$e1.text();

            if(text.includes("Amod")){

                cy.get('table[name="BookTable"] > tbody > tr td:nth-child(1)').eq(index)
                .then((bookName)=>{

                    expect(bookName.text()).to.equal("Master In Java");
                })
            }
        })

    })
})