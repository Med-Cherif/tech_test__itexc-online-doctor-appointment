import React, { useRef, useState, useEffect } from "react";
import Input from "./Input";

interface TProps {
  digits?: number;
  onChange: (value: string) => void;
}
const OTPInput = ({ digits = 6, onChange }: TProps) => {
  const [values, setValues] = useState(Array(digits).fill(""));

  const inputRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(e.target.value);

    if (isNaN(value)) return;

    setValues((currentValues) => {
      const copied = [...currentValues];

      copied[index] = value;

      return copied;
    });

    if (value && index < digits - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  const onKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      if (index > 0) {
        inputRef.current[index - 1].focus();
      }
      setValues((currentValues) => {
        const copied = [...currentValues];

        copied[index] = "";

        return copied;
      });
    }
  };

  useEffect(() => {
    const value = values.join("");
    onChange(value);
  }, [digits, values]);

  return (
    <div className="otp-input-wrapper">
      {values.map((otpValue, index) => {
        return (
          <Input
            key={index}
            className="form-control otp-input"
            value={otpValue}
            maxLength={1}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => onKeyDown(index, e)}
            ref={(ref) => {
              inputRef.current[index] = ref!;
            }}
          />
        );
      })}
    </div>
  );
};

export default OTPInput;
