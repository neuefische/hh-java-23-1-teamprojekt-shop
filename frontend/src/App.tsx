import React from 'react';
import './App.css';
import ProductGallery from "./product/gallery/ProductGallery";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./static/Header";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={"/menu"} element={
                        <ProductGallery/>
                    }/>
                </Routes>
            </BrowserRouter>
            <ToastContainer theme={"dark"}/>
        </div>
    );
}

export default App;
