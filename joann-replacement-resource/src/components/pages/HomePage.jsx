import { Link } from "react-router";

const HomePage = () => {
    return (
        <main>
            <div>
               <h1>Greetings!</h1> 
               <p>
                    Check out the <Link to="/stores">Dashboard</Link> for the stores or learn more on the <Link to="/about">About</Link> page! 
                </p>
                <p>
                    The JoAnn Replacement Resource is here to provide you a digital directory to keep track of businesses that carry the supplies you need. Whether you shop locally or online across the globe, now you don't have to figure out a system to remember where you've sourced materials. We plan on adding new features so keep a look out for more things to come!
                </p>
            </div>
        </main>
    );
};

export default HomePage;