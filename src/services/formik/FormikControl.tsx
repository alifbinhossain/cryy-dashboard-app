import React from 'react';

import Checkbox from './common/Checkbox';
import Switch2 from './common/Switch2';
import SwitchToggle from './common/SwitchToggle';

import { Input, Select, Submit, Textarea } from './index';

interface FormikControlProps extends React.HTMLAttributes<HTMLInputElement> {
  control:
    | 'input'
    | 'textarea'
    | 'select'
    | 'checkbox'
    | 'submit'
    | 'media'
    | 'image'
    | 'images'
    | 'rich_text'
    | 'switch'
    | 'switch2';

  name: string;
  placeholder?: string;
  title?: string;
  required?: boolean;
  type?: string;
  options?: any;
  info?: any;
  label?: string;
  inputIcon?: string;
  labelJsx?: React.ReactNode;
  disabled?: boolean;
  isLabelModify?: boolean;
  index?: number;
  service?: any;
}

const FormikControl = ({ control, ...rest }: FormikControlProps) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;

    case 'textarea':
      return <Textarea {...rest} />;

    case 'submit':
      return <Submit {...rest} />;

    case 'select':
      return <Select {...rest} />;
    case 'switch':
      return <SwitchToggle {...rest} />;
    case 'switch2':
      return <Switch2 {...rest} />;
    case 'checkbox':
      return <Checkbox {...rest} />;

    default:
      return null;
  }
};

export default FormikControl;
