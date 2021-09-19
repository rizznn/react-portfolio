import React from 'react';


function Project({ project }) {
	const { name, repo, link, description } = project;

	return (
		<div className="col-lg-4 col-sm-6">
		<div className="portfolio-box" key={name}>
			<img
				src={require(`../../assets/portfolio/${name}.png`).default}
				alt={name}
				className="img-fluid portfolio-img"
			/>
			<div className="portfolio-box-captionone-project">
				<div className="portfolio-box-caption-content">
				<a href={repo} className="project-category-repo text-faded" target="_blank">
					</a>
					<br />
					<a href={link} className="project-category-link text-faded " target="_blank">{name}</a>{' '}
					
					<p className="project-name">{description}</p>
				</div>
			</div>
		</div>
	  </div>
	);
}

export default Project;