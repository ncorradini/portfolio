import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CardProyect = ({ proyect }) => {
  return (
    <Card variant="outlined" sx={{
      width: { md: '250px', sm: '80%', xs: '80%' },
      m: { md: '20px 0', sm: '30px auto', xs: '30px auto' },
    }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image={proyect.banner}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {proyect.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" minHeight="80px">
          {proyect.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          target="_blank"
          href={proyect.site}
          variant="contained">
          Ver sitio
        </Button>
        <Button
          target="_blank"
          href={proyect.code}
          variant="outlined">
          Ver código
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardProyect;
