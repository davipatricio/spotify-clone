import { ColoredInputRange } from './styles';

interface RangeInputProps {
  min: number;
  max: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RangeInput(props: RangeInputProps) {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    props.onChange(e);

  return (
    <ColoredInputRange
      type="range"
      min={props.min}
      max={props.max}
      value={props.value}
      onChange={handleValueChange}
    />
  );
}
