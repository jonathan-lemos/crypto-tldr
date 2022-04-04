import * as React from "react";
import "./page.sass";
import Navbar from "../components/navbar";
import Helmet from "react-helmet";

export const Page = ({children}: React.PropsWithChildren<{}>) => {
    return <>
        <Helmet>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
                  integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
                  crossOrigin="anonymous"/>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=Open+Sans:ital,wght@0,400;0,700;1,400&family=VT323&display=swap"/>
        </Helmet>

        <Navbar />
        <div className="page">
            {children}
        </div>
    </>;
};

export default Page;
