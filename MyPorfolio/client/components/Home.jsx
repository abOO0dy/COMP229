/* 
File Name: Home.jsx 
Student Name: Abdulrahman Hamid
Student ID: 301287336 
Created: 24-09-2024
  
*/

import '../assets/assignment1.css'
export default function Home() {
    return (
                <div className="content">
                    <h3><b>Welcome to My Portfolio website</b></h3>
                    <p className="missionStatement">my mission is to share my passion for technology and innovation, <br /> also to inspire others through my creative work.</p>
                    <p><a className="btn btn-primary" href="/About"> Know More About ME!
                        <br />
                        Click Here!</a></p>
                    <p><a className="btn btn-primary" href="/project">Projects</a></p>
                </div>

    );
}
