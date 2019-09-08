import React, { Component } from 'react'
import StoryItem from './StoryItem';
import apiUrl from '../../src/apiConfig'
import axios from 'axios'
export default class StoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          stories: []
        };
      }
      componentDidMount() {
        axios.get(`${apiUrl}/stories`)
          .then((response) => {
            this.setState({ stories: response.data.stories});
          })
          .catch((err) => {
            console.log(err);
          })
        }
    render() {
        const allStories = this.props.stories.map((story, index) => {
            return <StoryItem story={story} key={index} /> 


        })
        return allStories
    }
}
