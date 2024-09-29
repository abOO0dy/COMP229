/* 
File Name: Home.jsx 
Student Name: Abdulrahman Hamid
Student ID: 301287336 
Created: 24-09-2024
  
*/
import { Link } from 'react-router-dom';
import '../src/assignment1.css'
export default function Home() {
    return (
                <div className="content">
                    <h3><b>Welcome to My Portfolio website</b></h3>
                    <p className="missionStatement">my mission is to share my passion for technology and innovation, <br /> also to inspire others through my creative work.</p>
                    <p className="btn btn-primary"><Link to="/about">Know More About ME! <br />
                    Click Here!</Link> </p>
                    <p className="btn btn-primary"><Link to="/project">Projects</Link></p>
                </div>

    );
}
