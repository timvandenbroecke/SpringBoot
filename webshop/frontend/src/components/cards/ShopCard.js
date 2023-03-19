import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export default function ShopCard({item}) {

  const { t, i18n } = useTranslation("common");

  const Buy = () => {
    console.log("Buy");
  }

  return (
    <div className='shopcard_container'>
      <Card style={{minWidth: 250}} className='card'>
        <CardMedia
          component="img"
          alt="images"
          height="140"
          image={item.image}
        
        />
        <CardContent  sx={{
            
            width: "200px"
          }}>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {"€ " + item.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" onClick={Buy}>{t("ADD_CART")}</Button>
        </CardActions>
      </Card>
    </div>
    
  );
}