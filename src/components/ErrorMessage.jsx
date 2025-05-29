import styled from 'styled-components';

const Error = styled.div`
  background-color: #ff4d4d;
  color: white;
  padding: 0.75rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

function ErrorMessage({ error }) {
  if (!error) return null;

  return <Error>{error}</Error>;
}

export default ErrorMessage;