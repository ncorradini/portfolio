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
      m: { sm: '30px auto', xs: '30px auto' },
    }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image="https://s3.amazonaws.com/creativetim_bucket/products/500/original/soft-ui-dashboard-material-ui.jpg?1632195046"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {proyect.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Ver sitio</Button>
        <Button variant="outlined">Ver código</Button>
      </CardActions>
    </Card>
  );
};

export default CardProyect;
