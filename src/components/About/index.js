import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <section className="text-center justify-center about-container container">
            <h1 className="about m-5">{capitalizeFirstLetter(currentPage.name)}</h1>
            <div className="about-p">
                <p>I am a student in University of Toronto taking a coding bootcamp course. 
                The experience I gained during the bootcamp helps me build my skills as I learned the latest technologies taught by skilled and experienced professionals.
                It also enhanced my time management skills as I face challenge every week with tight deadlines while working full time.
                I learned a lot working with different people collaborating in making professional applications with he latest technologies.</p>
            </div>
        </section>

    );
}

export default About;