import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default function NavigationLink({ path, icon }) {
	return (
		<NavLink
			to={path}
			className={({ isActive }) =>
				isActive ? 'header__nav-element active' : 'header__nav-element'
			}
		>
			<FontAwesomeIcon icon={icon} className="header__nav-icon" />
		</NavLink>
	);
}
