import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  min-width: 320px;
`;

export const AddInput = styled.input`
  display: block;
  width: 80%;
  max-width: 768px;
  height: 50px;
  margin: 45px auto;
  outline: none;
  box-shadow: 1px 1px 2px 2px var(--Rich-Black);
  padding: 20px;
  border: none;
  border-radius: 3px;
`;

export const Button = styled.input`
  display: block;
  width: 60%;
  max-width: 250px;
  background-color: var(--orange-web);
  border: 1px solid var(--coyote-brown);
  border-radius: 3px;
  color: var(--withe);
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
  margin: 45.5px auto;
  padding-left: 10px;
  cursor: pointer;
  outline: none;
  box-shadow: 1px 1px 2px 1px var(--Rich-Black);
`;
