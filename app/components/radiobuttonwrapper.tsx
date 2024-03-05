// RadioButtonWrapper.tsx

import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface RadioButtonWrapperProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
}

const RadioButtonWrapper: React.FC<RadioButtonWrapperProps> = ({ label, name, register }) => {
  return (
    <div className="mb-4">
      <span className="ml-2">{label}</span>
      <div>
        <label className="inline-flex items-center">
          <label>Erkek</label>
          <input className=" ml-5 form-radio h-5 w-5 text-indigo-600" type="radio" />
        </label>
      </div>
      <div>
        {' '}
        <label className="inline-flex items-center">
          <label>Kadın</label>
          <input className=" ml-5 form-radio h-5 w-5 text-indigo-600" type="radio" />
        </label>
      </div>
    </div>
  );
};

export default RadioButtonWrapper;
