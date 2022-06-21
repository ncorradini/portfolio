import { Card, Typography } from '@mui/material';
import ActionButtons from './tools/ActionButtons';
import BackgroundImage from './tools/BackgroundImage';
import ContentBox from './tools/ContentBox';
import InProgress from './tools/InProgress';
import TechsHashtags from './tools/TechsHashtags';

const CardProyect = ({ proyect }) => {
  return (
    <Card
      sx={{
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
