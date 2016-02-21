const Url = require('url')

const config = require('app/config')

Scenario: User can add item to a shopping list
  Given I am in the 'items/index' view
  When I click the 'add item' button
  Then I am redireceted to the 'items/new' view

module.exports = function () {
  this.Given(/^I am a user$/, function () {

  })

  this.When(/^I open a page$/, function (cb) {
    this.browser.visit('/', cb)
  })

  this.Then(/^it works$/, function () {
    this.browser.assert.success()
  })
}