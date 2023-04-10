import React from 'react'
import delivery1 from '../images/delivery1.png'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const deliver = () => {
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

                <div className="card">
                    {/* <div className="cards">
                        {ShoppingBasketOutlinedIcon}
                        <h4>Fresh Foods</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore enim impedit voluptatum aut sed cumque.</p>
                    </div>
                    <div className="cards">
                        {ShoppingBasketOutlinedIcon}
                        <h4>Fresh Foods</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore enim impedit voluptatum aut sed cumque.</p>
                    </div>
                    <div className="cards">
                        {ShoppingBasketOutlinedIcon}
                        <h4>Fresh Foods</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore enim impedit voluptatum aut sed cumque.</p>
                    </div>
                    <div className="cards">
                        {ShoppingBasketOutlinedIcon}
                        <h4>Fresh Foods</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore enim impedit voluptatum aut sed cumque.</p>
                    </div> */}
                    <Typography variant="subtitle1" component="div">
  Selected: {selectedValue}
</Typography>
<br />
<Button variant="outlined" onClick={handleClickOpen}>
  Open simple dialog
</Button>
<SimpleDialog
  selectedValue={selectedValue}
  open={open}
  onClose={handleClose}
/>
                </div>
            </div>
        </div>
    </>
  )
}

export default deliver