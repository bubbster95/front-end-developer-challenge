# Front-End Developer Challenge

## Rune Mastery Loadout Talent Calculator 9000
Players of TitanStar Legends can spend talent points that they’ve collected on runes within a tree. I have written a `React` application that simulates the rune tree within the game so players can replicate their in-game loadouts to share with the TitanStar Legends community.

- Clicking on a gray rune adds a point.
- Clicking on a Blue rune removes points.
- The user may only use up to 6 points.
- Each item only accounts for one point.
- Displays current point total
- The user must select the items in order.
    - For example: The user may not put a point in the cake without first having put points in the chevrons and the silverware (in that order).

## Future Features
* Suppress path `transition` when windowsize is changed.
* Animation on page entry.
* Routing, `if other pages are added`.
    * Create 404 page.
* Confirmation popup before purchase / sale of runes

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Download and Initialize the App

1) Decide where you would like to store the project file. Open your teminal and use `CD` to navigate to that file path.

2) Clone the repo into your local machine using [Git](https://git-scm.com/downloads):

        git clone https://github.com/bubbster95/front-end-developer-challenge.git

3) open the repo we jst installed with `CD`:

        cd front-end-developer-challenge

4) Initialize and install dependencies using [NPM](https://nodejs.org/en/download):

        npm install

5) Celebrate! You should now be ready to run the app.

## Run and Test

To start the React server simply run:
        
    npm start

To run the test suite use: 

    npm test

Launches the test runner in the interactive watch mode.

## Use the App

This app has one main functionality. <b>Buy and sell runes</b>. However, as mentioned above there are some stipulations. 

## Click Behavior

#### The Problem:
In the code challenge the click behavior is as follows "`Left click` to add points. `Right click` to remove points."

After a bit of reaserch into tracking the right click two things have come to my attention.

1) Right clicking is awkward on mobile and creates a bad `UX`
2) Right clicking on desktop opens a `context menu` which would cover up the rune as it is selected. This leads to another bad `UX`. There are options to allow the `context menu` to be disabled, in many circles this is considered `bad practice`

#### The Solution:
In my code the click behavior is as follows: "`Left click` purchases grey runes. `Left click` sells blue runes".

With this solution we solve a number of problems at once

1) Mobile users experience the same `UX` as desktop users.
2) Users only need to learn one `control perameter`cutting the "learning curve" in half and reducing frustration.
3) Only one `click handler` function is needed keeping the code clean and dynamic.

### How It Works

The `click handler` function checks if the rune has already been purchased. Then `the handler` checks if the rune is a valid purchase option (ie. all previus runes on this path are bought). Lastly `the handler` checks if we have available points. 

With these three bits of info `the handler` triggers one of three main tasks

1) Purchase the rune, turn it blue, update state, animate the path, update points.
2) Sell the rune and all runes after it on the path, turn it grey, animate the path, update points.
3) Notify the user that the rune is not available to be purchased by turning it red and giggling it. 

Note: If the purchase is `invalid` due to lack of points, the `points box` will turn red and giggle too.

