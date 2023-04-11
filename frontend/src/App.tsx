import React from 'react';
import './App.css';
import ProductGallery from "./product/gallery/ProductGallery";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./static/Header";

import AddView from "./product/addView/AddView";
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from "./product/detail/ProductDetail";
import ChangeView from "./product/changeView/ChangeView";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={"/menu"} element={
                        <ProductGallery/>
                    }/>
                    <Route path={"/product/details/:id"} element={
                        <ProductDetail/>
                    }/>
                    <Route path={"/add"} element={
                        <AddView/>
                    }/>
                    <Route path={"product/edit/:id"} element={
                        <ChangeView/>
                    }/>
                </Routes>
            </BrowserRouter>
            <ToastContainer theme={"dark"}/>
        </div>
    );
}

export default App;
