import { css } from 'lit-element';

export const AvatarStyles = css`
  .c-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    box-shadow: inset 0px 0px 0px 1px currentColor;
    border-radius: 50%;
    background: var(--lightest);
    color: var(--dark);
  }
  .c-avatar--lg {
    width: 9.6rem;
    height: 9.6rem;
  }
  @media screen and (max-width: 700px) {
    .c-avatar {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;
