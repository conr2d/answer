import { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line import/no-unresolved
import { usePageTags } from '@/hooks';

const Index = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'page_50X' });
  useEffect(() => {
    // auto height of container
    const pageWrap = document.querySelector('.page-wrap');
    pageWrap.style.display = 'contents';

    return () => {
      pageWrap.style.display = 'block';
    };
  }, []);

  usePageTags({
    title: t('http_50X', { keyPrefix: 'page_title' }),
  });
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ flex: 1 }}>
      <div
        className="mb-4 text-secondary"
        style={{ fontSize: '120px', lineHeight: 1.2 }}>
        (=T^T=)
      </div>

      <h4 className="text-center">{t('http_error')}</h4>
      <div className="text-center mb-3 fs-5">{t('desc')}</div>
      <div className="text-center">
        <Button as={Link} to="/" variant="link">
          {t('back_home')}
        </Button>
      </div>
    </Container>
  );
};

export default Index;
