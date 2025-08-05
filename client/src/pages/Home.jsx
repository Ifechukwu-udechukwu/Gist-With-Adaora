import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
    return ( 
        <>
            <NavBar/>
            <Header/>
            <BlogList/>
            <NewsLetter/>
            <Footer/>
        </>
     );
}
 
export default Home;