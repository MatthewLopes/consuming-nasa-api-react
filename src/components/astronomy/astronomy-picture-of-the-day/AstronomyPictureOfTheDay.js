import React, { Component } from 'react';
import AstronomyPictureOfTheDayCard from './AstronomyPictureOfTheDayCard';
import axios from 'axios';

class AstronomyPictureOfTheDay extends Component{

    constructor() {
        super();

        this.state = {
            astronomyPictureOfTheDay: []
        }
    }

    componentDidMount() {
        const API_KEY = '6IbRKnJO73kH9TIwvNg17Wu9IfD2crUzVZNLG5Mr';
        const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='

        axios.get(END_POINT+API_KEY)
            .then(response => {
                this.setState({
                    astronomyPictureOfTheDay: response.data
                })
            })
            .catch(error => {
                console.log(error, 'failed to fetch data')
            })
    }

    render() {
        const { astronomyPictureOfTheDay } = this.state;
        return (
            <AstronomyPictureOfTheDayCard data={astronomyPictureOfTheDay} />
        )
    }
}

export default AstronomyPictureOfTheDay
