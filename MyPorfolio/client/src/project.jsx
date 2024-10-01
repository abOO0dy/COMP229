
export default function Project() {
    const projects = [
        {
            title: "Lady Bug Smasher Game",
            link: "http://studentweb.cencol.ca/ahamid28/assignment3/assignment3.html",
            image: "/Assets/LadyBug.png",
            description: "Developed an interactive webpage featuring a dynamic ladybug that accelerates with each click, enhancing user engagement and tracking points earned. click on image",
        },
        {
            title: "Interactive Slideshow",
            link: "http://studentweb.cencol.ca/ahamid28/assignment4/assignment4.html",
            image: "/Assets/Interactive_Slideshow.png",
            description: "An image gallery, that fetch images from an API also responsive design for web and mobile browsing. click on image" ,
        },
        {
            title: "Table Creation",
            link: "http://studentweb.cencol.ca/ahamid28/assignment1/assignment1.html",
            image: "/Assets/Table.png",
            description: "A simple table creation functionality that allow user to create table with numbers. click on image",
        },
    ]
    
    return (
        <div className='projectContainer'>
            <h2 className='projectTitle'>  
            My Projects
            </h2>
            <div className='projectList'>
                {projects.map((project, index) => (
                    <div className='projectItem' key={index}>
                        <h1 className='projectItemTitle'>{project.title}</h1>
                        <a href={project.link}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className='projectImage'
                            />
                        </a>
                        <p className='ProjectDescription'>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
