context('Adicionar itens no carrinho', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar produtos e validar compra', () => {

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.pedidos_produtos('Abominable Hoodie', 'S', 'Red', 1)
        
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(8) > .page-numbers').click()
        cy.pedidos_produtos('Zeppelin Yoga Pant', '32', 'Blue', 2)

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(8) > .page-numbers').click()
        cy.pedidos_produtos('Zoltan Gym Tee', 'XS', 'Yellow', 3)

        cy.get('.woocommerce-message > .button').click()
      });

    })