import { MdSearch } from 'react-icons/md';
import SidebarLink from './SidebarLink';

const Search = () => {
    return (
        <>
            <SidebarLink text='Search' icon={<MdSearch size={24} />} />
        </>
    )
}

export default Search;