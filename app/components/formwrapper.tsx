import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValueProps {
  children: any;
  onSubmit: (value: any) => void;
}

const Form: React.FC<FormValueProps> = ({ children, onSubmit }) => {
  const { handleSubmit, register } = useForm({});

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name
                  }
                })
              : child;
          })
        : children}
    </form>
  );
};
export default Form;
