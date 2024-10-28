import {FaCode, FaDatabase, FaPlug } from 'react-icons/fa'
export default function Services() {
        const services = [
            {
              title: "Web Application Development",
              description: "Develop and design flexible and scalable web applications using cutting-edge frameworks and technologies.",
              icon: <FaCode />
            },
            {
              title: "C# Application Development and Integration",
              description: "Develop and integrate robust C# applications to ensure efficient and seamless system operations",
              icon: <FaPlug />
            },
            {
              title: "Database Management",
              description: "Design, implement, and maintain efficient and secure relational and NoSQL databases.",
              icon: <FaDatabase />
            },
          ]
          
 return (

            <div>
              <h2 className='MyServices'>My <span className='text-[rebeccapurple]'>Services</span></h2>
              <div className='gridMyServices'>
                {services.map((service, index) => (
                  <div key={index} className='gridMapping'>
                    <div className='serviceMapping'>
                      <span className='serviceCounter'>0{index + 1}</span>
                      <span className='serviceIcon'>{service.icon}</span>
                    </div>
                    <h2 className='serviceTitle'>{service.title}</h2>
                    <p className='serviceDescription'>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
        
    );
}
