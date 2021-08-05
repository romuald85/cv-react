import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-biking"></i>
                    <span>Vélo</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-dumbbell"></i>
                    <span>Musculation/Street workout</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-plane-departure"></i>
                    <span>Voyages</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-book-reader"></i>
                    <span>Lecture</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-lungs"></i>
                    <span>Anatomie</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;