// assets
import HospitalIcon from '../../assets/hospital.png';
import Logout from '../../assets/logout.png';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const SideBar = () => {

    // handle logout
    const handleLogout = () => {

        // removes cookies
        cookies.remove('token');
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('phoneNumber');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');

        window.location.reload();
    };

    return (
        <div className="channel-list__sidebar">
            <div className="channel-list__sidebar__icon1">
                <div className="icon1__inner">
                    <img src={HospitalIcon} alt="Hospital" width={30} />
                </div>
            </div>
            <div className="channel-list__sidebar__icon2">
                <div className="icon1__inner" onClick={handleLogout}>
                    <img src={Logout} alt="Logout" width={30} />
                </div>
            </div>
        </div>
    );
};

export default SideBar;