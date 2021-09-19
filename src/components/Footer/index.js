import React from 'react';

function Footer() {

    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/rizznn/"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/rizzel-nolasco-350a24126/"
        },
        {
            name: "fab fa-stack-overflow",
            link: "https://stackoverflow.com/users/15539132/rizzel"
        }
    ]

    return (
        <section>
            <footer className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        {icons.map(icon =>
                            (
                                <a href={icon.link} key={icon.name} target="_blank" className="render-icons" rel="noopener noreferrer"><i className={icon.name}></i></a>
                            )
                        )}
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Footer;