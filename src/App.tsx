import styled from 'styled-components';
import RandomImage from './assets/rand-image.png';

const Wrapper = styled.div`
  text-align: center;
  color: #42f;
`

const MainImage = styled.img`
  width: 50%;
`

const App = () => (
  <Wrapper>
      <MainImage src={RandomImage} alt=""/>
    <h1>Hello, world!</h1>
  </Wrapper>
);

export default App;
