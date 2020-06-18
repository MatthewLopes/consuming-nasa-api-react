import React, { Component } from 'react';
import EarthPolychromaticImagingCameraCard from './EarthPolychromaticImagingCameraCard';
import axios from 'axios';

class EarthPolychromaticImagingCamera extends Component{

    constructor() {
        super();
        
        this.state = {};
    }

    componentDidMount() {
        const API_KEY = '6IbRKnJO73kH9TIwvNg17Wu9IfD2crUzVZNLG5Mr';
        const END_POINT = 'https://api.nasa.gov/EPIC/api/natural/images?api_key='
        const numberBetweenZeroAndNineteen = Math.floor(Math.random() * 19);
        console.log(numberBetweenZeroAndNineteen);

        axios.get(END_POINT+API_KEY)
            .then(response => {
                this.setState({
                    earthPolychromaticImagingCamera: response.data[numberBetweenZeroAndNineteen]
                })
            })
            .catch(error => {
                console.error(error, 'failed to fetch data')
            })
    }

    render() {
        if(this.state.earthPolychromaticImagingCamera)
        {
            return (
                <EarthPolychromaticImagingCameraCard data={this.state.earthPolychromaticImagingCamera} />
            )
        }
        else
        {
            return <div>Loading</div>
        }
    }
}

export default EarthPolychromaticImagingCamera