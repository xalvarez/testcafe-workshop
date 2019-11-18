import IndexPage from './IndexPage.js'

const indexPage = new IndexPage()

fixture`Index`
  .page`../../src/2/index.html`

test('Should fill out form', async testCafe => {
  await testCafe
    .click(indexPage.country)

  await testCafe
    .typeText(indexPage.firstName, 'Demo')
    .typeText(indexPage.lastName, 'TestCafe')
    .click(indexPage.country)
    .click(indexPage.country.find('option').withText('Spain'))
    .click(indexPage.termsAndConditions)

  await testCafe
    .expect(indexPage.firstName.value).eql('Demo')
    .expect(indexPage.lastName.value).eql('TestCafe')
    .expect(indexPage.country.value).eql('Spain')
    .expect(indexPage.termsAndConditions.checked).ok()
})
