import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project'

class ProjectList extends Component {
    state = {
        projects: portfolioData,
    }

    render() {
        let {projects} = this.state;
        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">

                </ul>

                <div className="projects">
                    {
                        projects.map(item => {
                            return(
                                <Project key={item.id} item={item.id} name={item.name} languagesIcons={item.languagesIcons} picture={item.picture} source={item.source} info={item.info} site={item.site} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;