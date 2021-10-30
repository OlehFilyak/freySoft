import Container from './components/Container';
import WrapperBackgroundColorSection from './components/WrapperBackgroundColorSection';
import Header from './components/Header';
import Hero from './components/Hero';
import HeroImgContainer from './components/HeroImgContainer';
import SectionWrapper from './components/SectionWrapper';
import About from './components/About';

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

      <WrapperBackgroundColorSection color="#fff">
        <Container>
          <SectionWrapper>
            <About />
          </SectionWrapper>
        </Container>
      </WrapperBackgroundColorSection>
    </div>
  );
}

export default App;
