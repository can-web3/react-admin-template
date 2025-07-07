// src/components/FormInput.tsx
import React from 'react';

export interface FormInputProps {
  type?: string;
  title: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function FormInput({
  type = 'text',
  title,
  name,
  value,
  onChange
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={name}>{title}:</label>
      <input 
        type={type} 
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="input"
      />
    </div>
  );
}
