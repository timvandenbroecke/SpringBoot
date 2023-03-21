import axios from 'axios';
import {alert} from '../redux/actions';
import {ERR_NETWORK, SEVERITY_ERROR, ERR_BAD_REQUEST, LOGIN_EXCEPTION, TRANSACTIONAL_EXCEPTION, REGISTER_EXCEPTION, BAD_REQUEST} from "../constants/AlertConstants";


class Axios {
    constructor(props){

        this.dispatch = props;
        const token = localStorage.getItem("token");
    

        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';

        if(!token){
          axios.defaults.headers.common = {'Access-Control-Allow-Origin': '*'}
        }else{
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`,'Access-Control-Allow-Origin': '*'}

        }
        
        
        this.instance = axios.create({
            baseURL:'http://localhost:8080/'
        });

        this.errorSeverity = "";
        this.errorCode = "";

        this.response = {};
        
    }

    // Handles error codes if the backend catches error and sends a json message wit param "message"
    errorMessage(code){
        console.log(code);

        switch(code){
            case ERR_NETWORK:
                this.errorCode = ERR_NETWORK;
                this.errorSeverity = SEVERITY_ERROR;
                break;
            case ERR_BAD_REQUEST:
                this.errorCode = ERR_BAD_REQUEST;
                this.errorSeverity = SEVERITY_ERROR;
            case BAD_REQUEST:
                this.errorCode = BAD_REQUEST;
                this.errorSeverity = SEVERITY_ERROR;

            case LOGIN_EXCEPTION:
                this.errorCode = LOGIN_EXCEPTION;
                this.errorSeverity = SEVERITY_ERROR;
                break;
            case TRANSACTIONAL_EXCEPTION:
                this.errorCode = TRANSACTIONAL_EXCEPTION;
                this.errorSeverity = SEVERITY_ERROR;
                break;
            case REGISTER_EXCEPTION:
                this.errorCode = REGISTER_EXCEPTION;
                this.errorSeverity = SEVERITY_ERROR;
            default:
            
            return;
        }
    }

    
    post(api, data) {
        
        return this.instance.post(api, data).then(res => {

            return res.data;

        }).catch(error => {
            this.errorMessage(error.code);
            if(error.response.data.message){ 
                this.errorMessage(error.response.data.message);
            }

            this.dispatch(alert({openAlert: true, messageAlert: this.errorCode, severityAlert: this.errorSeverity}));
            console.log("Error: ", error);
        });
    }

    get(api){

        return this.instance.get(api).then(res => {

            return res.data;

        }).catch(error => {
         
            this.errorMessage(error.code);

            this.dispatch(alert({openAlert: true, messageAlert: this.errorCode, severityAlert: this.errorSeverity}));
            console.log("Error: ", error);
        });

    }



}

export default Axios