

import React from 'react';
import './Questions.css'

// question and answering part
const Questions = () => {
    return (
        <div className='answer'>
            <h4>Questions and Answers</h4>
            <div>
                <h6>1. How does React Works?</h6>
                <p>React is a JavaScript library that creates user interfaces (UIs) in a predictable and efficient way using declarative code.React uses a declarative paradigm that makes it easier to reason about our application and aims to be both efficient and flexible. It designs simple views for each state in our application, and React will efficiently update and render just the right component when data changes.A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state. </p>
                <br />
                <h6>
                    2. What is the Difference between Props Ans State?
                </h6>
                <br />
                <p>
                    State <br />
                    The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.
                    <br /> <br />
                    Props <br />
                    Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
                </p>
                <br />
                <h6>
                    3. What does useEffect do without data load ?
                </h6>

                useEffect usess in many ways... <br />
                <ul>
                    <li>Side Effect Runs After Every Render</li>
                    <li>Side Effect Runs Only Once After Initial Render</li>
                    <li>Side Effect Runs After State Value Changes</li>
                    <li> Side Effect Runs After Props Value Change</li>
                    <li>Side Effect Runs After Props and State Value Change</li>
                    <li>Side Effect Cleanup</li>
                </ul>
                <p>Mostly, The useEffect Hook allows us to perform side effects in our components.

                    directly updating the DOM, and timers etc.

                    useEffect accepts two arguments
                </p>

            </div>
        </div>
    );
};

export default Questions;