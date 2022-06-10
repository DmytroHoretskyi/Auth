import React from 'react';
import {createRoot} from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store/store";
import {CssBaseline} from "@mui/material";
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <CssBaseline/>
        <Provider store={store}>
            <BrowserRouter>
                    <Routes>
                    <Route path='/*' element = { <App />} />
                    </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
