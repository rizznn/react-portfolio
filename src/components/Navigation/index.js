import React, { useEffect } from "react";
import {capitalizeFirstLetter} from '../../utils/helpers'


function Navigation(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;
    console.log(currentPage)

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
      }, [currentPage]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a className="header-name" data-testid="link" href="/">
                Rizzel Nolasco
                </a>
            </h2>
            <nav className="nav-section flex">
                <ul className="flex-row ul-section">
                    <li className="about-nav mx-2">
                        <a data-testid="about" href="#about">
                        About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                    {pages.map((Page) => (
                    <li className={`mx-1 ${
                        currentPage.name === Page.name && 'navActive'
                        }`}  key={Page.name}>
                        <span onClick={() => {setCurrentPage(Page)}}>
                            {capitalizeFirstLetter(Page.name)}
                        </span>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;