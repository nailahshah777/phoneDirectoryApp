import React from 'react';
import { ReactDOM } from 'react-dom';
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useParams } from 'react-router';
export function withRouter (Child) {
    return (props)=> {
         //const location = useLocation();
         const history = useNavigate();
         //const params=useParams()
         // other relevant props
 return <Child {...props} history={history}/>;
   }
}
