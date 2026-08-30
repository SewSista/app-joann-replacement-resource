const HomePage = ({ setCurrentPage }) => {
    return (
        <main>
            <div>
                <button
                type="button"
                onClick={() => setCurrentPage('stores')}>
                    Store Dashboard
                </button>
               
                <button
                type="button"
                onClick={() => setCurrentPage('about')}>
                    About
                </button>       
                
            </div>
        </main>
    );
};

export default HomePage;