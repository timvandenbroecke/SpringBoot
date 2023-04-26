import axios from 'axios';


export default class Axios {
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


}