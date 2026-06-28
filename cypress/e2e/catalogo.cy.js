/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it('Deve clicar no segundo botão Adicionar à cesta', () => {
        cy.get('.btn-primary').eq(1).click()
        cy.get('#cart-count').should('contain', '1')
        //Resultado esperado
    });

    it('Deve clicar no livro e abrir a página de detalhes do livro', () => {
        cy.contains('A Divina Comédia').click()
        cy.url().should('include', 'book-details.html')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')
        cy.get('#cart-count').click()
        //Resultado esperado
    });



})