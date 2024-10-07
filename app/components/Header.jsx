import { useState } from "react";
import { Link, NavLink, useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import { getSection, getSectionItem } from "../utils/section";
import General from "../components/General";
const Header = () => {
  const  {settings, header} = useLoaderData();  
  return (<General content={header} />)
  return (
    <header className="w-full bg-gray-100 px-4 py-2 flex justify-between items-center">
          <div className="">
            
              <span className="sr-only">{getSectionItem(settings,'site-title').text}</span>
              <img
                className="h-20 w-auto sm:h-10 hidden sm:block"
                src={getSectionItem(header,'Header Image').image.filename}
                alt={getSectionItem(settings,'site-title').text}
              />
              <img
                className="h-20 w-auto sm:h-10 sm:hidden"
                src={getSectionItem(header,'Header Image').image.filename}
                alt={getSectionItem(settings,'site-title').text}
              />
            
          </div>
        <nav className="flex space-x-4">
          {getSection(header,'Header menus').item.map(item=>
            (<NavLink key={item._uid} to={item.link.cached_url} className="text-base font-medium text-gray-500 hover:text-gray-900">
              <span className={item.labelTailwind}>{item.label}</span>
              </NavLink>)
          )}
        </nav>
        <div className="flex space-x-2">
        {getSection(header,'Header Action Buttons').item.map(item=>
          (<button className={item.buttonTailwind}>
            <span className={item.labelTailwind}>{item.label}</span>
          </button>)
        )
        }
        </div>
      </header>
  );
};

export default Header;
