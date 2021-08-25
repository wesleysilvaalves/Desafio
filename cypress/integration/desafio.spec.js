/// <reference types="cypress" />

const site_vr = "https://www.vr.com.br"
const logo_vr = "a.vr-logo"
const secao_pra_voce = "/onde-aceita.htm"
const botao_onde_usar_vr = "a[class='vr-button vr-button--negative ']" 
const mapa = "section[id='mapSection']"

describe("Site VR", function () {
    it("Verificar mapa do Google em Onde usar meu cartão VR", function () {
        //Criar uma automação que entre no site www.vr.com.br;
        cy.visit(site_vr)
        cy.get(logo_vr, {timeout: 8000}).should('be.visible')

        //Navegar até́ a seção “Pra Você̂” (/onde-aceita.htm);
        cy.visit(site_vr + secao_pra_voce)

        // Clicar no botão “Onde usar meu cartão VR”;
        cy.get(botao_onde_usar_vr).click()

        //- Validar que o mapa do Google abriu em tela.
        cy.get(mapa, {timeout: 8000}).should('be.visible')
    })
})