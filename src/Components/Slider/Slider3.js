import React, { Component } from "react";
import './Slider1.css'
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default class Slider3 extends Component {
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
        <h2>Snacks & Munchies</h2>
        <Slider {...settings}  >
          <div>
          <Card sx={{  maxWidth: 180, height: 280 }}>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/432818a.jpg?ts=1669469997" alt="Products"/>
      <CardMedia/>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
        Doritos Cheese Nachos   
        </Typography>
        <Typography variant="body2" color="text.secondary">
        60 g
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
      <Typography variant="body2" color="text.secondary">
        ₹30
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{  maxWidth: 180, height: 280  }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/54056a.jpg?ts=1660032971" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Act II Golden Sizzle Popcorn (Pressure Cooker)        
      </Typography>
        <Typography variant="body2" color="text.secondary">
        30 g
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
            <Card sx={{  maxWidth: 180, height: 280  }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/138835a.jpg?ts=1590758401" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Lijjat Plain Urad Papad      
      </Typography>
        <Typography variant="body2" color="text.secondary">
        180 g
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹61 <br></br><span style={{ textDecoration: "line-through" }}>₹68</span>
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{  maxWidth: 180, height: 280  }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/445825a.jpg" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Open Secret<br></br> Chocolates Almonds..        
      </Typography>
        <Typography variant="body2" color="text.secondary">
        30 g        
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹38<br></br><span style={{ textDecoration: "line-through" }}>₹40</span>
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{  maxWidth: 180, height: 280  }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/372136a.jpg?ts=1588943981" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Chheda's Bhakarwadi Namkeen        
      </Typography>
        <Typography variant="body2" color="text.secondary">
        170 g       
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹49<br></br><span style={{ textDecoration: "line-through" }}>₹60</span>
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{  maxWidth: 180, height: 280  }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/372138a.jpg?ts=15889440481" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Chheda's Farsan Mixture Namkeen  
      </Typography>
        <Typography variant="body2" color="text.secondary">
        170 g 
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
         ₹42<br></br><span style={{ textDecoration: "line-through" }}>₹55</span>
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{  maxWidth: 180, height: 280  }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/289152a.jpg?ts=1668146939" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Lay's Hot n Sweet<br></br> Chilli Flavour Chips        
      </Typography>
        <Typography variant="body2" color="text.secondary">
        27 g       
        </Typography>
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
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/116569a.jpg?ts=1625805784" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Balaji Chat Chaska<br></br> Potato Chips     
      </Typography>
        <Typography variant="body2" color="text.secondary">
        35 g        
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
            <Card sx={{  maxWidth: 180, height: 280  }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/385315a.jpg?ts=1631597807" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Mr. Makhana Lime &<br></br> Chilli Makhana      
      </Typography>
        <Typography variant="body2" color="text.secondary">
        25 g
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹38
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