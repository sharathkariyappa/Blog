import React from 'react';
import { Layout, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout>
      <Header style={{ padding: '0 20px', backgroundColor: '#001529' }}>
        <Row justify="space-between" align="middle">
          <Col>
            <div style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>
              Blog
            </div>
          </Col>

          <Col>
            <Button type="link" style={{ color: '#fff',fontSize: '18px',fontWeight: 'bold' }}>
              <Link to="/bloglist">Home</Link>
            </Button>
            <Button type="link" style={{ color: '#fff',fontSize: '18px',fontWeight: 'bold' }}>
              <Link to="/login">Login</Link>
            </Button>
            <Button type="link" style={{ color: '#fff',fontSize: '18px',fontWeight: 'bold' }}>
              <Link to="/signup">Signup</Link>
            </Button>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default Navbar;
