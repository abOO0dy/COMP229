export default function Contact() {
    return (
        <div>

            <h2 className="contact-form">Contact Me</h2>
            <p>The quickest way to reach me is through my phone number: +1 (437) 928-9399 or email: ahamid28@mycentennialcollege.ca. <br /><br />Otherwise, please fill out the form below.</p>
            <form action="./">


                <label >First Name:</label><br />
                <input type="text" className="firstName" name="firstName" placeholder="John" /><br /><br />

                <label >Last Name:</label><br />
                <input type="text" className="lastName" name="lastName" placeholder="Doe" /><br /><br />

                <label >Phone:</label><br />
                <input type="tel" className="phone" name="phone" placeholder="(437)-555-5544" size="20" /><br /><br />

                <label >Email:</label><br />
                <input type="email" className="email" name="email" placeholder="12as@gmail.com" size="20" /><br /><br />


                <label >Message:</label><br />
                <textarea rows="4" cols="50" placeholder="Comments"></textarea><br /><br />

                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>
    );
}
