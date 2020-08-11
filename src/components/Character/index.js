import styled from 'styled-components';

const Character = styled.span`
  @keyframes rotate-in {
    0% {
      transform: rotateZ(-45deg);
      opacity: 0;
    }
    100% {
      transform: rotateZ(0);
      opacity: 1;
    }
  }

  color: #c5c5c5;
  display: inline-block;
  font-family: cursive;
  font-size: 36px;
  min-width: 10px;
  ${(props) => {
    switch (props.state) {
      case 'exiting':
      case 'entered':
        return 'animation: rotate-in 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;';
      case 'entering':
      case 'exited':
        return 'opacity: 0;';
      default:
        return 'opacity: 0;';
    }
  }};
`;

export default Character;
