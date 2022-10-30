import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import styled from "styled-components";

const CustomStyle = styled.h3 `
    color: green;
    text-align: center;
    font-size: 30px;
    margin: 25px; 
`

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center my-5">Bismillah, Core React JS: Chapter Six - JSS (Styled Component)</h1>
                <Wrapper>
                    <Title>
                        Hello World!
                    </Title>
                </Wrapper>
                <div>
                    <CustomStyle>Alhamdulillah</CustomStyle>
                </div>
            </div>
        );
    }
}

export default App;