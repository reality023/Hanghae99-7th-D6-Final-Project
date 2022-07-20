import { css } from "styled-components";
import Button from "components/Common/Tag/Button";
import { useCallback } from "react";

function CancelButton ({text, isActive, onClick, optionStyle}) {
  return (
    <Button
      text={text ?? "취소"}
      btnStyle={cancelBtnStyle + optionStyle}
      btnHoverStyle={cancelBtnHoverStyle}
      btnActiveStyle={cancelBtnActiveStyle}
      isActive={isActive}
      onClick={onClick}
    />
  )
}

const cancelBtnStyle = css`
  border: none;
  padding: 16px 18px;
  font-weight: 600;
  font-size: 14px;
  border-radius: 50px;
  background-color: #F7F3FD;
  color: #9E67FF;
`;

const cancelBtnHoverStyle = css`

`;

const cancelBtnActiveStyle = css`
`;

export default CancelButton;