import React from 'react';

interface TextErrorProps {
  children: React.ReactNode;
}

const TextError: React.FC<TextErrorProps> = ({ children }) => {
  return <div className='mt-1 text-sm text-red-500'>{children}</div>;
};

export default TextError;
