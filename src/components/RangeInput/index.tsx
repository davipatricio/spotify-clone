import { useRef, useState } from 'react';
import { ColoredInputRange } from './styles';

interface RangeInputProps {
  min: number;
  max: number;
  value: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

export default function RangeInput(props: RangeInputProps) {
  const [value, setValue] = useState(props.value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e.target.valueAsNumber);
    setValue(e.target.valueAsNumber);
  };

  const handleScroll = (e: React.WheelEvent<HTMLInputElement>) => {
    if (!inputRef.current) return;

    const { min, max } = inputRef.current;
    let newValue = inputRef.current.valueAsNumber - e.deltaY * 0.05;

    if (newValue < Number(min)) newValue = Number(min);
    if (newValue > Number(max)) newValue = Number(max);
    newValue = Math.round(newValue);

    props.onChange?.(newValue);
    setValue(newValue);
  };

  return (
    <ColoredInputRange
      type="range"
      ref={inputRef}
      min={props.min}
      max={props.max}
      value={value}
      disabled={props.disabled}
      onChange={handleValueChange}
      onWheel={handleScroll}
    />
  );
}
