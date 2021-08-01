import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: 'HTML', xp: 2},
            {id: 2, value: 'CSS', xp: 2},
            {id: 3, value: 'PHP', xp: 2},
            {id: 4, value: 'Javascript', xp: 2},
            {id: 5, value: 'Wordpress', xp: 2},
            {id: 6, value: 'MySql', xp: 2},
            {id: 7, value: 'Git', xp: 2},
        ],
        frameworks: [
            {id: 1, value: 'Symfony', xp: 1.6},
            {id: 2, value: 'React', xp: 1.5},
            {id: 3, value: 'Vue js', xp: 1.4},
            {id: 4, value: 'Bootstrap', xp: 1.7},
        ]
    }
    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="frameworks & bibliothèques"
                />
            </div>
        );
    }
}

export default Languages;