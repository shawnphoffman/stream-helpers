import { styled } from "linaria/react";

export default styled.input`
  margin: 0;
  margin-bottom: 8px;
  padding: 12px 16px;
  line-height: 1.2;
  text-align: start;
  text-indent: 0px;
  text-transform: none;
  word-spacing: 0px;
  border-style: solid;
  border-width: 0;
  opacity: 1;
  flex: 1;
  user-select: all;

  &:focus {
    outline-style: none;
    box-shadow: none;
  }

  &:read-only {
    color: grey;
    user-select: all;
  }

  width: 100%;
  display: block;
  max-width: 720px;
`;
