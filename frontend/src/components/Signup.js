import React from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';

const SignUp = () => {
  const onFinish = (values) => {
    console.log('SignUp Success:', values);
  };

  return (
    <Row justify="center" align="middle" style={styles.row}>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          title="Sign Up"
          bordered={false}
          style={styles.card}
        >
          <Form
            name="signup"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }, { type: 'email', message: 'Please input a valid Email!' }]}
            >
              <Input
                placeholder="Email"
                size="large"
                style={styles.input}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password
                placeholder="Password"
                size="large"
                style={styles.input}
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your Password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords do not match!');
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Confirm Password"
                size="large"
                style={styles.input}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                style={styles.button}
              >
                Sign Up
              </Button>
            </Form.Item>

            <Form.Item>
              <Button type="link" block style={styles.loginLink}>
                Already have an account? Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

const styles = {
  row: {
    height: '100vh',
    backgroundColor: '#f0f2f5',
    margin: 0,
  },
  card: {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  input: {
    borderRadius: '8px',
    marginBottom: '15px',
    fontSize: '16px',
  },
  checkbox: {
    fontSize: '14px',
  },
  button: {
    borderRadius: '8px',
    backgroundColor: '#1890ff',
    borderColor: '#1890ff',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  loginLink: {
    color: '#1890ff',
    fontWeight: 'bold',
  },
};

export default SignUp;
