import styled from 'styled-components';

export const WatchWrapper = styled.div`
  width: 70%;
  min-width: 260px;
  max-width: 320px;
  margin: 10px auto;
`;

export const DateWrapper = styled.div`
  font-family: Arial;
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 0.3125rem;
  background: rgba(10, 17, 31, 0.8);
  padding: 20px;
  width: 100%;
`;

export const DateItem = styled.span`
  display: inline-block;
  font-size: 2rem;
  color: var(--platinum);
`;

export const TimeWrapper = styled.div`
  font-family: Arial;
  width: 100%;
  padding: 20px;
  font-size: 4em;
  text-align: center;
  background: rgba(10, 17, 31, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const HourMinutes = styled.span`
  display: inline-block;
  color: var(--platinum);
`;

export const SecondsWrapper = styled.div`
  display: inline-block;
  color: var(--platinum);
  font-size: 2rem;
`;

export const Seconds = styled.span`
  display: block;
  line-height: 2rem;
`;
