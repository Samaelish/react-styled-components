import styled from 'styled-components'
import Title from './components/Title'
import Flex from './components/Flex'
import Console from './components/Console';
import Button from './components/Button';

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background: #000;
`

function App() {
    return (
        <AppWrapper className="App">
            <Flex justify="center">
                <Title>Console cmd 2022. Samaelish</Title>
            </Flex>
            <Flex direction="column" margin={'0.625rem 0'}>
                <Console />
                <Button color='green' align="flex-end">Отправить</Button>
            </Flex>
        </AppWrapper>
    );
}

export default App;
