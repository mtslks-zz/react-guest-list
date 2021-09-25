import { InputContainer } from './Input.styles';

export default function Input() {
  return (
    <div>
      <div css={InputContainer}>
        First name: <input />
        <p />
        Last name: <input />
        <p />
        <button>Add guest</button>
        <p />
        <button>Delete input</button>
      </div>
    </div>
  );
}
