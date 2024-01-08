import defaultAvatar from '../../../images/SettingModal/default_user_avatar.svg';
import {
  Title,
  MainWrapper,
  UploadInput,
  UploadWrapper,
  Label,
  IconUploadImage,
  IconUser,
  UploaLoader,
  UploadLoaderWrapper,
  // ProgressBarContainer,
  // ProgressBar,
} from '../SettingModal.styled';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAvatar } from '../../../redux/auth/selectors';
import {
  updateAvatar,
  // setUploadProgress,
} from '../../../redux/auth/operations';

export const UploadPhoto = () => {
  const input = useRef();
  const dispatch = useDispatch();
  const currentAvatar = useSelector(selectAvatar);

  const [loadingAvatar, setLoadingAvatar] = useState(false);

  // const currentProgress = useSelector(state => state.auth.uploadProgress);

  // const handleFileChange = e => {
  //   dispatch(updateAvatar(e.target.files[0]));
  //   // dispatch(updateAvatar(currentProgress));
  //   // dispatch(setUploadProgress(currentProgress));
  // };

  const handleFileChange = async e => {
    try {
      setLoadingAvatar(true);
      await dispatch(updateAvatar(e.target.files[0]));
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoadingAvatar(false);
    }
  };

  return (
    <>
      <Title>Your photo</Title>
      <MainWrapper>
        {loadingAvatar ? (
          <UploadLoaderWrapper>
            <UploaLoader />
          </UploadLoaderWrapper>
        ) : (
          <IconUser src={currentAvatar || defaultAvatar} alt="user_photo" />
        )}

        {/* {currentProgress > 0 && (
        <ProgressBarContainer>
          <ProgressBar value={currentProgress} max="100">
          </ProgressBar>
        </ProgressBarContainer>
        )} */}
        {/* 
        {!currentProgress && (
          <IconUser src={currentAvatar || defaultAvatar} alt="user_photo" />
        )}
        <p>{currentProgress}</p> */}
        <UploadWrapper>
          <Label>
            <IconUploadImage />
            <UploadInput
              ref={input}
              type="file"
              id="file-input"
              onChange={handleFileChange}
              accept="image/*, .png, .jpeg, .gif, .web"
            />
            Upload a photo
          </Label>
        </UploadWrapper>
      </MainWrapper>
    </>
  );
};
