import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => (
  <ul {...storyblokEditable(blok)} key={blok._uid} className={blok.wrapperTailwind}>
    {blok.columns.map((blok) => (
      <li key={blok._uid}>
        <StoryblokComponent blok={blok} />
      </li>
    ))}
  </ul>
);

export default Grid;