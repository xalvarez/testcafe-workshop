import { Selector } from 'testcafe'

fixture`Index`
  .page`../../src/1/index.html`

test('Should fill out form', async testCafe => {
  const givenFirstNameField = Selector('#firstName')
  const givenLastNameField = Selector('#lastName')

  await testCafe
    .typeText(givenFirstNameField, 'Demo')
    .typeText(givenLastNameField, 'TestCafe')

  await testCafe
    .expect(givenFirstNameField.value).eql('Demo')
    .expect(givenLastNameField.value).eql('TestCafe')
})
