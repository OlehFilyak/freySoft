import Container from './components/Container';
import WrapperBackgroundColorSection from './components/WrapperBackgroundColorSection';
import Header from './components/Header';
import Hero from './components/Hero';
import HeroImgContainer from './components/HeroImgContainer';
import SectionWrapper from './components/SectionWrapper';

import './App.css';

function App() {
  return (
    <div className="App">
      <WrapperBackgroundColorSection color="#000000">
        <Container>
          <Header />
        </Container>

        <SectionWrapper>
          <Container>
            <Hero />
          </Container>
        </SectionWrapper>
      </WrapperBackgroundColorSection>
      <WrapperBackgroundColorSection color="#000000">
        <HeroImgContainer />
      </WrapperBackgroundColorSection>
    </div>
  );
}

export default App;
