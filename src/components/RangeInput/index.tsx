import { useRef, useState } from 'react';
import { ColoredInputRange } from './styles';

interface RangeInputProps {
  disabled?: boolean;
  max: number;
  min: number;
  onChange?(value: number): void;
  value: number;
}

export default function RangeInput(props: RangeInputProps) {
  const [value, setValue] = useState(props.value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.valueAsNumber);
    props.onChange?.(evt.target.valueAsNumber);
  };

  const handleScroll = (evt: React.WheelEvent<HTMLInputElement>) => {
    if (!inputRef.current) return;

    const { min, max } = inputRef.current;
    let newValue = inputRef.current.valueAsNumber - evt.deltaY * 0.05;

    if (newValue < Number(min)) newValue = Number(min);
    if (newValue > Number(max)) newValue = Number(max);
    newValue = Math.round(newValue);

    props.onChange?.(newValue);
    setValue(newValue);
  };

  return (
    <ColoredInputRange
      disabled={props.disabled}
      max={props.max}
      min={props.min}
      onChange={handleValueChange}
      onWheel={handleScroll}
      ref={inputRef}
      type="range"
      value={value}
    />
  );
}
