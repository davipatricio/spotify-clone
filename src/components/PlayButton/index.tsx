import { MdPlayArrow } from 'react-icons/md';
import styled from 'styled-components';

interface PlayButtonProps {
  $animated?: boolean;
  $smooth?: boolean;
  $hidden?: boolean;
  onClick?: () => void;
}

const Button = styled.button<PlayButtonProps>`
  cursor: pointer;

  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};

  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 50%;

  color: ${({ theme }) => theme.colors.black};

  ${({ $smooth }) => $smooth && 'transition: all 0.2s ease-in-out;'}

  height: 45px;
  width: 45px;

  > svg {
    height: 27px;
    width: 27px;
  }

  &:hover,
  &:focus {
    opacity: 1;
    transform: scale(1.1);
    ${({ $animated }) => $animated && 'animation: bottomToUp 0.3s ease-in-out;'}
  }

  @keyframes bottomToUp {
    from {
      transform: translateY(100%);
    }

    to {
      transform: translateY(0);
    }
  }
`;

export default function PlayButton(props: PlayButtonProps) {
  return (
    <Button {...props} onClick={props.onClick} type="button">
      <MdPlayArrow />
    </Button>
  );
}
