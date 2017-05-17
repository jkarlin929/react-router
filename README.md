# React Router!

### Learning Objectives

- Import and use third-party node modules into React using npm (Node Package Manager)
- Use React Router to create a single-page app that duplicates the functionality of a multi-page site
- Use `BrowserRouter`, `Link`, `Route`, `Switch`, and `Redirect` to allow for navigation and URL manipulation

## How can we organize our apps as they grow?

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

```
  render() {
    return (
      <Router>
        <div className="app">
          <main>
            <Route path="/" component={Index} />
            <Route path="/house" component={House} />
          </main>
        </div>
      </Router>
    );
  }
```

Let's talk a little bit about what's going on here. 

```
<Route path="/" component={Index} />
```

We're telling the route what path it should expect, and which component it should render at that point. However, there's one thing we need to fix. The path to `/house` also shows our index component. That shouldn't happen! We fix it by using `exact` as we define the path.

```
  render() {
    return (
      <Router>
        <div className="app">
          <main>
            <Route exact path="/" component={Index} />
            <Route path="/house" component={House} />
          </main>
        </div>
      </Router>
    );
  }
```

This tells the route to only render that component if the route is exactly `/`.

### Using params

Just like with Express, we can use parameters in our URL structure to render pages differently. Let's add a new route to our app so far.

```
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={Index} />
          <Route exact path="/house" component={House} />
          <Route path="/house/:room" component={Room} />
        </main>
      </Router>
    );
  }
```

Notice the colon, just like an Express route. Now, whatever `/house/[whatever]` endpoint we go to, we'll be getting a `Room` component.

However, as it is right now, the `Room` component is pretty boring. Let's see if we can make it a little bit more interesting. React Router allows us to access the parameters we're passed in the route -- sort of like `req.params`. 

In `Room.jsx`:

```
  render() {
    return (
      <div>
        <p>This is the {this.props.match.params.room}.</p>
      </div>
    );
  };
```

### Linking to routes

We've used `Router` and `Route` that we imported from `react-router-dom`, but not `Link` yet. `Link`, predictably, is what allows you to link to other pages in your app. Let's add a pseudo-navigation to our app.

In `App.js`:

```
render() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/house">House</Link></li>
            <li><Link to="/house/kitchen">Kitchen</Link></li>
            <li><Link to="/house/porch">Porch</Link></li>
          </ul>
        </nav>
        <main>
          <Route exact path="/" component={Index} />
          <Route exact path="/house" component={House} />
          <Route path="/house/:room" component={Room} />
        </main>
      </div>
    </Router>
  );
}
```

## 🚀 LAB!!!!

Let's all get on the same route.

In the  `router-example-begin` directory, install the dependencies. Then, follow the steps we just went over in class to get your begin app to look just like the one we did together.

You can work in pairs or groups for this lab. 

**You may *NOT* copy and paste!!!!!**

# Routes, states, and multi-page apps

Using routes to mimic a multi-page effect is good and cool, but the example we just walked through is just the tip of the iceberg of what's possible when it comes to routes. Let's add routes to our Ada Quotes React app.

As we do so, we'll do the following things:

- Set up the core of our app with a router that allows us to visit three pages: `Home`, `QuotesList`, and `SingleQuote`.
- Add a navigation that provides links to `Home` and `QuotesList`.
- Add a link to each individual quote in `QuotesList` that takes the user to a `SingleQuote` page.
- Make API calls based on what route we're on.

## 🚀 LAB!!!!

- swapi lab (characters/1 etc) (similar to [this](https://github.com/ga-students/WDI_HAKUNA_MATATA/blob/master/unit02/w06_d04/lab/starwars-routing-lab.md))

## homework concepts

- something super basic like the house example above
- dogs & cats?