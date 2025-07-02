import {Link, Outlet} from 'react-router-dom';
const Navigation = () => {
    return (
<>
        <nav className='nav'> 
        <ul>
            <li>
                <link  to='/home'>Home</link>
            </li>
            <li>
                <link  to='/catalog'>Catalog</link>
            </li>
            <li>
                <link  to='/register'>Registreren</link>
            </li>
            <li>
                <link  to='/login'>Login</link>
            </li>
                        <li>
                <link  to='/logout'>Logout</link>
            </li>
            <li>
                <link  to='/review'>review</link>
            </li>
        </ul>
        </nav>
        <Outlet />
        </>

    );
}

export default Navigation;