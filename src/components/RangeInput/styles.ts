import styled from 'styled-components';

export const ColoredInputRange = styled.input`
  appearance: none;

  /* Sets the background of the input that fades from white to dark gray with a position determined by the range's current value */
  background: linear-gradient(
    to right,
    #fff 0%,
    #fff ${(props) => props.value}%,
    #444444 ${(props) => props.value}%,
    #444444 100%
  );
  border-radius: 10px;

  height: 5px;
  width: 100px;

  &::-webkit-slider-thumb {
    appearance: none;
    display: none;

    background: #fff;
    box-shadow: 0 0 10px 1px #5c5c5c;
    border-radius: 50%;

    width: 15px;
    height: 15px;
  }

  &:hover {
    &::-webkit-slider-thumb {
      display: block;
    }
  }
`;
