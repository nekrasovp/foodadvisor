import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Row from 'components/UI/Antd/Grid/Row';
import Col from 'components/UI/Antd/Grid/Col';
import Divider from 'components/UI/Antd/Divider/Divider';
import Button from 'components/UI/Antd/Button/Button';
import Logo from 'components/UI/Logo/Logo';
import SignInForm from './SignInForm';
import { REGISTRATION_PAGE } from 'settings/constant';
import SignInWrapper, {
  Title,
  TitleInfo,
  Text,
  SignInFormWrapper,
  SignInBannerWrapper,
} from './SignIn.style';

import signInImage from 'assets/images/login-page-bg.jpg';
import recyclex from 'assets/images/logo-alt.svg';

const SignIn = () => {
  const [state, setState] = useState({
    facebookBtnLoading: false,
    githubBtnLoading: false,
    firebaseBtnLoading: false,
    googleBtnLoading: false,
  });

  const facebookAuthAction = () => {
    setState({ facebookBtnLoading: true });
  };

  const githubAuthAction = () => {
    setState({ githubBtnLoading: true });
  };

  const firebaseAuthAction = () => {
    setState({ firebaseBtnLoading: true });
  };

  const googleAuthAction = () => {
    setState({ googleBtnLoading: true });
  };

  return (
    <SignInWrapper>
      <SignInFormWrapper>
        <Logo withLink linkTo="/" src={recyclex} title="Recyclex" />
        <Title>Welcome Back</Title>
        <TitleInfo>Please log into your account</TitleInfo>
        <SignInForm />
        <Divider>Or log in with </Divider>
        <Row gutter={16}>
          <Col span={12}>
            <Button
              loading={state.facebookBtnLoading}
              className="facebook-btn"
              type="primary"
              style={{ width: '100%', marginBottom: 16 }}
              size="large"
              onClick={facebookAuthAction}
            >
              Facebook
            </Button>
          </Col>
          <Col span={12}>
            <Button
              loading={state.githubBtnLoading}
              className="github-btn"
              type="primary"
              style={{ width: '100%', marginBottom: 16 }}
              size="large"
              onClick={githubAuthAction}
            >
              Github
            </Button>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginBottom: '37px' }}>
          <Col span={12}>
            <Button
              loading={state.firebaseBtnLoading}
              className="firebase-btn"
              type="primary"
              style={{ width: '100%', marginBottom: 16 }}
              size="large"
              onClick={firebaseAuthAction}
            >
              Firebase
            </Button>
          </Col>
          <Col span={12}>
            <Button
              loading={state.googleBtnLoading}
              className="google-btn"
              type="primary"
              style={{ width: '100%', marginBottom: 16 }}
              size="large"
              onClick={googleAuthAction}
            >
              Google+
            </Button>
          </Col>
        </Row>
        <Text>
          Don't Have an Account?{' '}
          <Link to={REGISTRATION_PAGE}>Registration</Link>
        </Text>
      </SignInFormWrapper>

      <SignInBannerWrapper>
        <div
          style={{
            backgroundImage: `url(${signInImage})`,
            backgroundPosition: 'center center',
            height: '100vh',
            backgroundSize: 'cover',
          }}
        />
      </SignInBannerWrapper>
    </SignInWrapper>
  );
};

export default SignIn;
