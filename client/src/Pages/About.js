import '../About.css';
import Headshot from '../assets/headshot.png'
function About() {
    return (
        <div className="about-wrapper">
            <h1 className="about-h2">About Me</h1>
            <div className="about-flex-container">
                <div className="about-img-container">
                    <img className="about-img" src={Headshot} alt="" />
                </div>
                <div className="about-p-container">
                    <p className="about-p">Welcome to my Portfolio!</p>
                    <p className="about-p">I'm a Fullstack Web Developer from Vancouver BC. I took a 
                                            coding course in University before graduating. After getting some work 
                                            expereience with one of Vancouver's premiere employers, STEMCELL Technologies,
                                            I decieded to invest in my technical skillset by learning how to code.
                    </p>
                    <p className="about-p">I am a graduate of the Software Systems Developer program at BCIT. The Software Systems Developer program features an accelerated, 
                                            project-based learning environment to prepare students for a career as a full-stack web developer. The 8-month program provides a 
                                            strong foundation in multiple emerging web and mobile application development tools and technologies. It is completed with a 4 week
                                            Industry Project working hands on building Production Application as needed by the Host                                            
                    </p>

                    <p className="about-p">Outside of coding, I love sports and reading. I enjoy staying in shape and have a sport for every almost every season. Golfing in the summer, 
                                            lacrosse in the fall, and skiing in the winter. I also enjoy trying my hand in the kitchen whenever i find the inspiration.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About