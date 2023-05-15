import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "./style.css"
import './fonts/Gilroy-Bold.ttf';

import './i18n.js'

import * as ServiceWorker from './serviceWorkerRegistration';

ReactDOM.render(
    <Suspense fallback={(<div>Loading ~~~</div>)}>
        <App />
    </Suspense>
    , document.getElementById("root"));
ServiceWorker.unregister();