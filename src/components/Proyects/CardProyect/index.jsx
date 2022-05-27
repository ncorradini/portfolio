import { Card, Typography } from '@mui/material';
import ActionButtons from './components/ActionButtons';
import BackgroundImage from './components/BackgroundImage';
import ContentBox from './components/ContentBox';
import InProgress from './components/InProgress';
import TechsHashtags from './components/TechsHashtags';

const CardProyect = ({ proyect }) => {
  return (
    <Card sx={{
      mt: '30px',
      position: 'relative',
      minWidth: { md: '400px', xs: '330px' },
      height: '200px',
      borderRadius: '5px',
      overflow: 'hidden',
      boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.5)',
    }}>
      <BackgroundImage banner={proyect.banner}>
        <ContentBox>
          <Typography sx={{
            color: '#fff',
            fontSize: '22px',
            fontWeight: 'bold',
          }}>
            {proyect.title}
          </Typography>
          <TechsHashtags techs={proyect.techs} />
          <ActionButtons site={proyect.site} code={proyect.code} />
          {proyect.inProgress && <InProgress />}
        </ContentBox>
      </BackgroundImage>
    </Card>
  );
};

export default CardProyect;
