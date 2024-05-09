import React, { Component } from "react";
import './Slider1.css'
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default class Slider2 extends Component {
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
        <h2> Rolling paper & tobacco</h2>
        <Slider {...settings}  >
          <div>
          <Card sx={{ maxWidth: 180, height: 280 }}>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/477466a.jpg?ts=1669987040" alt="Products"/>
      <CardMedia/>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
        Classic Filter Tips &<br></br> Rolling Paper (King Size) - Raw        </Typography>
        <Typography variant="body2" color="text.secondary">
        1 pack (32 + 32 pieces)
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
      <Typography variant="body2" color="text.secondary">
        ₹250
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/480942a.jpg?ts=1669986863" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Brown Single Wide<br></br> Rolling Paper - Raw        </Typography>
        <Typography variant="body2" color="text.secondary">
        1 pack (50 pieces)
      </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
         ₹149
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/480940a.jpg?ts=1669986863" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      White Rolling Paper<br></br> Tips - Elements        </Typography>
        <Typography variant="body2" color="text.secondary">
        1 pack (50 pieces)
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹79
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/477465a.jpg?ts=1669986862" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Brown Classic Slim<br></br> Rolling Paper (King Size) - Raw         </Typography>
        <Typography variant="body2" color="text.secondary">
        1 pack (32 pieces)        
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹149
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/480951a.jpg?ts=1669987321" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      White Slim Rolling<br></br> Paper (King Size) - Elements        </Typography>
        <Typography variant="body2" color="text.secondary">
        1 pack (32 pieces)        
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
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/480951a.jpg?ts=1669987321" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Brown Rolling Paper<br></br> Cones - Stash Pro        </Typography>
        <Typography variant="body2" color="text.secondary">
        6 pieces
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
         ₹90
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/496996a.jpg?ts=1671088623" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      White Slim Rolling<br></br> Paper (King Size) - Elements        </Typography>
        <Typography variant="body2" color="text.secondary">
        1 pack (32 pieces)        
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
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/480951a.jpg?ts=1669987321" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      Brown Rolling Paper<br></br> Cones - Stash Pro      
      </Typography>
        <Typography variant="body2" color="text.secondary">
        6 pieces        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹90
        </Typography>
        <Button size="small" className="CartBtn" variant="outlined">ADD</Button>
      </CardActions>
    </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 180, height: 280 }}>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/app/images/products/sliding_image/480943a.jpg?ts=1669986863" alt="Products"/>
      <CardMedia/>
      <CardContent>
      <Typography variant="body1" color="text.secondary">
      White Connoisseur<br></br> Slim Rolling Paper<br></br>      
      </Typography>
        <Typography variant="body2" color="text.secondary">
        1 pack (50 + 50 pieces)
        </Typography>
      </CardContent>
      <CardActions sx={{ display:"flex", justifyContent: "space-between"}}>
        <Typography variant="body2" color="text.secondary">
        ₹225
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