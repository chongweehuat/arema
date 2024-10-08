import { getStoryblokApi, StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React, { useState } from "react";
import General from "./General";  // Import the General component

const Solutions = ({ content }) => {
  const [activeTab, setActiveTab] = useState("Standard");
  const Wrapper = ({ className, children }) => (
    className ? <div className={className} >{children}</div> : <>{children}</>
  );

  const Packages = ({ blok }) =>{
   
    return (
    
    <Wrapper className={blok.wrapperTailwind}>
      <Wrapper className={blok.containerTailwind}>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          {blok.item.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(item.package_name)}
              className={`text-lg font-medium text-gray-800 hover:text-blue-500 ${activeTab === item.package_name ? 'text-blue-500 underline' : ''}`}
            >
              {item.package_name}
            </button>
          ))}
        </div>
        {/* Content for the active tab */}
        <div>
          {blok.item.map((item, i) =>
            activeTab === item.package_name ? (
              <StoryblokComponent key={i} blok={item} />
            ) : null
          )}
        </div>
      </Wrapper>
    </Wrapper>
    
  )};

  return (
    
    <General content={content} customSectionMap={{Packages}} />
  
  );
};

export default Solutions;
