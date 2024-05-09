import React, { Component } from "react";
import './Slider1.css'
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default class Slider6 extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
          slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 580,
          settings: {
          slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="ProductsCard">
        <h2> Candies & Gums</h2>
        <Slider {...settings}  >
          <div>
          <Card sx={{ maxWidth: 180}}>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/363211a.jpg?ts=1654260452" alt="Products"/>
      <CardMedia/>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
        Impact Sugar Free Mint Candy (Fresh Mints)      
        </Typography>
        <Typography variant="body2" color="text.secondary">
        14 g
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
      <Typography variant="body2" color="text.secondary">
        ₹120
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180}}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/481433a.jpg" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Center Fresh Xtra Peppermint Flavour.. 
      </Typography>
        <Typography variant="body2" color="text.secondary">
        20 g
      </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
         ₹10
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/363210a.jpg?ts=1654260452" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Impact Sugar Free Mint Candy (Orange)     
      </Typography>
        <Typography variant="body2" color="text.secondary">
        14 g
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹120
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/363209a.jpg?ts=1654260452" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Impact Sugar Free Mint Candy (Strawberry)
        </Typography>
        <Typography variant="body2" color="text.secondary">
        14 g       
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹120
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/440073a.jpg?ts=1641457885" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Orbit Mixed Fruit Flavour Chewing Gum (Sugar Free)
      </Typography>
        <Typography variant="body2" color="text.secondary">
        22 g     
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹45
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/458221a.jpg" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Center Fresh Chewy Mints Spearmint Flavour..      
      </Typography>
        <Typography variant="body2" color="text.secondary">
        33 g
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
         ₹48
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/440074a.jpg?ts=1662982069" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Wrigley's Doublemint Lemonmint Candy     
      </Typography>
        <Typography variant="body2" color="text.secondary">
        32.55 g      
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹48
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/440075a.jpg?ts=1662982069" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Wrigley's Doublemint Peppermint Candy     
      </Typography>
        <Typography variant="body2" color="text.secondary">
       30 g       
       </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹50
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/105159a.jpg?ts=1662982068" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Orbit Spearmint Flavour Sugar Free..  
      </Typography>
        <Typography variant="body2" color="text.secondary">
        22 g
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹50
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>                              
        </Slider>
      </div>
    );
  }
}