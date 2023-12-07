import { MdCreate } from 'react-icons/md';
import SidebarLink from './SidebarLink';

const Create = () => {
    return (
        <>
            <SidebarLink text='Create' icon={<MdCreate size={24} />} />
        </>
    )
}

export default Create;