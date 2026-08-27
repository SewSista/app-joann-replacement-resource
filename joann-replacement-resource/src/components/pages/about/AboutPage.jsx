const AboutPage = ( setCurrentPage ) => {
    return (
        <main>
            <div>
                <h1>About this App</h1>
                    <p>The JoAnn Replacement Resource is here to provide you a digital directory to keep track of businesses that carry the supplies you need.</p>
                        <div>
                            Check out the dashboard: <span onClick={() => setCurrentPage('stores')}></span>
                        </div>
                    <p>Frontend Project created for Launchcode Software Development Program </p>
            </div>
        </main>
    );
};

export default AboutPage