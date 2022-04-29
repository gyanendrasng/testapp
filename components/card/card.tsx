import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Add from '@mui/icons-material/Add';

interface Props {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}
export default function Cards(props: Props) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.image}
        alt="green iguana"
      />
      <Typography gutterBottom variant="h6" component="div">
        {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.description}
      </Typography>
      <CardActions>
        <Typography>$ {props.price}</Typography>
        <IconButton aria-label="add">
          <Add />
        </IconButton>
      </CardActions>
    </Card>
  );
}
