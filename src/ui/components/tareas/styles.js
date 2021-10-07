import styled from 'styled-components';

export const ToDoWrapper = styled.div`
  width: 100%;
  max-width: 768px;
  border-radius: 3px;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
`;

export const OrderButton = styled.button`
  position: absolute;
  top: -3.5rem;
  right: 0%;
  width: 32px;
  background-color: transparent;
  border: transparent;
  outline: rgba(20, 33, 61, 1);
  cursor: pointer;
  color: var(--platinum);
  font-size: 2rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
