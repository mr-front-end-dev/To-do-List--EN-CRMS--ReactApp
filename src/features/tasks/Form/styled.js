import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax414}px) {
      grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 20px; 
  border: 1px solid ${({ theme }) => theme.color.lightgrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax360}px) {
    width: 75vw;
    font-size: 14px;
    text-align: center;
  }
`;

export const Button = styled.button`
  padding: 20px; 
  color: ${({ theme }) => theme.color.white}; 
  background-color: ${({ theme }) => theme.color.crimson}; 
  border: none;
  transition: color 0.3s;

  @media (max-width: ${({ theme }) => theme.mobileMax360}px) {
      width: 75vw;
      font-size: 20px;
      text-align: center;
  }

  &:hover {
    filter: brightness(110%);
    transform: scale(1.1);
  }

  &:active {
    filter: brightness(120%);
  }
`;