import { ChangeEvent } from 'react';
import styled from 'styled-components';

const CheckBox = styled.input`
  accent-color: var(--lightPurple);
`;

interface Props {
  id: string;
  label: string;
  value: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const ChatToggle: React.FC<Props> = ({ id, label, value, onChange }) => {
  return (
    <div>
      <CheckBox type="checkbox" id={id} name={id} checked={value} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
