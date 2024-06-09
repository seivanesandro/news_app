import styled, {
    keyframes
} from 'styled-components';

const spinner = keyframes`
from{
    scale: 0.4;
}
to{
    transform: rotate(360deg); 
    scale: 1;
  }

`;

const Loading = styled.div`
    width: ${({ size }) => size}rem;
    height: ${({ size }) => size}rem;
    border: 9px ${({ border }) => border};

    border-radius: 50px;
    border-top-color: none;
    animation: ${spinner}
        ${({ speedborder }) => speedborder}s
        linear infinite;
    z-index: 100;
`;

Loading.defaultProps = {
    border: 'dotted #333',
    speedborder: '1',
    size: '3'
};

export default Loading;
