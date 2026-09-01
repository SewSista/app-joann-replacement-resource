import { Link } from "react-router";

function AboutPage() {

return (
        <main>
            <p><Link to="/">Home</Link></p>
                <div>
                    <h1>About this App</h1>
                        <p>Frontend Project created for Launchcode Software Development Program </p>
                </div>
        </main>
    );
};

export default AboutPage;