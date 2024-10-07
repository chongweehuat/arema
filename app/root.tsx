import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import "./tailwind.css";
import { json } from "@remix-run/node";

import { storyblokInit, apiPlugin, getStoryblokApi  } from "@storyblok/react";
import { isPreview } from "~/utils/isPreview";
import { getSection, getSectionItem } from "~/utils/section";
import Layout from "./components/Layout";
import Text from "./blocks/Text";
import Image from "./blocks/Image";
import ImageTitle from "./blocks/ImageTitle";
import ImageTitleText from "./blocks/ImageTitleText";
import ImageTitleTextarea from "./blocks/ImageTitleTextarea";
import MenuItem from "./blocks/MenuItem";
import Button from "./blocks/Button";
import Package from "./blocks/Package";
import TitleText from "./blocks/TitleText";
import Grid from "./blocks/Grid";
const components = {
  Text,Image,ImageTitle,MenuItem,Button,Package,TitleText,grid:Grid,ImageTitleText,ImageTitleTextarea
};


storyblokInit({
  accessToken: "Z8jpXXPeH9Y7i40VIZtfQAtt",
  use: [apiPlugin],
  components,
  bridge: isPreview(),
});

const getData = async(path:any,lang:any) =>{
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

export const loader = async ({ params }:any) => {
  
  const lang = "en";

  const settings=await getData('settings',lang);
  const header=await getData('header',lang);
  const footer=await getData('footer',lang);

  return json({
    lang,
    settings,
    header,
    footer
  });
};

export default function App() {
  const { lang, settings }:any = useLoaderData();
  
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="keywords" content={getSectionItem(settings,'site-keywords').text} />
        <meta name="description" content={getSectionItem(settings,'site-description').text} />
        
        <title>{getSectionItem(settings,'site-title').text}</title>

        <link rel="icon" href={getSectionItem(settings,'Favicon').image.filename+"/m/32x32"} sizes="32x32" />
        <link rel="icon" href={getSectionItem(settings,'Favicon').image.filename+"/m/192x192"} sizes="192x192" />
        <link rel="apple-touch-icon" href={getSectionItem(settings,'Favicon').image.filename+"/m/180x180"}  />
        <meta name="msapplication-TileImage" content={getSectionItem(settings,'Favicon').image.filename+"/m/180x180"} />
        
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </Layout>
        <script src="//app.storyblok.com/f/storyblok-v2-latest.js" type="text/javascript">
        </script>
      </body>
    </html>
  );
}