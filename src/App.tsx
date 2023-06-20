import styled from 'styled-components';


function App() {
    return (
        <div className="App">
            <Title>Hello world!</Title>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
`;