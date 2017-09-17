import React from "react";
import ReactDOM from  "react-dom";
import { Provider } from "react-redux";
import Routes from "./routes/Routes";
import store from "./redux/store/store";

const App = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
};

const app = document.getElementById("app");

ReactDOM.render(<App/>, app);

