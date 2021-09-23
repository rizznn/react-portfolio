import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import image from '../../assets/photo/Image.jpeg';

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
            <div className="flex about-body">
                <div>
                    <img src={image} className="photo" alt="profile picture"  />
                </div>
                <div className="about-p">
                    <p>I am a student in University of Toronto taking a coding bootcamp course. 
                    The experience I gained during the bootcamp helps me build my skills as I learned the latest technologies taught by skilled and experienced professionals.
                    It also enhanced my time management skills as I face challenge every week with tight deadlines while working full time.
                    I learned a lot working with different people collaborating in making professional applications with he latest technologies.</p>
                    <p>I graduated with a degree of Bachelor of Science in Electronics and Communications Engineering in De La Salle University, Philippines in 2018.</p>
                    <p>I came here to Canada last April 2014 and studied Dental Assisting Chairside Office Level 1 in the May of 2014 and worked for a year and half as a dental assistant. Then I studied Dental Hygiene and took a board exam last 2018.</p>
                    <p>I am currently practicing as a registered dental hygienist in two offices in downtown.
                    </p>
                </div>
            </div>
        </section>

    );
}

export default About;