import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
    // Fetch current theme name from store
    let currentTheme = useSelector(state => state.currentTheme);
    // Fetch current theme name from local storage if available
    if (localStorage.getItem("currentTheme")) {
        currentTheme = localStorage.getItem("currentTheme");
    }
    return <>
        <div className="accordion" id="accordion" data-bs-theme={currentTheme}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Simplest ToDo Features
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                    <div className="accordion-body">
                        <ul>
                            <li>Dark Theme Enabled</li>
                            <li>Add ToDo</li>
                            <li>View ToDo List</li>
                            <li>Mark ToDo As Done</li>
                            <li>Delete Finished ToDo</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Pending Features
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul>
                            <li>Suggest Something</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default About;
