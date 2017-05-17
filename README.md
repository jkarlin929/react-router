# React Router!

### Learning Objectives

- Import and use third-party node modules into React using npm (Node Package Manager)
- Use React Router to create a single-page app that duplicates the functionality of a multi-page site
- Use `BrowserRouter`, `Link`, `Route`, `Switch`, and `Redirect` to allow for navigation and URL manipulation

### How can we organize our apps as they grow?

Let's think about the standard webpage. A lot of sites follow a structure sort of like this:

- Home
- About
- Services
- Blog / Gallery / Etc.
- Contact

Or maybe like this:

- Home
- Login / Register
- Dashboard
- About
- Contact

Each of those pages might have multiple subpages, which might have subpages of their own. How might we accomplish something like this with React? And how can we make it so we can link to each one of those pages?

# Enter React Router!

Up to this point, our React applications have been limited in size, thus allowing us to use basic conditional logic in our components' render methods for changing component views. However, as our React applications grow in size and scope, we will want an easier and more robust way to set up navigation to different component views. Additionally, we will want the ability to set information in the url parameters to make it easier for users to identify where they are in the application.

React Router, while not the only, is the most commonly-used routing library for React. It is relatively straightforward to configure and integrates with the component architecture nicely (itself being nothing but a collection of components). Once configured, it serves as the root component in a React application and renders other application components within itself depending on the path in the url.

## Intro to React Router

Just like we had different dependencies in express that we imported using `require`, we can import modules into our React apps. Here's the steps for setting up React Router:

- `npm install --save react-router-dom`
- Add the following JS to `App.js`

```js
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
```

You will have to import things from `react-router-dom` in a couple of other places as well. We'll talk about those in a bit.

## The parts of React Router

We're already used to routes in Express, right? Here's your garden variety express route, just as a refresher:

```js
app.use('/about', (req, res) => {
  res.render('about', { 
    data: data 
  });
});
```

In this example, we're hitting the `/about` route and then saying "Okay, render the about page with some data." React Router works along similar lines.

### `Router`

React Router gives us access to the `Router` component. It talks to the browser and allows us to create "history" (the ability to use the forward/back buttons) with our app, even though we are still on a single-page app.

### `Route`

Much as in our Express routes, the React Router `Route` component allows us to define a URL endpoint and describe what should load on the page at that point.

### Let's put both of these in action.

In `App.js`:





In `App.js`:

```
render() {
  return (
    <Router>
      <Header />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/quotes" component={QuoteList} apiData={this.state.apiData} />
      </main>
      <Footer />
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

- swapi lab (characters/1 etc) (similar to [this](https://github.com/ga-students/WDI_HAKUNA_MATATA/blob/master/unit02/w06_d04/lab/starwars-routing-lab.md))


## homework concepts

- [pokeapi](https://pokeapi.co/) with routes? or just get them started on full CRUD tweedr