# Travis Setup

In this activity we will set up the project repo with Travis CI to ensure that linting passes on all changes before they can be merged into master.

It is recommended that before you actually apply the test instructions to your project repo, that you _practice_ with a test repository first.

## Instructions

* Only the owner of the project repo should complete this activity, other group members should observe and provide input where needed.

### Part 1: Protecting Master

* Before we can set up Travis, we must configure the project repo to protect the master branch.

* If you have not created a repo (for your project, or just to test this out)

* Create a dummy README.md or some test files.

* Push those test files to your remote copy of _master_

* Navigate to the repo's page, then click the "Settings" tab.

* Select "Branches" from the left sidebar.

* Under "Branch protection rules", click "Add Rule"

* For "Branch name pattern" , choose "master". The page should display ""

* Check off the following options:

  * "Protect this branch"

  * "Require pull request reviews before merging"

  * "Include administrators"

  * "Require status checks to pass before merging"

  * "Require branches to be up to date before merging"

* Click "Save changes"

### Part 2: Add Travis

* Navigate to <https://github.com/marketplace/travis-ci>.

* Select the option to "Set up a new plan" and choose the $0 "Open Source" plan when prompted.

* Click "Install it for free" and then on the next page click "Complete order and begin installation".

* On the next page select the radio button that reads "Only select repositories".

* From the "Select repositories" dropdown, choose your project repo.

* Click the "Install" button to complete the process.
