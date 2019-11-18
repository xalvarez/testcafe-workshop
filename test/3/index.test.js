import { Selector, RequestMock } from 'testcafe'
import IndexPage from './IndexPage.js'

const indexPage = new IndexPage()

fixture`Index`
  .page`../../src/3/index.html`

test('Should display success message upon successful form submission', async testCafe => {
  await testCafe
    .typeText(indexPage.firstName, 'Demo')
    .typeText(indexPage.lastName, 'TestCafe')
    .click(indexPage.country)
    .click(indexPage.country.find('option').withText('Spain'))
    .click(indexPage.termsAndConditions)
    .click(indexPage.submitButton)

  await testCafe
    .expect(Selector('#successAlert').visible).ok()
    .expect(Selector('#errorAlert').visible).notOk()
}).requestHooks(givenSuccessfulSubmissionMock())

test('Should display error upon failing submission', async testCafe => {
  await testCafe
    .typeText(indexPage.firstName, 'Demo')
    .typeText(indexPage.lastName, 'TestCafe')
    .click(indexPage.country)
    .click(indexPage.country.find('option').withText('Spain'))
    .click(indexPage.termsAndConditions)
    .click(indexPage.submitButton)

  await testCafe
    .expect(Selector('#successAlert').visible).notOk()
    .expect(Selector('#errorAlert').visible).ok()
}).requestHooks(givenFailingSubmissionMock())

function givenSuccessfulSubmissionMock () {
  return RequestMock()
    .onRequestTo({ url: /signup/, method: 'POST' })
    .respond(null, 201, {
      'content-type': 'application/json',
      'access-control-allow-origin': '*'
    })
}

function givenFailingSubmissionMock () {
  return RequestMock()
    .onRequestTo({ url: /signup/, method: 'POST' })
    .respond(null, 500, {
      'content-type': 'application/json',
      'access-control-allow-origin': '*'
    })
}
