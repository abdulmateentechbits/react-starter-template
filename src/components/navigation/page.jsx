import { useEffect } from 'react';
import Main from '../layouts/main';

function Page({ children, title, protect }) {
    // set page title
    useEffect(() => {
        document.title = title ? `Starter | ${title}` : 'Starter';
    }, [title]);

    return (
        <Main>{children}</Main>
    );
}


export default Page;