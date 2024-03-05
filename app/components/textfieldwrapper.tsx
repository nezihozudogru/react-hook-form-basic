import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface TextFieldWrapperProps {
  name: string;
  register: UseFormRegister<any>;
  label: string;
  error: FieldError | undefined;
}

const TextFieldWrapper: React.FC<TextFieldWrapperProps> = ({ label, name, register, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      <input {...register(name)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      {error && <span>This field is required</span>}
    </div>
  );
};

export default TextFieldWrapper;
