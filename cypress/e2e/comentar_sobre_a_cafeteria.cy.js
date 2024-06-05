describe('test suite Comentario Sobre A Cafeteria', () => {
    it('Adicionar Cafeteria e Visualizar ela na Lista', () => {
        cy.visit("/");
        cy.get('.column-left > a > .button').click();
        cy.get('#is_admin').select("cafe");
        cy.get('#username').type('cafe2');
        cy.get('#email').type('cafe2@gmail.com');
        cy.get('#password').type('XD123');
        cy.get('.btn').click();
        cy.get('#id_username').type('cafe2');
        cy.get('#id_password').type('XD123');
        cy.get('.btn').click();
        cy.get(':nth-child(4) > a > .bx').click();
        cy.get('#nome').type('Cafe n2');
        cy.get('#endereco').type('Rua 2');
        cy.get('#cntt').type('222222222');
        cy.get('#caracteristicas').type('Somos O Cafe n2');
        cy.get('.btn').click();
        cy.get(':nth-child(3) > a > .bx').click();
        cy.get('.logout > a > .bx').click();
        cy.get('.btn-secondary').click();
        cy.get('#username').type('Usuario2');
        cy.get('#email').type('Usuario2@gmail.com');
        cy.get('#password').type('XD123');
        cy.get('.btn').click();
        cy.get('#id_username').type('Usuario2');
        cy.get('#id_password').type('XD123');
        cy.get('.btn').click();
        cy.get(':nth-child(3) > a > .bx').click();
        cy.get('.list-group-item > :nth-child(1) > div').click();
        cy.get('.btn-success').click();
        cy.get('#comentario_texto').type('comentariokkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
        cy.get('.btn-primary').click();
        cy.get('.logout > a > .bx').click();
        cy.get('.btn-secondary').click();
        cy.get('#username').type('Usuario2.2');
        cy.get('#email').type('Usuario2.2@gmail.com');
        cy.get('#password').type('XD123');
        cy.get('.btn').click();
        cy.get('#id_username').type('Usuario2.2');
        cy.get('#id_password').type('XD123');
        cy.get('.btn').click();
        cy.get(':nth-child(3) > a > .bx').click();
        cy.get('.list-group-item > :nth-child(1) > div').click();




        //Deletar Alterções
        cy.get('.logout > a > .bx').click();
        cy.visit("/admin");
        cy.get('#id_username').type('admin');
        cy.get('#id_password').type('123');
        cy.get('.submit-row > input').click();
        cy.get('.model-user > th > a').click();
        cy.get(':nth-child(1) > .field-username > a').click();
        cy.get('.deletelink').click();
        cy.get('div > [type="submit"]').click();
        cy.get(':nth-child(1) > .field-username > a').click();
        cy.get('.deletelink').click();
        cy.get('div > [type="submit"]').click();
        cy.get(':nth-child(2) > .field-username > a').click();
        cy.get('.deletelink').click();
        cy.get('div > [type="submit"]').click();
        cy.visit("/");
    })
})