import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Pdf from "../../assets/resume/RESUME- RIZZEL NOLASCO, Full Stack Developer.pdf";

function Resume() {
    const [pages] = useState([
        {
            name: "resume"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    return (
        <section className="resume-container">
            <div className="">
                <div >
                    <div >
                        <h1 className="resume-title m-5 justify-center text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <div className="skills">
                            <h3>Front-end Proficiencies</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Git</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                            <h3>Back-end Proficiencies</h3>
                            <ul>
                                <li>APIs</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySQL, Sequelize, SQLite</li>
                                <li>MongoDB, Mongoose</li>
                                <li>REST</li>
                                <li>MERN Stack</li>
                            </ul>
                           </div>
                        <p className="text-center">
                            <a href={Pdf} className="my-resume  " download>Download My Resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
