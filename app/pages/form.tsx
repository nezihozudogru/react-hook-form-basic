'use client';
import React, { useState } from 'react';
import CheckboxWrapper from '../components/checkboxwrapper';
import RadioButtonWrapper from '../components/radiobuttonwrapper';
import SelectBoxWrapper from '../components/selectboxwrapper';
import TextFieldWrapper from '../components/textfieldwrapper';
import Form from '../components/formwrapper';
import { useForm } from 'react-hook-form';

interface FormHolderProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  password: string;
  gender: string;
  newsletter: boolean;
  country: string;
}

const FormHolder: React.FC<FormHolderProps> = () => {
  const {
    register,
    formState: { errors }
  } = useForm<FormData>();
  const onSubmit: (data: FormData) => void = (data) => console.log(data);

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded">
      <h2 className="text-lg font-semibold mb-4">Kayıt Formu</h2>
      <Form onSubmit={onSubmit}>
        <TextFieldWrapper name="name" register={register} label="Adınız" error={errors.name} />
        <TextFieldWrapper name="Email" register={register} error={errors.email} label="E-posta Adresiniz" />
        <TextFieldWrapper name="Password" register={register} error={errors.password} label="Şifreniz" />
        <RadioButtonWrapper label="Cinsiyetiniz" register={register} name="Gender" />
        <CheckboxWrapper label="Haber bültenimize abone olmak istiyorum" name="SubscribeNews" register={register} />
        <SelectBoxWrapper
          name="Country"
          label="Ülkeniz"
          error={errors.country}
          register={register}
          options={[
            { value: 'TR', label: 'Türkiye' },
            { value: 'US', label: 'Amerika Birleşik Devletleri' },
            { value: 'UK', label: 'Birleşik Krallık' },
            { value: 'DE', label: 'Almanya' }
          ]}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="submit">
          Kayıt Ol
        </button>
      </Form>
    </div>
  );
};

export default FormHolder;
