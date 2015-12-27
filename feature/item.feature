Feature: items
	As a User
	I want to be able to add items to a shopping list that belongs to a group
	so that as a group we know what purchases we need to make

	Each group will only have 1 shopping list but the items can be sorted by tags.

Background: 
	Given I am logged in as <user1>
		And I am a member of <group1>

Scenario: User can view shopping list for the group
	When I navigate to <group1> view
		And I click "shopping list" button
	Then I will be directed to the 'items/index' view
		And I will be able to all shopping list items that belong to the group

Scenario: User can add item to a shopping list
	Given I am in the 'items/index' view
	When I click the 'add item' button
	Then I am redireceted to the 'items/new' view

Scenario: User can edit items in a shopping list
	When I click on an item
		And I click on edit
		And edit information and click 'save'
	Then I will be able to see the item with the new information

Scenario: User can delete items in a shopping list
Scenario: User can create transaction from list item
Scenario: User can add tag to shopping list item
Scenario: Shopping list is initially empty
Scenario: I can not view items in one groups list from another groups view
Scenario: User can filter shopping list by tag
