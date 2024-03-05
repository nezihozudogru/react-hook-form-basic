// CheckboxWrapper.tsx

import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';

interface CheckboxWrapperProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
}

const CheckboxWrapper: React.FC<CheckboxWrapperProps> = ({ label, register, name }) => {
  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input {...register(name)} className="mr-2 leading-tight" type="checkbox" />
        <span className="text-sm">{label}</span>
      </label>
    </div>
  );
};

export default CheckboxWrapper;
