import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);
const [state, setstate] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
function  onclick() {
       setstate(true)
       setTimeout(() => {
        setstate(false)
       }, 2000);
  }
  return (
    <>
  
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar style={{ color:" wheat",fontWeight:900, width:"50px", height:"50px"}} sx={{ bgcolor: red[600] }} aria-label="recipe">
           Y&#9829;K
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.subtitle}   
      />
      <CardMedia
        onMouseDown={onclick}
        component="img"
        
        height="194"
        image={props.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
         {props.name}
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
       
        <CardContent>
          
          <Typography paragraph>{props.pgraf}</Typography>
          <Typography paragraph>
          
          </Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography paragraph>
          
          </Typography>
          <Typography>
         
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    {
        state?
        <div  onMouseDown={()=>setstate(false)}  style={{position:"fixed",top:"0px",left:"0px",width:"100vw",height:"100vh"}}>
            <img style={{ borderRadius:"15px", width:"100%",height:"100%"}}  src={props.image} alt="" />
            </div>:null
    }
    </>
  );
 
}
