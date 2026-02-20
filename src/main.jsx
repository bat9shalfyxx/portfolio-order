import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import App from '../src/components/App/App'
import SEO from "../src/components/SEO";

createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <SEO/>
        <App/>  
    </HelmetProvider>
)
