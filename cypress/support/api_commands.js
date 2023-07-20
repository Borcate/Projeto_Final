Cypress.Commands.add('listarCupons', (token) => {
    cy.request({
        method: 'GET',
        url: 'coupons',
        headers: { authorization: `Basic ${token}` }
    })
})

Cypress.Commands.add('cadastrarCupom', (token, code, amount, dicount_type, description) => {
    cy.request({
        method: 'POST',
        url: 'coupons',
        headers: { authorization: `Basic ${token}` },
        body: {
            "code": code,
            "amount": amount,
            "dicount_type": dicount_type,
            "description": description
        }
    })
})