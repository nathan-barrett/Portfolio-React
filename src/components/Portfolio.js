import React, { Component } from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import ReactCardFlip from 'react-card-flip';
import Angle from 'react-icons/lib/fa/angle-double-left';
import { Button } from 'semantic-ui-react';
import SectionText from './SectionText';


const sectionStyle = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  marginBottom: 50,
});

const flipCardStyle = css({
  width: '80%',
  height: 200,
  marginTop: 10,
  marginBottom: 10,
  // filter: 'drop-shadow(15px 15px 5px rgba(191, 192, 192))',
});
const angleStyle = css({
  position: 'absolute',
  top: 5,
  left: 5,
  '&: hover': {
    opacity: 0.5,
  },
  '&: focus': {
    opacity: 0.5,
  },
});

const ProjectItem = styled('div')(props => ({
  width: '100%',
  height: 200,
  backgroundImage: props.background,
  backgroundSize: 'cover',
  backgroundPosition: 'top',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  h3: {
  },
}));
const ProjectItemBack = styled('div')({
  width: '100%',
  height: 200,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor: 'rgba(191, 192, 192, .2)',
  p: {
    width: '80%',
    textAlign: 'center',
  },
});

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      Project1bool: false,
      Project2bool: false,
      Project3bool: false,
      Project4bool: false,
      Project5bool: false,
      Project6bool: false,
    };
  }
  handle1Hover = () => {
    this.setState({ Project1bool: !this.state.Project1bool });
  }
  handle2Hover = () => {
    this.setState({ Project2bool: !this.state.Project2bool });
  }
  handle3Hover = () => {
    this.setState({ Project3bool: !this.state.Project3bool });
  }
  handle4Hover = () => {
    this.setState({ Project4bool: !this.state.Project4bool });
  }
  handle5Hover = () => {
    this.setState({ Project5bool: !this.state.Project5bool });
  }
  handle6Hover = () => {
    this.setState({ Project6bool: !this.state.Project6bool });
  }
  handleFlip = () => {
    this.setState({ Project1bool: !this.state.Project1bool });
  }
  handleFlip2 = () => {
    this.setState({ Project2bool: !this.state.Project2bool });
  }
  handleFlip3 = () => {
    this.setState({ Project3bool: !this.state.Project3bool });
  }
  handleFlip4 = () => {
    this.setState({ Project4bool: !this.state.Project4bool });
  }
  handleFlip5 = () => {
    this.setState({ Project5bool: !this.state.Project5bool });
  }
  handleFlip6 = () => {
    this.setState({ Project6bool: !this.state.Project6bool });
  }
  render() {
    return (
      <div className={sectionStyle}>
        <SectionText
          text="Portfolio"
        />
        <div
          className={flipCardStyle}
          onMouseEnter={this.handle1Hover}
          // onMouseLeave={this.handle1Hover}
        >
          <ReactCardFlip
            isFlipped={this.state.Project1bool}
            flipSpeedBackToFront={1.5}
            flipSpeedFrontToBack={1.5}
          >
            <ProjectItem
              background="url('https://github.com/nathan-barrett/Portfolio-React/blob/master/src/FiDO.png?raw=true')"
              key="front"
            />
            <ProjectItemBack
              key="back"
            >
              <Angle
                className={angleStyle}
                size={25}
                onClick={this.handleFlip}
              />
              <h4>For Dogs Only</h4>
              <p>A mobile application made with React Native where users can set up doggie dates.</p>
              <Button
                content="View Repository"
              />
            </ProjectItemBack>
          </ReactCardFlip>
        </div>
        <div
          className={flipCardStyle}
          onMouseEnter={this.handle2Hover}
          onMouseLeave={this.handle2Hover}
        >
          <ReactCardFlip
            isFlipped={this.state.Project2bool}
            flipSpeedBackToFront={1.5}
            flipSpeedFrontToBack={1.5}
          >
            <ProjectItem
              background="url('https://github.com/nathan-barrett/Portfolio-React/blob/master/src/battle.png?raw=true')"
              key="front"
            />
            <ProjectItemBack
              key="back"
            >
              <Angle
                className={angleStyle}
                size={25}
                onClick={this.handleFlip2}
              />
              <h4>PokemonJS</h4>
              <p>A mobile application made with React Native where users can set up doggie dates.</p>
            </ProjectItemBack>
          </ReactCardFlip>
        </div>
        <div
          className={flipCardStyle}
          onMouseEnter={this.handle3Hover}
          onMouseLeave={this.handle3Hover}
        >
          <ReactCardFlip
            isFlipped={this.state.Project3bool}
            flipSpeedBackToFront={1.5}
            flipSpeedFrontToBack={1.5}
          >
            <ProjectItem
              background="url('https://github.com/nathan-barrett/Portfolio-React/blob/master/src/Portfolio.png?raw=true')"
              key="front"
            />
            <ProjectItemBack
              key="back"
            >
              <Angle
                className={angleStyle}
                size={25}
                onClick={this.handleFlip3}
              />
              <h4>Animal Town</h4>
              <p>A mobile application made with React Native where users can set up doggie dates.</p>
            </ProjectItemBack>
          </ReactCardFlip>
        </div>
        <div
          className={flipCardStyle}
          onMouseEnter={this.handle4Hover}
          onMouseLeave={this.handle4Hover}
        >
          <ReactCardFlip
            isFlipped={this.state.Project4bool}
            flipSpeedBackToFront={1.5}
            flipSpeedFrontToBack={1.5}
          >
            <ProjectItem
              background="url('https://github.com/nathan-barrett/Portfolio-React/blob/master/src/portfolio3.png?raw=true')"
              key="front"
            />
            <ProjectItemBack
              key="back"
            >
              <Angle
                className={angleStyle}
                size={25}
                onClick={this.handleFlip4}
              />
              <h4>Stardew Valley's Most Wanted</h4>
            </ProjectItemBack>
          </ReactCardFlip>
        </div>
        <div
          className={flipCardStyle}
          onMouseEnter={this.handle5Hover}
        >
          <ReactCardFlip
            isFlipped={this.state.Project5bool}
            flipSpeedBackToFront={1.5}
            flipSpeedFrontToBack={1.5}
          >
            <ProjectItem
              background="url('https://github.com/nathan-barrett/Portfolio-React/blob/master/src/zoo.png?raw=true')"
              key="front"
            />
            <ProjectItemBack
              key="back"
            >
              <Angle
                className={angleStyle}
                size={25}
                onClick={this.handleFlip5}
              />

              <h4>Zoo Keeper</h4>
            </ProjectItemBack>
          </ReactCardFlip>
        </div>
        <div
          className={flipCardStyle}
          onMouseEnter={this.handle6Hover}
        >
          <ReactCardFlip
            isFlipped={this.state.Project6bool}
            flipSpeedBackToFront={1.5}
            flipSpeedFrontToBack={1.5}
          >
            <ProjectItem
              background="url('https://github.com/nathan-barrett/Portfolio-React/blob/master/src/Tomagatchi.png?raw=true')"
              key="front"
            />
            <ProjectItemBack
              key="back"
            >
              <Angle
                className={angleStyle}
                size={25}
                onClick={this.handleFlip6}
              />
              <h4>React Tamagatchi</h4>
            </ProjectItemBack>
          </ReactCardFlip>
        </div>
      </div>
    );
  }
}


export default Portfolio;
