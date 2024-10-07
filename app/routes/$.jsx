import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {JSONTree} from 'react-json-tree';
import Solutions from "../components/Solutions";
import General from "../components/General";
import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";


const getData = async(path,lang) =>{
  const {data} = await getStoryblokApi()
  .get(`cdn/stories/${path}`,{
    version: "draft",
    resolve_relations: "default",
    language: lang
  })
  .catch((e) => {
    console.log("e", e);
    return { data: null };
  });
  
  return data.story.content;
}


export const loader = async ({ params, request }) => {

  let slug = params["*"] ?? "home";
  
  const content=await getData(slug,'en');
  
  return json({
    slug,
    content
  });
};

const StoryComponent = ({page,content}) => {
  
    switch (page) {
      case 'solutions':
        return <Solutions content={content} />;
      default:
        return <General content={content} />;
    }
  
}  

export default function Page() {
  const { slug,content } = useLoaderData();
  
  return (
    <>
      <StoryComponent page={slug} content={content} /> 
      {/* <JSONTree data={content} /> */}
    </>
  );

}
