import React, { Component } from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
// import ReactCardFlip from 'react-card-flip';
// import Angle from 'react-icons/lib/fa/angle-double-left';
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


const ProjectItem = styled('div')({
  width: '80%',
  height: 'auto',
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  '@media (min-width: 500px)': {
    height: 350,
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
    if (!this.state.Project1bool) {
      setTimeout(() => {
        this.setState({
          Project1bool: true, Project2bool: false, Project3bool: false, Project4bool: false, Project5bool: false, Project6bool: false,
        });
      }, 500);
    }
  }
  handle2Hover = () => {
    if (!this.state.Project2bool) {
      setTimeout(() => {
        this.setState({
          Project2bool: true, Project1bool: false, Project3bool: false, Project4bool: false, Project5bool: false, Project6bool: false,
        });
      }, 500);
    }
  }
  handle3Hover = () => {
    if (!this.state.Project3bool) {
      setTimeout(() => {
        this.setState({ Project3bool: true });
      }, 500);
    }
  }
  handle4Hover = () => {
    if (!this.state.Project4bool) {
      setTimeout(() => {
        this.setState({ Project4bool: true });
      }, 500);
    }
  }
  handle5Hover = () => {
    if (!this.state.Project5bool) {
      setTimeout(() => {
        this.setState({ Project5bool: true });
      }, 500);
    }
  }
  handle6Hover = () => {
    if (!this.state.Project6bool) {
      setTimeout(() => {
        this.setState({ Project6bool: true });
      }, 500);
    }
  }
  handleFlip = () => {
    setTimeout(() => {
      this.setState({ Project1bool: false });
    }, 200);
  }
  handleFlip2 = () => {
    setTimeout(() => {
      this.setState({ Project2bool: false });
    }, 200);
  }
  handleFlip3 = () => {
    setTimeout(() => {
      this.setState({ Project3bool: false });
    }, 200);
  }
  handleFlip4 = () => {
    setTimeout(() => {
      this.setState({ Project4bool: false });
    }, 200);
  }
  handleFlip5 = () => {
    setTimeout(() => {
      this.setState({ Project5bool: false });
    }, 200);
  }

  handleFlip6 = () => {
    setTimeout(() => {
      this.setState({ Project6bool: false });
    }, 200);
  }
  render() {
    return (
      <div>
        <SectionText
          text="Portfolio"
        />
        <div className={sectionStyle}>
          <ProjectItem>
            <img src="https://github.com/nathan-barrett/Portfolio-React/blob/master/src/FiDO.png?raw=true" alt="For Dogs Only" />
          </ProjectItem>
        </div>
      </div>
    );
  }
}


export default Portfolio;
