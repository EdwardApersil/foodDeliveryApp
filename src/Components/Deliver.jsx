import * as React from 'react';
import delivery1 from '../images/delivery1.png';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import RouteIcon from '@mui/icons-material/Route';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';


const deliver = () => {

    const icons = {
        fontSize: '50px',
        color: 'green',
        cursor: 'pointer',
        '&:hover': {
            color: 'brown'
        }
    }


    return (
      <>
          <div className="delivery">
              <div className="img">
                  <img src={delivery1} alt="delivery guy" />
              </div>
  
              <div className="delivery-content">
                  <h2>
                      Gvery could be your daily services
                  </h2>
                  <p>
                      Gvery is a great place for you to get your daily services.
                  </p>
  
                  <div className="deliveryCards">
                       <div className="all-cards">
                       <div className="d-cards">
                          {<ShoppingBasketOutlinedIcon style={icons}/>}
                          <h4>Fresh Foods</h4>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore enim impedit voluptatum aut sed cumque.</p>
                      </div>
                      <div className="d-cards">
                          {<RouteIcon style={icons}/>}
                          <h4>Fresh Foods</h4>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore enim impedit voluptatum aut sed cumque.</p>
                      </div>
                      <div className="d-cards">
                          {<DeliveryDiningOutlinedIcon style={icons}/>}
                          <h4>Fresh Foods</h4>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore enim impedit voluptatum aut sed cumque.</p>
                      </div>
                      <div className="d-cards">
                          {<PaymentsOutlinedIcon style={icons}/>}
                          <h4>Fresh Foods</h4>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore enim impedit voluptatum aut sed cumque.</p>
                      </div> 
                       </div>
                  </div>
              </div>
          </div>
      </>
    )
  }
  
  export default deliver