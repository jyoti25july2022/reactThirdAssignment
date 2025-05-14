# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Assignment Ques Ans

**1. Define event handling in React.js and its importance in building interactive user interfaces.**
Event handling in React refers to the process of capturing user actions (like clicks, input, key presses, etc.) and responding to them in the application using event listeners.
function HandleClick() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}

Importance of Event Handling in React
Enables Interactivity
Event handling lets users interact with the app — e.g., submitting forms, clicking buttons, typing input.
Drives UI Updates
React uses events to update the component state, which re-renders the UI dynamically.
Component Control
Developers can define custom logic based on user actions, giving full control over how components behave.
Consistent and Cross-Browser
React wraps native events with its own SyntheticEvent system, providing a consistent behavior across different browsers.

**2. Explain the differences between traditional DOM event handling and React event handling.**

Differences Between Traditional DOM and React Event Handling
🔹 **Traditional DOM Event Handling:**
Uses methods like addEventListener() to attach events.
Event names are written in lowercase (e.g., onclick, onchange).
Uses the native browser Event object.
Must manually remove event listeners using removeEventListener().
May behave differently across browsers (inconsistent).
Event handlers are attached directly to each element.

🔹 **React Event Handling:**
Events are handled using JSX attributes like onClick, onChange.
Event names are written in camelCase (e.g., onClick, onChange).
Uses SyntheticEvent (a wrapper around the native event) for consistency.
React automatically handles event cleanup when components unmount.
Provides cross-browser compatibility by normalizing events.
Uses event delegation under the hood for better performance.

**3 Discuss the significance of controlled components in React form handling.**

What Are Controlled Components?
Form elements whose value is controlled by React state.
Input value is set via state, and updates are handled using event handlers like onChange.

Why Controlled Components Are Important
Single Source of Truth: The input’s value is stored in the component’s state, making it easy to manage.
Real-Time Validation: Allows for immediate validation and feedback as the user types.
Dynamic Form Behavior: Easily control form behavior (e.g., enabling/disabling fields) based on state.
Simplified Data Handling: On form submission, all values are already in the state, no need to query the DOM.
Predictable UI: The UI is predictable because the form data is always in the component’s state.

import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

**4. Explain the concept of controlled components and uncontrolled components**

**Controlled Components:**
A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function. That means, the displayed data is always in sync with the state of the component.

The controlled components will be implemented using the below steps,
Initialize the state using useState hooks in function components or inside constructor for class components.
Set the value of the form element to the respective state variable.
Create an event handler to handle the user input changes through useState updater function or setState from class component.
Attach the above event handler to form elements change or click events
For example, the name input field updates the user name using handleChange event handler as below,

import React, { useState } from "react";

function UserProfile() {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" value={username} onChange={handleChange} />
      </label>
    </form>
  );
}

**Uncotrolled Components:**
The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

The uncontrolled components will be implemented using the below steps,
Create a ref using useRef react hook in function component or React.createRef() in class based component.
Attach this ref to the form element.
The form element value can be accessed directly through ref in event handlers or componentDidMount for class components
In the below UserProfile component, the username input is accessed using ref.

import React, { useRef } from "react";

function UserProfile() {
  const usernameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("The submitted username is: " + usernameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" ref={usernameRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

In most cases, it's recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

**4. Explain the purpose of React Router in single-page applications**
 
Purpose of React Router in Single-Page Applications
**1. Enabling Navigation Without Page Reloads**
React Router allows navigation between different views or components in a single-page application without causing a full page reload. This results in a smoother, faster user experience.
**2. Dynamic Routing**
It provides dynamic routing, meaning the routing configuration can be determined at runtime based on the state, props, or context of your application.
**3. URL Management**
React Router allows for the management of URLs in the app. It keeps the URL in sync with the UI by mapping URLs to specific components or views, making the app's state shareable and bookmarkable.
**4. Nested Routes**
It supports nested routing, where child components can be rendered inside their parent components, enabling complex layouts and navigation structures.
**5. History Management**
React Router uses the browser's History API to keep track of the navigation history, allowing users to use the browser's back and forward buttons.
**6. Declarative Routing**
React Router uses a declarative approach, meaning routes are defined as JSX components, making it easy to control the flow of your application with simple conditions.
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;

**5. Discuss the benefits of using React Router for managing application routes.**

Benefits of Using React Router for Managing Application Routes
1. Seamless Navigation
React Router allows for navigation without page reloads, which results in a smoother, faster user experience in single-page applications (SPAs).
2. Declarative Routing
Routes are defined as JSX components, making routing simple, readable, and easy to maintain. You can conditionally render routes based on the app’s state or user behavior.
3. Dynamic Routing
React Router supports dynamic routing, where routes can be determined at runtime based on the app's state, allowing for more flexible navigation.
4. URL Synchronization
It synchronizes the UI with the URL, ensuring that the browser’s URL matches the current view. This helps in bookmarking specific views and sharing URLs easily.
5. Nested Routing
React Router allows for nested routes, making it easy to create complex layouts where routes can be nested inside one another. This allows for better-organized and hierarchical views.
6. History API Integration
React Router integrates with the History API to handle browser history, which means users can navigate back and forth using the browser's back and forward buttons.
7. Lazy Loading
React Router supports code splitting with lazy loading. You can load only the necessary components for a specific route, reducing the initial load time of the application.
8. Access Control
It allows easy implementation of protected routes, enabling features like authentication and authorization. You can restrict access to certain routes based on user roles or authentication state.
9. Location-based Rendering
React Router makes it easy to render components based on the location (URL) of the app, allowing for context-specific UI rendering.
