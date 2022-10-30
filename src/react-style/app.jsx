import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center my-5">Bismillah, Core React JS: Chapter Six</h1>
                <div>
                    <h3>There are four main method to style react app</h3>
                    <ul>
                        <li>Inline CSS</li>
                        <li>CSS Class</li>
                        <li>CSS Module</li>
                        <li>JSS (Styled Component)</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;