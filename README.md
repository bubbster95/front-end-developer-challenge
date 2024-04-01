# Front-End Developer Challenge
For this challenge I chose to focus most of my energy on two concepts, `css animation`, and the `mobile first approach`. Often mobile is overlooked even though roughly [58% of all web traffic](https://www.mobiloud.com/blog/what-percentage-of-internet-traffic-is-mobile#:~:text=Mobile%20makes%20up%2058.21%25%20of,up%2037%25%20of%20total%20traffic.) is through mobile. 

This is ultimately why I chose to build a separate layout for mobile sizing. This `two column` layout allows mobile users to have a nearly identical experience to web users. There is no need to scroll or zoom and the `click behavior is the same` across both versions.

Though this project is small I also made sure to keep in mind `best practices and scalable architecture` when designing the `rune / path` configs and `file structure`. The code can be easily scalled to include more paths and runes with only minor tweaks to CSS and JSX along the way. 

## Rune Mastery Loadout Talent Calculator 9000
Players of TitanStar Legends can spend talent points that they’ve collected on runes within a tree. I have written a `React.js` application that simulates the rune tree within the game so players can replicate their in-game loadouts to share with the TitanStar Legends community.

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
* Confirmation popup before purchase / sale of runes.
* Add better coverage on testing to include .functional tests for helper functions.
* Export functional test out of the skillTree page to separate concerns

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Download and Initialize the App

1) Decide where you would like to store the project file. Open your teminal and use `CD` to navigate to that file path.

2) Clone the repo into your local machine using [Git](https://git-scm.com/downloads):

        git clone https://github.com/bubbster95/front-end-developer-challenge.git

3) open the repo we just installed with `CD`:

        cd front-end-developer-challenge

4) Initialize and install dependencies using [NPM](https://nodejs.org/en/download):

        npm install

5) Celebrate! You should now be ready to run the app.

## Run and Test

To start the React server simply run:
        
    npm start

To run the test suite use: 

    npm test


## Use the App

This app has one main functionality. <b>Buy and sell runes</b>. However, as mentioned above there are some stipulations. 

## Click Behavior

#### The Problem:
In the code challenge the click behavior is as follows "`Left click` to add points. `Right click` to remove points."

Two things have come to my attention after a bit of research into tracking right clicks.

1) Right clicking is awkward on mobile and creates a bad `UX`
2) Right clicking on desktop opens a `context menu` which covers up the rune as it is selected. This leads to another bad `UX`. There are options to allow the `context menu` to be overridden, in many circles this is considered `bad practice`

#### The Solution:
In my code the click behavior is as follows: "`Left click` purchases `gray` runes and sells `blue` runes".

With this solution we solve a number of problems at once

1) Mobile users experience the same `UX` as desktop users.
2) Users only need to learn one `control parameter` cutting the "learning curve" in half and reducing frustration.
3) Only one `click handler` function is needed keeping the code clean and dynamic.

#### How It Works

The `click handler` function checks if the rune has already been purchased. Then `the handler` checks if the rune is a valid purchase option (ie. all previous runes on this path are bought). Lastly `the handler` checks if we have available points. 

With these three bits of info `the handler` triggers one of three logic paths:

1) Purchase the rune, turn it blue, update state, animate the path, update points.
2) Sell the rune and all runes after it on the path, turn it gray, animate the path, update points.
3) Notify the user that the rune is not available to be purchased by turning it red and jiggling it. 

Note: If the purchase is `invalid` due to lack of points, the `points box` will turn red and jiggle.


## Reasoning For Sale Behavior

It became clear that there were at least two logical ways to implement the sell feature, they are as follows.

* Clicking last purchased rune sells it and returns a point. While clicking a rune in the middle of two blue runes is considered invalid.

    OR

* Clicking any purchased rune sells it and all runes after. 

I went with option two. It felt `simpler/cleaner` from a `UX` standpoint. We would have needed to warn the user of the `invalid action`. This adds needless friction and forces the users to adhere to an `extra constraint`. Restricting the users ability and forcing them to sell the runes in order `might confuse` them. I can imagine a user furiously clicking the first rune saying "I want to go back!". Better to avoid this by letting them choose to sell one in order `OR` multiple.

---

## Thank You

Thank you again for taking the time to look through this project. There are certainly a lot of areas for improvement and I would like to hear feedback for future projects.