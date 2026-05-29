import * as React from 'react';

export const EmailTemplate = ({
  name,
  email,
  question,
  company
}) => (
  <div>
    <h1>name: {name}</h1>
    <h1>email: {email}</h1>
    <h1>company name: {company}</h1>
    <h1>question: {question}</h1>
  </div>
);
