import { MdHome } from 'react-icons/md';
import SidebarLink from './SidebarLink';

const Home = () => {
    return (
        <>
            <SidebarLink text='Home' icon={<MdHome size={24} />} link='/' />
        </>
    )
}

export default Home;