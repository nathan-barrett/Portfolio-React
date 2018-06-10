import React, { Component } from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
// import ReactCardFlip from 'react-card-flip';
// import Arrow from '@fortawesome/fontawesome-free-solid/faChevronUp';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import SectionText from './SectionText';
// import MyButton from './Button';


const sectionStyle = css({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  marginBottom: 50,
  '@media (min-width: 500px)': {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const ImageContainer = styled('div')(props => ({
  width: '80%',
  height: 300,
  borderRadius: 16,
  backgroundImage: props.background,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  marginBottom: 20,
  '&:first-child': {
    marginTop: 20,
  },
  '@media (min-width: 600px)': {
    width: '45%',
    '&:first-child': {
      marginTop: 0,
    },
  },
  '@media (min-width: 1200px)': {
    width: '28%',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: '100%',
  },
}));

const TextContainer = styled('div')(props => ({
  position: 'relative',
  width: '100%',
  height: 300,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#90D3E3',
  transform: 'translateY(100%) translateY(-100px) translateZ(0)',
  transition: 'transform 0.5s ease-out',
  padding: 30,
  paddingBottom: 16,
  h2: {
    marginLeft: 15,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    color: 'white',
  },
  p: {
    marginLeft: 15,
    color: 'grey',
  },
  '&:before': {
    zIndex: -1,
    display: 'block',
    position: 'absolute',
    content: '" "',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundImage: props.background,
    backgroundSize: 'cover',
    filter: 'blur(25px)',
    opacity: 0.8,
    transform: 'translateY(100%) translateY(-100px) translateZ(0)',
    transition: 'transform 0.5s ease-out',
  },
  '&: hover': {
    transform: 'translateY(0) translateZ(0)',
  },
}));

const hiddenText = css({
  paddingTop: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  h4: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    position: 'relative',
    transition: 'all 0.2s',
    width: '80%',
    borderRadius: 16,
    backgroundColor: 'transparent',
    color: 'white',
    height: 40,
    border: '2px solid white',
    marginTop: 25,
    outline: 'none',
    a: {
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    '&:before, &:after': {
      backgroundColor: 'white',
      borderRadius: 10,
      content: '" "',
      position: 'absolute',
      zIndex: -1,
    },
    '&:hover': {
      color: '#90D3E3',
      '&:after': {
        height: '100%',
        left: 0,
        top: 0,
        width: '100%',
      },
    },
    '&:after': {
      transition: 'all 0.3s',
      height: 0,
      left: '50%',
      top: '50%',
      width: 0,
    },

  },
});


class Portfolio extends Component {
  render() {
    return (
      <div>
        <SectionText
          text="Portfolio"
        />
        <div className={sectionStyle}>
          <ImageContainer
            background='url("https://github.com/nathan-barrett/Portfolio-React/blob/master/src/FiDO.png?raw=true")'
          >
            <TextContainer
              background='url("https://github.com/nathan-barrett/Portfolio-React/blob/master/src/FiDO.png?raw=true")'
            >
              <h2>For Dogs Only</h2>
              <p>React Native / Redux</p>
              <div className={hiddenText}>
                <h4>A React Native mobile application with state management with Redux where the user can set up dog play dates with other users.</h4>
                <button><a href="https://github.com/nathan-barrett/ForDogsOnly" target="_blank" rel="noopener noreferrer">View Repository</a></button>
              </div>
            </TextContainer>
          </ImageContainer>
          <ImageContainer
            background='url("https://github.com/nathan-barrett/Portfolio-React/blob/master/src/plantigotchi.jpg?raw=true")'
          >
            <TextContainer
              background='url("https://github.com/nathan-barrett/Portfolio-React/blob/master/src/plantigotchi.jpg?raw=true")'
            >
              <h2>Plantigotchi</h2>
              <p>C++ with Arduino</p>
              <div className={hiddenText}>
                <h4>An IOT arduino application that tracks house plant moisture level. Received second place at the Women Who Code IOT Hackathon, 2018.</h4>
                <button><a href="https://github.com/pnw-cha/plantigotchi" target="_blank" rel="noopener noreferrer">View Repository</a></button>
              </div>
            </TextContainer>
          </ImageContainer>
          <ImageContainer
            background='url("https://github.com/nathan-barrett/Portfolio-React/blob/master/src/battle.png?raw=true")'
          >
            <TextContainer
              background='url("https://github.com/nathan-barrett/Portfolio-React/blob/master/src/battle.png?raw=true")'
            >
              <h2>Pok‌&#233;mon JS</h2>
              <p>Angular 5</p>
              <div className={hiddenText}>
                <h4>An Angular application where the user can play a Pok‌&#233;mon simulator.</h4>
                <button><a href="https://github.com/nathan-barrett/PokemonJS" target="_blank" rel="noopener noreferrer">View Repository</a></button>
              </div>
            </TextContainer>
          </ImageContainer>
          <ImageContainer
            background='url("https://github.com/nathan-barrett/Portfolio-React/blob/master/src/Portfolio.png?raw=true")'
          >
            <TextContainer
              background='url("https://github.com/nathan-barrett/Portfolio-React/blob/master/src/Portfolio.png?raw=true")'
            >
              <h2>Animal Town</h2>
              <p>SCSS / CSS</p>
              <div className={hiddenText}>
                <h4>Web application created using HTML canvas and SCSS where the user creates a charcter from Animal Crossing.</h4>
                <button><a href="https://github.com/nathan-barrett/Animal-Town" target="_blank" rel="noopener noreferrer">View Repository</a></button>
              </div>
            </TextContainer>
          </ImageContainer>
          <ImageContainer
            background='url("https://github.com/nathan-barrett/Portfolio-React/blob/master/src/zoo.png?raw=true")'
          >
            <TextContainer
              background='url("https://github.com/nathan-barrett/Portfolio-React/blob/master/src/zoo.png?raw=true")'
            >
              <h2>Zoo Zone</h2>
              <p>Angular 5</p>
              <div className={hiddenText}>
                <h4>An angular application with CRUD functionality where user can track zoo animals.</h4>
                <button><a href="https://github.com/nathan-barrett/Animal-Town" target="_blank" rel="noopener noreferrer">View Repository</a></button>
              </div>
            </TextContainer>
          </ImageContainer>
          <ImageContainer
            background='url("https://github.com/nathan-barrett/Portfolio-React/blob/master/src/Tomagatchi.png?raw=true")'
          >
            <TextContainer
              background='url("https://github.com/nathan-barrett/Portfolio-React/blob/master/src/Tomagatchi.png?raw=true")'
            >
              <h2>Guede-Tomagatchi</h2>
              <p>React</p>
              <div className={hiddenText}>
                <h4>A React aplication where user takes care of a Guedetama-themed Tomagatchi</h4>
                <button><a href="https://github.com/nathan-barrett/Animal-Town" target="_blank" rel="noopener noreferrer">View Repository</a></button>
              </div>
            </TextContainer>
          </ImageContainer>
        </div>
      </div>
    );
  }
}


export default Portfolio;
