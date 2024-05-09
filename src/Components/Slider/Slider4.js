import React, { Component } from "react";
import './Slider1.css'
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default class Slider5 extends Component {
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
        <h2> Cold Drinks & Juices</h2>
        <Slider {...settings}  >
          <div>
          <Card sx={{ maxWidth: 180, height: 280 }}>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/97250a.jpg" alt="Products"/>
      <CardMedia/>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
        Maaza Mango Drink 1.2 l       
        </Typography>
        <Typography variant="body2" color="text.secondary">
        1.2 L
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
      <Typography variant="body2" color="text.secondary">
        ₹70
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{  maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/480578a.jpg?ts=1663053108" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Paper Boat Swing Lush Lychee Juice       
      </Typography>
        <Typography variant="body2" color="text.secondary">
        600 ml
      </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
         ₹36
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{  maxWidth: 180, height: 280  }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/314a.jpg?ts=1657699524" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Thums Up Soft Drink (750 ml)       
      </Typography>
        <Typography variant="body2" color="text.secondary">
        750 ml
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹40
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{  maxWidth: 180, height: 280  }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/69250a.jpg?ts=1597315565" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Real Activ 100% Orange Juice
        </Typography>
        <Typography variant="body2" color="text.secondary">
        1 l       
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹126
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{  maxWidth: 180, height: 280  }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/484064a.jpg?ts=1653640506" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Bisleri Packaged Water (1 l) - Pack of 2    
      </Typography>
        <Typography variant="body2" color="text.secondary">
        2x1 l       
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹39
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{  maxWidth: 180, height: 280  }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/108932a.jpg?ts=1657699695" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Schweppes Ginger Ale        
      </Typography>
        <Typography variant="body2" color="text.secondary">
        300 ml
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
            <Card sx={{  maxWidth: 180, height: 280  }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/15796a.jpg?ts=1612241410" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Hommade Lemoneez Syrup      
      </Typography>
        <Typography variant="body2" color="text.secondary">
        250 ml       
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹72
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{  maxWidth: 180, height: 280  }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/374687a.jpg?ts=1560326417" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Sting Energy Drink      
      </Typography>
        <Typography variant="body2" color="text.secondary">
        250 ml        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹20
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{  maxWidth: 180, height: 280  }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/480579a.jpg?ts=1663053109" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Paper Boat Swing Zesty Pomegranate      
      </Typography>
        <Typography variant="body2" color="text.secondary">
        600 ml
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹36
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