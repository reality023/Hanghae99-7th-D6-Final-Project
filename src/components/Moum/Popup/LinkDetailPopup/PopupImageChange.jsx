import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import PopupButtonGroup from "./PopupButtonGroup";
import checkIcon from "assets/images/pages/moum/popup/check.png";
import noImage from "assets/images/pages/moum/popup/no-image.png";
import pcIcon from "assets/images/pages/moum/popup/pc_icon.png"
import addImage from "assets/images/pages/moum/popup/add-image.png"
import { apiCommon } from "utils/api/common";
import useCustomMutate from "hooks/useCustomMutate";

function PopupImageChange ({finish, close, getter, setter}) {
  const [imageType, setImageType] = useState(0);
  const [customImageState, setCustomImageState] = useState(false);
  const ref = {
    file: useRef(null)
  }

  const {mutateAsync: upload} = useCustomMutate((data) => apiCommon.uploadImage(data));

  const popupFinish = async () => {
    if (imageType === 0) {
      finish();
    } else if (imageType === 1) {
      alert("미구현 상태");
      return;
    } else if (imageType === 2) {
      const formData = new FormData();
      formData.append("image", ref.file.current.files[0]);
      const {result, data, error} = await upload(formData);
      if (result) {
        alert("파일 업로드 성공");
        finish(data.url);
      } else {
        alert("파일 업로드 실패");
        console.log(error);
      }
    }
  }


  const changeFile = (fileEvent) => {
    if (fileEvent.target.files && fileEvent.target.files[0]) {
      const reader = new FileReader();
      
      reader.onload = (e) => {
          const previewImage = document.getElementById('uploadImage');
          previewImage.src = e.target.result;
      }
      reader.readAsDataURL(fileEvent.target.files[0]);
      setCustomImageState(true);
    }
  }

  return (
    <Box>
      <form>
        <SelectBox>
          <Item onClick={() => {setImageType(0)}} isActive={imageType === 0}>
            <Name>불러온 이미지</Name> 
            {
              getter.image ?
              <Image>
                <img src={getter.image} alt="og" />
              </Image>
              :
              <NoImage>

              </NoImage>
            }
          </Item>
          <Item onClick={() => {setImageType(1)}} isActive={imageType === 1}>
            <Name>추천 이미지</Name>
            {/* <Image></Image> */}
            <NoImage></NoImage>
          </Item>
          <Item onClick={() => {setImageType(2)}} isActive={imageType === 2}>
            <Name>내 PC에서 불러오기</Name>
            {
              customImageState ? 
              <Image>
                <img id="uploadImage" alt="uploaded" />
                <Label htmlFor="image">
                  <img src={addImage} alt="파일 선택" />
                  파일 선택
                </Label>
              </Image>
              :
              <NoImage isUpload>
                <Label htmlFor="image">
                  <img src={addImage} alt="파일 선택" />
                  파일 선택
                </Label>
              </NoImage>
            }
            <input id="image" type="file" onChange={changeFile} ref={ref.file} hidden/>
          </Item>
        </SelectBox>
        <Share isShared={getter.share}>
          조각 공개 설정
          <div className="switch" onClick={() => setter(current => ({...current, share: !current.share}))}>
            <div className="switch-ball"></div>
          </div>
        </Share>
        <PopupButtonGroup close={close} finish={popupFinish} />
      </form>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 130px);
  flex-direction: column;
  padding: 24px;
  form {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

const SelectBox = styled.ul`
  width: 100%;
  display: flex;
  gap: 15px;
`;

const Item = styled.li`
  width: 185px;
  height: 190px;
  border: 2px solid #B7B7B7;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  position: relative;
  transition: border .3s, color .3s;
  cursor: pointer;
  &::before {
    content: '';
    right: 0;
    top: 0;
    transform: translate(30%, -30%);
    position: absolute;
    display: block;
    opacity: 0;
    width: 32px;
    height: 32px;
    background-color: #9152FF;
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    border: 1px solid #FFFFFF;
    transition: opacity .3s;
  }

  ${props => props.isActive && css`
    border: 2px solid #9152FF;
    > div {
      color: #721EFC;
    }
    &::before {
      opacity: 1;
    }
  `}
`;

const Name = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555555;
  transition: color .3s;
`;

const Image = styled.div`
  width: 100%;
  height: 96px;
  background-color: #E6E6E6;
  border-radius: 11px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
`;

const NoImage = styled.div`
  width: 100%;
  height: 96px;
  background-color: #E6E6E6;
  border-radius: 11px;
  background-image: url(${props => props.isUpload ? pcIcon : noImage});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  position: relative;
  z-index: 1;
  padding: 0 12px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  color: #555555;
  border-radius: 17px;
  cursor: pointer;
  opacity: 0;
  transition: opacity .3s;
  
  img {
    width: auto;
    height: auto;
    margin-right: 6px;
    position: static;
  }

  &:hover {
    opacity: 1;
  }
`;

const Share = styled.div`
  margin-top: 50px;
  color: #303030;
  display: flex;
  align-items: center;

  .switch {
    margin-left: 12px;
    width: 52px;
    height: 26px;
    background-color: #E0E0E0;
    border-radius: 13px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    transition: background-color .3s;

    .switch-ball {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #FFFFFF;
      position: absolute;
      left: calc(3px);
      transition: left .3s;
    }

    ${props => props.isShared && css`
      background-color: #9E67FF;
      .switch-ball {
        left: calc(100% - 23px);
      }
    `}
  }
`;

export default PopupImageChange;