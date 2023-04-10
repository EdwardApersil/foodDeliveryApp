import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';


export default function ImageAvatars() {
//   const classes = useStyles();

  return (
    <div className='testmonials'>
      <div className="test">
        {<PersonOutlinedIcon alt="Remy Sharp" />}
        <span>Edward</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo voluptatem, consequuntur nam asperiores sunt porro ea culpa. Laborum, pariatur.</p>
        {< FacebookOutlinedIcon/>} {<AlternateEmailOutlinedIcon/>}
      </div>

      <div className="test">
        {<PersonOutlinedIcon alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
        <span>Edward</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, temporibus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo voluptatem, consequuntur nam asperiores sunt porro ea culpa. Laborum, pariatur.
        </p>
        {< FacebookOutlinedIcon/>}  {<AlternateEmailOutlinedIcon/>}
      </div>

      <div className="test">
        {<PersonOutlinedIcon alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
        <span>Edward</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo voluptatem, consequuntur nam asperiores sunt porro ea culpa. Laborum, pariatur.</p>
        {< FacebookOutlinedIcon/>}  {<AlternateEmailOutlinedIcon/>}
      </div> 
    </div>
  );
}
