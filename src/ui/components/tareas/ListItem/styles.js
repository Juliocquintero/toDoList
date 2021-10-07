import styled from 'styled-components';

export const Li = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  font-size: 1.8rem;
  text-decoration: none;
  color: var(--cultured);
  background-color: rgba(10, 17, 31, 0.8);
`;

export const Description = styled.p`
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    text-decoration: line-through;
  }
`;

export const TimeAgo = styled.span`
  font-size: 1.2rem;
`;
