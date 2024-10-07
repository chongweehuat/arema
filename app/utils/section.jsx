
const getSection = (section, sectionName) => section.Content.find((item =>item.name==sectionName));
const getSectionItem = (section, sectionName) => section.Content.find((item =>item.name==sectionName)).item[0];


export { getSection, getSectionItem };
