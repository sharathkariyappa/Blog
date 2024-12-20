import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography, Row, Col, Button } from 'antd';
import axios from 'axios';

const { Title, Paragraph } = Typography;

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('/api/posts')
      .then((response) => setPosts(response.data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div style={styles.container}>
      <Title level={2} style={styles.heading}>
        Blog Posts
      </Title>
      <Row gutter={[16, 16]}>
        {posts.map((post) => (
          <Col xs={24} sm={12} md={8} key={post.id}>
            <Card
              hoverable
              title={post.title}
              bordered={false}
              style={styles.card}
              bodyStyle={styles.cardBody}
            >
              <Paragraph style={styles.summary}>{post.summary}</Paragraph>
              <Button
                type="primary"
                style={styles.button}
                href={`/post/${post.id}`}
              >
                Read More
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={styles.createButtonWrapper}>
        <Button
          type="dashed"
          size="large"
          href="/createpost"
          style={styles.createButton}
        >
          Create New Post
        </Button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  card: {
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cardBody: {
    padding: '16px',
  },
  summary: {
    marginBottom: '16px',
    color: '#595959',
  },
  button: {
    marginTop: '10px',
  },
  createButtonWrapper: {
    textAlign: 'center',
    marginTop: '30px',
  },
  createButton: {
    borderColor: '#40a9ff',
  },
};

export default BlogList;
