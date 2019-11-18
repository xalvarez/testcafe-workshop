import { Selector } from 'testcafe'

export default class IndexPage {
  constructor () {
    this.firstName = Selector('#firstName')
    this.lastName = Selector('#lastName')
    this.country = Selector('#country')
    this.termsAndConditions = Selector('#termsAndConditions')
  }
}
