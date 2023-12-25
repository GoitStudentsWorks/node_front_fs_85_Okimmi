import { SharedLayout } from './SharedLayout';
import { MainPage } from 'pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import { SignUpPage } from 'pages/SignUpPage/SignUpPage';
import { SignInPage } from 'pages/SignInPage/SignInPage';
import { ForgotPasswordPage } from 'pages/ForgotPasswordPage/SignUpPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { GlobalStyle } from './GlobalStyle';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from '../redux/hooks/useAuth';
import { refreshUser } from '../redux/auth/operations.js';
import { useEffect } from 'react';
import { Blocks } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Blocks
      height="200"
      width="200"
      color="#407BFF"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass="blocks-wrapper"
      visible={true}
    />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={isLoggedIn ? <HomePage /> : <MainPage />}
          ></Route>
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/"
                privateComponent={<SignUpPage />}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/" component={<SignInPage />} />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<ForgotPasswordPage />}
              />
            }
          />
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};
