import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import './pages.css';


class Home extends Component {

    render () {
        return (
            
                <div>
                    <Navbar />
                        <div className="container">
                                <div className="checkboxes">

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" for="defaultCheck1">
                                                    Star Wars Episode IV – A New Hope
                                            </label>
                                            </div>
                                            
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" for="defaultCheck1">
                                                    Star Wars Episode V – The Empire Strikes Back
                                            </label>
                                            </div>
                                            

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" for="defaultCheck1">
                                                    Star Wars Episode VI – Return of the Jedi
                                            </label>
                                            </div>
                                            
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" for="defaultCheck1">
                                                    Star Wars Episode I – The Phantom Menace
                                            </label>
                                            </div>
                                            
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" for="defaultCheck1">
                                                    Star Wars Episode II – Attack of the Clones
                                            </label>
                                            </div>
                                            
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" for="defaultCheck1">
                                                    Star Wars Episode III – Revenge of the Sith
                                            </label>
                                            </div>
                                            
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" for="defaultCheck1">
                                                    Star Wars Episode VII – The Force Awakens
                                            </label>
                                            </div>
                                            
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled />
                                                <label className="form-check-label" for="defaultCheck1">
                                                    Star Wars Episode IX
                                            </label>
                                            </div>

                            </div>
                        </div>
                    <Footer />
                </div>
        );

    }
}

export default Home