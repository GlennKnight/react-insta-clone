import { MdNotifications } from 'react-icons/md';
import SidebarLink from './SidebarLink';

const Notifications = () => {
    return (
        <>
            <SidebarLink text='Notifications' icon={<MdNotifications size={24} />} />
        </>
    )
}

export default Notifications;