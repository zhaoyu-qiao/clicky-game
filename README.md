# Clicky Game
Try clicking one friend once only to gain score, every time you click a friend's card, the order of the friend cards will shuffle. If you click the same friend twice the game will reset! Check out your top scrore at the Top bar!

## Introduction
This is an app powered by react on the front end, and a json file as its API
 
## Components
- Wrapper
- Navbar
- Title
- Containr
- FriendCard
- Footer

## Structure

![Structure](/public/assets/images/structure.png)

To get a better look at the structure of the components, below is the app jsx:

```
<Wrapper>
        <Nav score={this.state.score} highscore={this.state.highscore} />{" "}
        <Container>
          <Title> Friends List </Title>{" "}
          {this.state.friends.map(friend => (
            <FriendCard
              style={this.state.animation}
              handleClick={this.handleClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              movie={friend.movie}
              //clicked={friend.clicked}
            />
          ))}{" "}
        </Container>{" "}
        <Footer style={this.bottom}/>
      </Wrapper>
 ```     



## Methods
Functions are defined within app.js since they should be triggerd when event happens on the main page. Page render changes are achieved by changing the states.
Note that
- **don't make change directly with the state, make a local copy of the state, modify it, and assign it back to state**
- **use "this" keyword to bind methods and state


## Display of the game

![Launching page](/public/assets/images/initial.png)
![Shuffling](/public/assets/images/shuffle.png)
![Highscore](/public/assets/images/highscore.png)



##This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Below are some react notes for reference.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
