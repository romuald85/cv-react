import React from 'react';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list">
                <ul>
                    <li>
                        <i className="fas fa-check-square"></i> Anglais intermédiaire
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i> Github/Gitlab
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i> Méthodes agiles
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i> Heroku/Netlify
                    </li>
                </ul>
                <ul>
                    <li>
                        <i className="fas fa-check-square"></i> Tests unitaires (TDD)
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i> API Platform
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i> Sass
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i> Trello
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;