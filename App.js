import React from "react";
import ReactDOM from "react-dom/client";
// React Element
const heading = <h1>Namaste React</h1>

// Functional Component
const HeadingComponent = () => {
    return <h1 id="test">Namaste React from JSX</h1>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const component = ReactDOM.createRoot(document.getElementById("component"));
component.render(<HeadingComponent/>);