import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App';
import { Auth0Provider} from "@auth0/auth0-react"


const domain =  process.env.REACT_APP_AUTH0_DOMAIN
const clientId= process.env.REACT_APP_AUTH0_CLIENT_ID



ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
