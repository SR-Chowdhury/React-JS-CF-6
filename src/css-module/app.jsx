import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import classes from './example.module.css';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center my-5">Bismillah, Core React JS: Chapter Six - CSS Module</h1>
                <div className={classes.divTag}>
                    <p className={classes.pTag}>When we use module css then it will automatically scoped. </p>
                    <h3>And we will use this method in every React Application</h3>
                </div>
            </div>
        );
    }
}

export default App;