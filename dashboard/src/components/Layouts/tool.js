// tools.js
import Embed from "@editorjs/embed";
import Paragraph from "@editorjs/paragraph";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import Delimiter from "@editorjs/delimiter";

const EDITOR_JS_TOOLS = {
  embed: Embed,
  paragraph: Paragraph,
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: "https://backend.vitaminair.org/graphql", // Your backend endpoint for url data fetching
    },
  },
  image: Image,
  header: Header,
  quote: Quote,
  marker: Marker,
  delimiter: Delimiter,
};

export { EDITOR_JS_TOOLS };
