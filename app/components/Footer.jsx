import { useState } from "react";
import { Link, NavLink, useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import { getSection, getSectionItem } from "../utils/section";

const Footer = () =>{
  const  {settings,footer} = useLoaderData();
  const menus=getSection(footer,'Footer menus');
  const renderMenu = (n)=>(<a href={menus.item[n].link.cached_url} className="text-gray-600 hover:text-indigo-800">{menus.item[n].label}</a>);
  return (
    <footer className="bg-gray-100 w-full mt-auto py-8">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4"> 

      {/* Footer Left Section */}
      <div className="mb-6 md:mb-0 md:mr-auto"> {/* Push logo to the left */}
        <span className={getSectionItem(footer,'Footer Logo').titleTailwind}>{getSectionItem(footer,'Footer Logo').title}</span>
        <img
          className={getSectionItem(footer,'Footer Logo').imageTailwind}
          src={getSectionItem(footer,'Footer Logo').image.filename}
          alt={getSectionItem(settings,'site-title').text}
        />
      </div>

      {/* Footer Links */}  
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-12 text-center md:text-left mb-6 md:mb-0"> {/* Added margin-bottom */}
        
        <div>
          <ul className="space-y-1">
            <li>{renderMenu(0)}</li>
            <li>{renderMenu(1)}</li>
            <li>{renderMenu(2)}</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-1">
            <li>{renderMenu(3)}</li>
            <li>{renderMenu(4)}</li>
            <li>{renderMenu(5)}</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-1">
            <li>{renderMenu(6)}</li>
            <li>{renderMenu(7)}</li>
            <li>{renderMenu(8)}</li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="ml-auto flex space-x-6 text-gray-600">
      {getSection(footer,'Social Links').item.map(item=>
          (<img
            className={item.imageTailwind}
            src={item.image.filename}
          />)
        )
        }
      </div>
    </div>

    <div className="text-left mt-8 text-gray-500 text-sm"> {/* Centered copyright */}
    {getSectionItem(footer,'copyright statement').text}
    </div>
  </footer>
)};

export default Footer;