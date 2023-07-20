
describe('Teste de API para criação de cupom', () => {
    it('Cupom já existe', () => {
        cy.request({
            method: 'POST',
            url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
            headers: {
                "Connection": "keep-alive",
                "Authorization": "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy",
                "Content-Type": "application/json"
            },
            body: {
                "code": "nomecupom123456789",
                "amount": "10.00",
                "discount_type": "fixed_product",
                "description": ""
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.code).to.eq("woocommerce_rest_coupon_code_already_exists");
            expect(response.body.message).to.eq("O código de cupom já existe");
        });

        it('Cadastra cupom', () => {

            cy.request({
                method: 'POST',
                url: 'http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/post_wc_v3_coupons',
                headers: {
                    "email": "admin_ebac",
                    "password": "@admin!&b@c!2022",
                    'Authorization': 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
                },
                body: {
                    code: "nomeCupom",
                    amount: "10",
                    discount_type: "fixed_product",
                    description: "Cupom de desconto de teste"    
                },
            }).then((response) => {
                if (response.status === 200) {
                } else if (response.status === 400) {
                    const errorMessage = response.body.message
                } else if (response.status === 404) {

                } else {
                }
            })

        });

        it('Realizando um GET de cupons', () => {
            cy.request({
                method: 'GET',
                url: 'http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/post_wc_v3_coupons',
                headers: {
                    "email": "admin_ebac",
                    "password": "@admin!&b@c!2022",
                    'Authorization': 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
                },
            }).then((response) => {
                expect(response.status).to.equal(200);
            });
        })
    })
})