Feature: groups
	As a User 
	I want to be able to create groups and add other users to the group 
	so that I can share budget and expenses with the group members

Scenario: User has option to create group
	Given that I am logged in as <user1>
	When I click create group button
	Then I should be redirected to greate group view

Scenario: User can successfully create group
	Given that I am logged in as <user1>
		And I have clicked the create group button
		And I have been redirected to greate group view
	When I enter the group name
		And I enter a description
		And I add users to the group
		And I click greate group
	Then I will be then see the created group
		And I will see group in 'groups/index' view.

Scenario: Users can be added to groups by other users
	Given that I am a <user2>
	When <user1> a adds me to <group1>
	Then I will recieve an email notification
		And I will see <group1> added to 'groups/index'

Scenario: User has the ability to edit groups info that they are apart of
	Given that I am a member of <group1>
		And I am logged in as <user1>
	When I click on the edit group button
	Then I can edit the name details and members of the group

Scenario: There will be a check before user is removed from group
	Given that I am logged in as <user2>
		And I am a member of <group1>
	When I click the 'leave group' button
	Then I will be prompetd to check if I intended to leave group

Scenario: User has the ability to remove themselves as a member of a group
	Given that I am logged in as <user2>
		And I am a member of <group1>
		And I have clicked the 'leave group' button
	When I click 'confirm' to the leave group check prompt
	Then I will be removed from the group
		And the group will not be displayed in my 'groups/index' view
