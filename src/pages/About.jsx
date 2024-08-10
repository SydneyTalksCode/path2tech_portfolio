import { NavLink } from 'react-router-dom';
// import PlaceholderImage from '../assets/placeholder_image.png';

// Replace these variables with your information
const firstName = 'Sydney';
const jobTitle = "Master's Degree Student";
const company = 'Northeastern University';
const mainDuty = "Cybersecurity";
const jobLocation = 'Boston, MA';
const briefJobDescription = "I'm studying computer science with an emphasis on cybersecurity";
const careerObjective = 'My goal is to work on creating innovative sites and safeguarding them';
const personalLife = "As a first-generation Nigerian-American from Baltimore, I've been shaped by my parents' immigrant experience and their emphasis on education as a path to success. Growing up in an urban environment, I became acutely aware of the digital divide and its impact on underprivileged youth. This awareness, combined with my academic drive and professional experience in media production, has fueled my passion for technology and social advocacy. I'm currently pursuing a Master's degree in Cybersecurity at Northeastern University, maintaining a 3.85 GPA. My ultimate aspiration is to found a non-profit organization that addresses cyberbullying and promotes digital literacy among inner-city youth. I envision creating a safe haven that equips young people with essential online safety skills and provides mental health support. My personal mission intertwines technology and social impact, aiming to bridge the gap between underprivileged communities and the digital world. I'm driven by a desire to empower the next generation, ensuring they have the tools and knowledge to thrive in an increasingly digital society. This goal reflects my commitment to community service and my belief in education as a powerful force for positive change.";
const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src="/src/assets/headshot.JPG" alt="headshot" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} studying {mainDuty} attending school at, {company} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;