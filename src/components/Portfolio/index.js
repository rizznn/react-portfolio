import React, { useState } from 'react';
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'tech-blog',
            description: 'Node.js/Handlebars/Sequelize-ORM/Express-session',
            link: "https://tech-blog-app-mvc.herokuapp.com/",
            repo: "https://github.com/rizznn/tech-blog"
        },
        {
            name: 'e-commerce-back-end',
            description: 'Node.js/Express.js/Mysql2/Sequelize',
            link: "https://github.com/rizznn/e-commerce-back-end",
            repo: "https://github.com/rizznn/e-commerce-back-end"
        },
        {
            name: 'thoughts-social-network-api',
            description: 'Node.js/Express.js/MongoDB database/Mongoose ODM/moment.js',
            link: "https://github.com/rizznn/thoughts-social-network-api",
            repo: "https://github.com/rizznn/thoughts-social-network-api"
        },
        {
            name: 'note-taker',
            description: 'Node.js/Express.js/uuid/JavaScript',
            link: "https://note-taker-expressjs-spp.herokuapp.com/",
            repo: "https://github.com/rizznn/note-taker"
        },
        {
            name: 'employee-tracker',
            description: 'Node.js/Inquirer/Console.table/Mysql',
            link: "https://github.com/rizznn/employee-tracker",
            repo: "https://github.com/rizznn/employee-tracker"
        },
        {
            name: 'crunch-time',
            description: 'JS/APIs/Materialize',
            link: "https://crunchteam04.github.io/Crunch-Time",
            repo: "https://github.com/crunchteam04/Crunch-Time"
        },
        {
            name: 'readme-builder',
            description: 'Node.js/JS/ES6',
            link: "https://github.com/rizznn/readme-builder",
            repo: "https://github.com/rizznn/readme-builder"
        }
    ]);

        return (
            <section>
                <div>
                    <h1 className="portfolio-title m-5 text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                    <div className="row popup-gallery">
                       
                            {projects.map((project, idx) => (
                                <Project
                                    project={project}
                                    key={"project" + idx}
                                />
                            ))}
                        </div>
                    
                </div>
            </section>
        );
    };
    
    export default Portfolio;