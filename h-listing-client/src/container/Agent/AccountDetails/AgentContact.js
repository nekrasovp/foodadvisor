import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Row from 'components/UI/Antd/Grid/Row';
import Col from 'components/UI/Antd/Grid/Col';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import Loader from 'components/Loader/Loader';
import ContactForm from 'components/ContactForm/ContactFrom';
import useDataApi from 'library/hooks/useDataApi';
import { AgentContactWrapper, ContactDetails } from './AgentDetails.style';
import isEmpty from 'lodash/isEmpty';

const initialValues = {
  email: '',
  message: '',
  contact: '',
  cookieConsent: false,
};

const getContactFormValidation = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is Required!'),
    message: Yup.string().required('Message is required!'),
    contact: Yup.string().required('Contact is required!'),
  });
};

const AgentContact = () => {
  const { data, loading } = useDataApi('/data/agent.json');
  if (isEmpty(data) || loading) return <Loader />;
  const { agent_location, cell_number, email } = data[0];

  const handleSubmit = formProps => {
    console.log(formProps, 'formProps');
    const email = formProps ? formProps.email : '';
    const message = formProps ? formProps.message : '';
    const contact = formProps ? formProps.contact : '';
    const cookieConsent = formProps ? formProps.cookieConsent : false;
    alert(
      `Email : ${email} \n Contact : ${contact} \n Messege : ${message} \n Cookie Consent : ${cookieConsent}`
    );
  };

  return (
    <AgentContactWrapper>
      <Heading content="Send Messege" />
      <Row gutter={30}>
        <Col lg={16}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            render={ContactForm}
            validationSchema={getContactFormValidation}
          />
        </Col>
        <Col lg={8}>
          <ContactDetails>
            <Heading as="h3" content="Phone No" />
            <Text content={cell_number} />
            <Heading as="h3" content="Email" />
            <Text content={email} />
            <Heading as="h3" content="Address" />
            <Text content={agent_location.formattedAddress} />
          </ContactDetails>
        </Col>
      </Row>
    </AgentContactWrapper>
  );
};

export default AgentContact;
