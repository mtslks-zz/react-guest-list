import { fancyRefreshButton } from './Header.styles';
import { InputContainer } from './Input.styles';

export default function Input() {
  return (
    <div>
      <div css={InputContainer}>
        First name: <input />
        <p />
        Last name: <input />
      </div>
      <p />
      <div>
        <span>
          <button css={fancyRefreshButton}>Add guest</button>{' '}
          <button css={fancyRefreshButton}>Reset input</button>
        </span>
      </div>
    </div>
  );
}
