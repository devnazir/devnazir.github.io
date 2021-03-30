import { Fragment, useEffect, useState } from "react"
import '../scss/Projects.scss'

function Projects() {
    console.log("project rendered")
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchDataProjects = async () => {
            const dataProjects = await (await fetch('./projects.json')).json()
            setProjects(dataProjects)
        }
        fetchDataProjects()
    }, [])

    return (
        <Fragment>
            <div className='projects'>
                <h1>Projects</h1>
                {
                    projects.map((project, key) => {
                        return <Cards key={key} data={project} />
                    })
                }
                <div className='github'>
                    <h4><a href="https://github.com/devnazir" target='blank'>Check more projects on my Github</a></h4>
                </div>
            </div>

        </Fragment>
    )
}

function Cards({ data }) {
    console.log("cards rendered")
    return (
        <div className='card'>
            <h3 className='title'>{data.title}</h3>
            <p className='desc'>{data.desc}</p>
            <div className='detail'>
                <p className='source'><a href={data.source} target='blank'>Source Code</a></p>
                <p className='demo'><a href={data.demo} target='blank'>Demo</a></p>
            </div>
        </div>
    )
}

export default Projects