# Travis Setup

Setting up the infrastructure for Continuous Integration (CI) takes some time but is well worth the time that would be saved from doing commits, unit tests, linting, and making builds manually (among other things)

Notice that CI tools like Travis are _not_ the same as software products like Gulp or SASS.

In this activity we will

1. Set up the project repo with Travis CI
2. Ensure that linting passes on all commits before they can be merged into master
3. Ensure that all unit tests pass before they can be merged to master

It is recommended that before you actually apply the test instructions to your project repo, that you _practice_ with a test repository first.

## Instructions

* It is recommended that all team members practice the techniques learned in this demo _in a test repo_, but for a team's project, only the owner of the project repo should complete this activity, other group members should observe and provide input where needed.

### Part 1: Creating a Repository and (Optional) Protecting Master

* Before we can set up Travis, we can configure the project repo to protect the master branch.

* If you have not created a repo (for your project, or just to test this out) then create a project.

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


Note: If you have protected the master branch, then you will have to approve merge requests before Travis takes over and automates from master.

### Part 2: Connect Your Repository to Heroku

Follow the instructions in the [HerokuGuide.pdf](HerokuGuide.pdf) to connect your github account to Heroku.

Confirm that you can

a) make a commit to master, then
b) use the heroku CLI to upload contents to your "dyno" (server) upon Heroku
c) see the contents of the sample server.js file in action (see [server.js](server.js) source code)

```
/* server.js main file */
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('req = \n', req);
  res.send('Test CI with Travis 1.0');
});

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('app running on port 3001');
});

// eslint-disable-next-line no-console
console.log('server = ', server);

module.exports = server;
```


### Part 3: Add Travis To Your Repository

* Navigate to <https://github.com/marketplace/travis-ci>.

* Select the option to "Set up a new plan" and choose the $0 "Open Source" plan when prompted.

* Click "Install it for free" and then on the next page click "Complete order and begin installation".

* On the next page select the radio button that reads "Only select repositories".

* From the "Select repositories" dropdown, choose your project repo.

* Click the "Install" button to complete the process

### Part 3(b): Ensuring that your Github is connected to the Travis via the GitHub Plugin for Travis

Browse to <https://github.com/marketplace/travis-ci> and install the Travis CI App from the GitHub Marketplace

Make sure you install the "Open Source" Pricing Version.

### Part 4: Install CLIs

Next, you will install the appropriate CLIs for usage in your project.

This demo assumes that you have installed Heroku CLI, described earlier. If not, go to

<https://devcenter.heroku.com/articles/heroku-cli#download-and-install>

Next, you will need the Travis CLI.

The Travis CLI (at this point in time) requires Ruby to be installed.

The instructions to install the Travis CLI are at

<https://github.com/travis-ci/travis.rb#installation>

Additional notes:

Windows Users don't have Ruby installed natively. So these users have to install Ruby first and can do so via RubyInstaller, at

<https://rubyinstaller.org/>

Mac Users should install Homebrew, the package manager for OS X. The one-line instruction to install Homebrew can be found at

<https://brew.sh/>

If you are a Mac user and you have fresh installation of Mac OS X, you may also have to install the XCode command line development tools as well. If this is the case, then perform the following command at the terminal

```
xcode-select --install
```

### Configuring and Testing ESLint

Now that you (hopefully) have everything installed, run

```
eslint --init
```

and answer the questions accordingly:

![Screenshot 2019-05-12 00.12.15.png](images/Screenshot_2019-05-12%2000.12.15.png)

(choose yes for the last option as well)

#### ESLint Installation troubleshooting

Having problems?

(Mac) Try installing eslint with _sudo_ privileges

(Windows / Mac)
Install eslint globally, and install the syntax style libraries globally

```
npm install -g eslint
npm install -g eslint-config-airbnb-base@^13.1.0
npm install -g eslint-plugin-import@^2.17.2
```

(Windows)

### Using Unit Tests

### Enabling Continuous Integration

The .travis.yml file instructs Travis on what to build. the language option can be whatever language your app is running in and the "node_js": "stable" indicates Travis should use a stable version of node. You can also cache your node_modules directory on Travis to avoid installing all dependencies every time a build is triggered but rather it updates packages that has newer versions.

Travis is a CI service which simply means it an automated process. A typical workflow with Travis ad GitHub goes like this:

* A commit is pushed to GitHub

* Travis build is triggered and it checks if the test is passing or failing.

Create a remote reference to your repo:

$ heroku git:remote -a rails-test-app-article

cat ~/.netrc
heroku auth:token

To setup travis yml file ( after installing travis cli
travis setup heroku
