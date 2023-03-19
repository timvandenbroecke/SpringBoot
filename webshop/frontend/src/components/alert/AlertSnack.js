import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from "react-redux";
import {alert} from "../../redux/actions";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertSnack() {
    const { t, i18n } = useTranslation("common");
    const dispatch = useDispatch()
    const obj = useSelector(state => state);
    const {openAlert, messageAlert, severityAlert} = obj.alert;

    const handleClose = (event, reason) => {
      const alertData = {openAlert: false}

      if (reason === 'clickaway') {

        dispatch(alert({openAlert: false, messageAlert: messageAlert, severityAlert: severityAlert}));
        return;
      }
      dispatch(alert({openAlert: false, messageAlert: messageAlert, severityAlert: severityAlert}));
    }


    
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
        <Alert onClose={handleClose} severity={severityAlert} sx={{ width: '100%' }}>
          {t(messageAlert)}
        </Alert>
      </Snackbar>
    </Stack>
  );
}