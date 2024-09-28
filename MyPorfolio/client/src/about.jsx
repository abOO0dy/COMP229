export default function About() {
    return (
            <div >
            
                    <div >
                        <img src="../assets/My_picture.jpg" alt="My picture" className='MyImg' />
                    </div>
                <br />
                <div className=''>
                    <p className='MyName' ><b>Abdulrahman Hamid<br />  <span className='MyTitle'> <span ></span>Software Engineer</span></b></p>
                    <p className='AboutMe'>I am A motivated student of Software Engineering Technology, skilled at creating innovative solutions and enhancing user experiences through effective UI/UX design. Experienced in working with various programming languages, technologies and focused on learning and professional growth. A strong communicator and collaborator, honed through academic and work experience.
                    </p>
                    <div >
                        <a className='aboutMeButtons1' href='../assets/Abdulrahman_Resume.pdf' target="blank" type = "application/pdf"><button>Download Resume</button></a>
                        <a href='/contact' className='text-gray-300'><button> Contact</button></a>
                    </div>
                </div>
            </div>
    );
}
