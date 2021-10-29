import Container from './components/Container';
import WrapperBackgroundColorSection from './components/WrapperBackgroundColorSection';
import Header from './components/Header';
import Hero from './components/Hero';
import HeroImgContainer from './components/HeroImgContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      <WrapperBackgroundColorSection color="#000000">
        <Container>
          <Header />
        </Container>
        <Container>
          <Hero />
        </Container>
      </WrapperBackgroundColorSection>
      <WrapperBackgroundColorSection color="#000000">
        <HeroImgContainer />
      </WrapperBackgroundColorSection>
    </div>
  );
}

export default App;
