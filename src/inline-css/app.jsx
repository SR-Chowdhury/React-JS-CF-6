import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const myStyle = {
    color: 'red',
    fontFamily: 'Arial'
}

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center my-5">Bismillah, Core React JS: Chapter Six - Inline CSS</h1>
                <div>
                    <h3>Inline CSS can write in JSX; But it has some limitation</h3>

                    <h4 style={{color: 'Green', fontSize: '25px'}}>You can style as anonymously or </h4>

                    <h4 style={myStyle}>Declare as object before.</h4>
                    <h4 style={myStyle}>But you use several times than you will that both h4 tag where we used as object called twice</h4>
                    <ul>
                        <li>You can't use Media Query, Hover, Before, after, any sudo class etc</li>
                        <li>So <code>ignore</code> <strong>Inline CSS</strong> </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;