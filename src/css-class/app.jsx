import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center my-5">Bismillah, Core React JS: Chapter Six - CSS Class</h1>
                <div>
                    <p>If we want to use CSS class it will work fine but it has also some limitations: </p>
                    <ul>
                        <li>1st: When you use external css file, it will use in main file so this css can be use from any file within that folder. Also when you style a component like 'button' then every button of every page will change</li>
                        <li>2nd: We can't scope with this method. Like if we want to change button from page A but we don't to change from button style from page B; but it will change from both;</li>
                        <li>So <code>ignore</code> <strong>CSS class</strong></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;