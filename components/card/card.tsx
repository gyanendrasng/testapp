import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

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
    // <div className={Styles.card}>
    //   <div className={Styles.image}>
    //     <Image width="fill" height="fill" src={props.image} alt="nope" />
    //   </div>
    //   <div></div>
    // </div>
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
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
