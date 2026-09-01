const Footer = () => {

    let thisYear = new Date().getFullYear();

    return (
        <footer>
            <div>&copy; {thisYear} Clever Cloverfield Co.</div>
        </footer>
    );
};

export default Footer;