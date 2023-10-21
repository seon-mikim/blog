import React, { ChangeEvent } from 'react';
interface TextareaProps {
  content: string;
  labelText: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
const Textarea = ({ content, labelText, onChange }: TextareaProps) => {
  return (
    <div className="form__block">
      <label>{labelText}</label>
      <textarea name="content" onChange={onChange} value={content}></textarea>
    </div>
  );
};

export default Textarea;
