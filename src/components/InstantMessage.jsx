import React, {useState, forwardRef} from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

//instant message service, allows a snackbox popup 
const InstantMessage = (props) =>  {

        const [open, setOpen] = useState(true); 
        //Leave this true since we are \not using a button
      console.log(props)
        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
        
            setOpen(false);
          };

          //snackbar visual characteristics, defines if error or success to be used
    return (
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose} sx={{width: '90%'}}>
          <Alert onClose={handleClose} severity={props.type ? "success":"error"} sx={{width: '100%'}}>{props.message}</Alert>
      </Snackbar>
    )
}

export default InstantMessage