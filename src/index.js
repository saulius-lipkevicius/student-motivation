import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "./style.css"
import './fonts/Gilroy-Bold.ttf';
import * as ServiceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById("root"));
ServiceWorker.unregister();