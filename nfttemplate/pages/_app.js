import '../styles/globals.css'

// Internal Imports
import { Footer, NavBar } from '@/Components/Componentindex';

const MyApp = ({ Component, pageProps}) => ( 
    <div>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
    </div>
);

export default MyApp;