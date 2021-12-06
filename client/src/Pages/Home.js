import Banner from "../Components/Banner";
import SkillCard from "../Components/SkillCards";

import frontEnd from '../assets/front-end.png';
import backEnd from '../assets/back-end.png';
import databases from '../assets/databases.png';
import Footer from "../Components/Footer";


function Home() {
    return (
      <div>
          <Banner />
           <div className="index-page-cards">
            <SkillCard
            img={frontEnd}
            title="Front-end Development"
            information="Responsive Websites for your Event, Organziation, Small bussiness,
            and everything in between! I am able to provide the site, hosting                        
            responsibilities, and any other updates you need!"
            />

            <SkillCard
            img={backEnd}
            title="Back-end Development"
            information="For those that need their website to 'do something' like: Allow users to 
            log in and out, E-commerce functionality to sell your specialty products, Set-up mailing 
            lists, Keep track of Appointments, or show an interactive schedule"
            />

            <SkillCard
            img={databases}
            title="Database Administration "
            information="Managment or creation of SQL or NoSQL to manage your customers, orders, 
            inventory, and provide reports"
            />
            </div>
            <Footer />
      </div>
    );
  }
  
  export default Home;