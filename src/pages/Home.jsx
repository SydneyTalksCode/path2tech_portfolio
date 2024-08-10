import { NavLink } from "react-router-dom";
import PlaceholderHero from '../assets/placeholder_hero_background.jpg'

const fullName = 'Sydney Umezurike';
const personalQuote = 'Professional Software Developer';
const professionalSummary = "Welcome to my portfolio! I'm currently pursuing a Master's degree in Cybersecurity and have a strong passion for Full-Stack Development.";

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
        <h2 className="text-4xl mb-2">Hi, I am {fullName}</h2>
        <p className="subsection-paragraph">{personalQuote}</p>
        <NavLink to="/contact">
        Contact Me
        </NavLink>
        <img className="hero-background" src="/src/assets/monitor-1307227_1920.jpg" alt="computers with binary" />
      </section>
      <section className="overview home-subsection">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview:</h2>
        <p className="subsection-paragraph">{professionalSummary}</p>
        <NavLink to="/about">
       Click Here To Learn More About Me
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph">Throughout my career, I have worked on multiple projects that showcase my skills and experience through practical, real-world examples. Each project is briefly described and includes links to code repositories that demonstrate my ability to solve complex problems. If you're interested in exploring my work, please click the link below to visit my project page.</p>
        <NavLink to="/projects">
        View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home