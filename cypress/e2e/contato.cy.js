/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('index.html')
    });

    it('Deve preencher o formulário de cadastro com sucesso', () => {
        cy.get('#name').type('Maria')
        cy.get('#email').type('maria@example.com')
        cy.get('#subject').select('Parcerias')
        cy.get('[name="message"]').type('Mensagem de teste para o formulário de contato.')
        cy.get('#btn-submit').click()
        //Resultado esperado
    });

    it('Deve validar mensagem de erro ao enviar o formulário sem preencher os campos obrigatórios', () => {
        cy.get('#name').type('Maria')
        cy.get('#email').clear()
        cy.get('#subject').select('Parcerias')
        cy.get('[name="message"]').type('Mensagem de teste para o formulário de contato.')
        cy.get('#btn-submit').click()
        cy.get('#alert-container').should('contain', 'Por favor, preencha o campo')
        //Resultado esperado
    });



})