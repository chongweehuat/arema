import { NavLink } from "@remix-run/react";

const MenuItem = ({blok}) => {
    
    return (
        <NavLink key={blok._uid} to={blok.link.cached_url} className="text-base font-medium text-gray-500 hover:text-gray-900">
            <span className={blok.labelTailwind}>{blok.label}</span>
        </NavLink>
    )
}

export default MenuItem;