// SelectBoxWrapper.tsx

import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface SelectBoxWrapperProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  error: FieldError | undefined;
  register: UseFormRegister<any>;
}

const SelectBoxWrapper: React.FC<SelectBoxWrapperProps> = ({ label, options, name, error, register }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      <select {...register(name)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={label}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBoxWrapper;
