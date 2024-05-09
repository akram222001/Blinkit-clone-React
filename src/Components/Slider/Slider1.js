import React, { Component } from "react";
import './Slider1.css'
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default class Slider1 extends Component {
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
        <h2> Dairy, Bread & Eggs</h2>
        <Slider {...settings}  >
          <div sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "5px"}} >
          <Card sx={{ maxWidth: 180, height: 280 }}>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/19512a.jpg?ts=1647923044" alt="Products"/>

      <CardMedia/>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
        Amul Taaza Toned<br></br> Fresh Milk
        </Typography>
        <Typography variant="body2" color="text.secondary">
        500 ml
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
      <Typography variant="body2" color="text.secondary">
        ₹26
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/86446a.jpg?ts=1641540332" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
        Mother Dairy Classic<br></br> Curd
        </Typography>
        <Typography variant="body2" color="text.secondary">
        400 g
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
         ₹32
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/10492a.jpg" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
         Amul Mithai Mate<br></br> Condensed Milk
        </Typography>
        <Typography variant="body2" color="text.secondary">
        400 g
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹122
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/329500a.jpg?ts=1662964180, height: 280" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
         Amul Fresh Malai<br></br> Paneer        
         </Typography>
        <Typography variant="body2" color="text.secondary">
        280 g
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹80
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/170a.jpg?ts=1644839308" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
        Amul Cheese Cubes        
        </Typography>
        <Typography variant="body2" color="text.secondary">
        280 g
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹123
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/74360a.jpg?ts=1640346509" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
       Delfrez Nutri White<br></br> Eggs
        </Typography>
        <Typography variant="body2" color="text.secondary">
        6 pieces
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
         ₹60
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/368150a.jpg?ts=1589186401" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Britannia Vitarich<br></br> Sandwich White Bread
        </Typography>
        <Typography variant="body2" color="text.secondary">
        350 g
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹35
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/160a.jpg?ts=1654778815" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Amul Salted Butter        
      </Typography>
        <Typography variant="body2" color="text.secondary">
        500 g
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹265
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/128031a.jpg?ts=165180" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Britannia 100% Whole<br></br> Wheat Bread        
      </Typography>
        <Typography variant="body2" color="text.secondary">
        400 g
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