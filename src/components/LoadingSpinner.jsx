import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: clamp(40px, 10vw, 48px);
  height: clamp(40px, 10vw, 48px);
  animation: ${spin} 1s linear infinite;

  @media (max-width: 600px) {
    width: clamp(32px, 8vw, 36px);
    height: clamp(32px, 8vw, 36px);
  }
`;

function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
}

export default LoadingSpinner;