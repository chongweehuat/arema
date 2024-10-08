import {
  StoryblokComponent,
  storyblokEditable
} from "@storyblok/react";

const General = ({ content, customSectionMap = {} }) => {  // Default value for customSectionMap
  
  const Wrapper = ({ className, children }) => (
    className ? <div className={className} {...storyblokEditable(content)}>{children}</div> : <>{children}</>
  );

  return (
    <Wrapper className={content.wrapperTailwind}>
      <Wrapper className={content.contentTailwind}>
        {content.Content?.map((section, i) => {
          const Component = customSectionMap[section.name]; // Check if there's a component for the section name
          return Component ? (
            <Component key={i} blok={section} />
          ) : (
            <Wrapper key={i} className={section.wrapperTailwind}>
              <Wrapper className={section.contentTailwind}>
              {section.item.map((item, j) => (
                <StoryblokComponent key={j} blok={item} />
              ))}
              </Wrapper>
            </Wrapper>
          );
        })}
      </Wrapper>
    </Wrapper>
  );
};

export default General;
