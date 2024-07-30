import React from 'react';
import withPageTransition from '../components/TransitionComponent.jsx';
import { projects } from '/src/assets/projects.js'



function Works() {

    let ProjectElement = projects.map((project) => {
        return (
            <section className='project-element' key={project.id}>
                <h2>{project.name}</h2>
                <a href={project.src} target='_blank' className='project-link'>
                    <img className='project-img' src={project.thumbnail} alt={project.name} />
                </a>
            </section>
        )
    })

    return (
        <div className="works-container" >
            {ProjectElement}
        </div>
    )

}

export default withPageTransition(Works);