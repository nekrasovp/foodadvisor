import React from 'react';
import { Field, Form } from 'formik';
import {
  AntInput,
  AntTextArea,
  AntCheckbox,
} from 'components/UI/Antd/AntdInputWithFormik';
import Button from 'components/UI/Antd/Button/Button';
import Row from 'components/UI/Antd/Grid/Row';
import Col from 'components/UI/Antd/Grid/Col';
import HtmlLabel from 'components/UI/HtmlLabel/HtmlLabel';
import FormWrapper, { FieldWrapper } from './ContactForm.style';

const ContactForm = ({ values, submitCount, handleSubmit }) => (
  <FormWrapper>
    <Form onSubmit={handleSubmit}>
      <Field
        component={AntTextArea}
        name="message"
        type="text"
        size="large"
        label="Your Message"
        submitCount={submitCount}
        value={values.message}
        hasFeedback
      />

      <Row gutter={30}>
        <Col md={12}>
          <Field
            component={AntInput}
            name="email"
            type="email"
            size="large"
            label="Your Email"
            submitCount={submitCount}
            value={values.email}
            hasFeedback
          />
        </Col>
        <Col md={12}>
          <Field
            component={AntInput}
            name="contact"
            type="number"
            size="large"
            label="Your Contact"
            value={values.contact}
            submitCount={submitCount}
            hasFeedback
          />
        </Col>
      </Row>

      <FieldWrapper className="field-container">
        <Field
          component={AntCheckbox}
          id="cookieConsent"
          name="cookieConsent"
          submitCount={submitCount}
          value={values.cookieConsent}
        />
        <HtmlLabel
          htmlFor="cookieConsent"
          content="Save my email in the broweser fro the next time I contact"
        />
      </FieldWrapper>

      <Button
        className="signin-btn"
        type="primary"
        htmlType="submit"
        size="large"
      >
        Submit
      </Button>
    </Form>
  </FormWrapper>
);

export default ContactForm;
