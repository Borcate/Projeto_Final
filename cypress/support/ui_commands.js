Cypress.Commands.add('pedidos_produtos', (prod, tamanho, cor, quant) => {

        cy.get('[class="product-block grid"]').contains(prod).click()
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quant)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'no seu carrinho.')
    });