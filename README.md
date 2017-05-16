# React Router!

### Learning Objectives

- Mimic different "pages" in a React app using components
- Use `state` to determine which page type to load
- Import and use third-party node modules into React using npm (Node Package Manager)
- Use React Router to create a single-page app that duplicates the functionality of a multi-page site
- Use `BrowserRouter`, `Link`, `Route`, `Switch`, and `Redirect` to allow for navigation and URL manipulation

## initial lecture structure

### talking about the concept of different "pages" in React
- provide adaquotes react about the same as the [end lifting state one](https://git.generalassemb.ly/nyc-wdi-ada/adaquotes_featuredquote_examples/tree/master/adaquotes-lifted-state) but with an about page and ability to click on single quotes for a full page
- talk through the changes and the `pageType` state set

this is all well and good but we still can't link to a single page, how would we set up to do that instead? say we wanted to link to an individual quote. we can't right now.

### how to improve this setup

Up to this point, our React applications have been limited in size, thus allowing us to use basic conditional logic in our components' render methods for changing component views. However, as our React applications grow in size and scope, we will want an easier and more robust way to set up navigation to different component views. Additionally, we will want the ability to set information in the url parameters to make it easier for users to identify where they are in the application.

React Router, while not the only, is the most commonly-used routing library for React. It is relatively straightforward to configure and integrates with the component architecture nicely (itself being nothing but a collection of components). Once configured, it serves as the root component in a React application and renders other application components within itself depending on the path in the url.

### intro to react router
- remember `require`ing different modules when we did express? `import` works just like that, and we can `npm install` things that we can then `import`.
- so for routing, we'll use a package called `react-router-dom`. 
- walk through setup steps


```js
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
```


### the parts of react router

- we're already used to routing in express. 

```js
app.use('/about', (req, res) => {
  res.render('about', { 
    data: data 
  });
});
```

in this example, we're hitting the `/about` route and then saying "okay, render the about page with some data." react router works along a similar lines.

in order to use routes, we need to wrap the entire area that we expect to change in a component `<Router>`. Then, we just tell the route what path to expect, and what component to expect as a result.

In `App.js`:

```
render() {
  return (
    <Router />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/quotes" component={QuoteList} apiData={this.state.apiData} />
    </Router>
  );
}
```

- something in here about that `exact path` thing

Now when we go to `/about`, we'll render the `About` component. And when we go to `/quotes`, we'll render the `QuoteList` component.

Sometimes we may want to link to other pages from a navbar or something like that. That looks like this. 

In `Nav.jsx`:

```
render() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/quotes">Quotes</Link>
    </nav>
  );
}

```

### routing with params

- something about `/quotes/:id`
- something about `match`... will need to play with this

## todo

- ada quotes app with routing

## lab concepts
- 

## homework concepts

- swapi homework (characters/1 etc)