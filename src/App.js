import "./App.css";
import { css } from "styled-components";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
`;

const IntoShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  clip-path: polygon(60% 0, 100% 0%, 100% 100%, 49% 100%);
  background-color: crimson;
`;


const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 50% 0%, 40% 100%, 0 100%);
  background-color: black;
`;


const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;



function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape/>
      </Container>
      <Container>
        <Service/>
      </Container>
      <Container>
      <Price/>
        <PriceShape/>
      </Container>
      <Container>
        <Footer/>
        <Contact/>
      </Container>
    </>
  );
}

export default App;
