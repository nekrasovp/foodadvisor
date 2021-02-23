import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Row from 'components/UI/Antd/Grid/Row';
import Col from 'components/UI/Antd/Grid/Col';
import Divider from 'components/UI/Antd/Divider/Divider';
import Button from 'components/UI/Antd/Button/Button';
import Logo from 'components/UI/Logo/Logo';
import SignUpForm from './SignUpForm';
import signUpImage from 'assets/images/login-page-bg.jpg';
import recyclex from 'assets/images/logo-alt.svg';
import SignUpWrapper, {
  Title,
  TitleInfo,
  Text,
  SignUpFormWrapper,
  SignUpBannerWrapper,
} from './SignUp.style';

import { LOGIN_PAGE } from 'settings/constant';

export default function SignUp() {
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
    <SignUpWrapper>
      <SignUpFormWrapper>
        <Logo withLink linkTo="/" src={recyclex} title="Recyclex" />

        <Title>Welcome To Recyclex</Title>
        <TitleInfo>Please Register for your account</TitleInfo>
        <SignUpForm />
        <Divider>Or Register Up With </Divider>
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
          Already Have an Account! <Link to={LOGIN_PAGE}>Login</Link>
        </Text>
      </SignUpFormWrapper>

      <SignUpBannerWrapper>
        <div
          style={{
            backgroundImage: `url(${signUpImage})`,
            backgroundPosition: 'center center',
            height: '100vh',
            backgroundSize: 'cover',
          }}
        />
      </SignUpBannerWrapper>
    </SignUpWrapper>
  );
}
