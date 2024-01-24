"use client";
import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import dynamic from "next/dynamic";
// core styles shared by all of react-notion-x (required)
import "@/styles/notion.css";
// used for code syntax highlighting (optional)
import "@/styles/prism.css";
// used for rendering equations (optional)
import "katex/dist/katex.min.css";
import Image from "next/image";
import Link from "next/link";

// dynamic imports
const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
);
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
);

const NotionPage = ({ recordMap, schema = {} }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [loading]);
  if (loading) return <div>Loading...</div>;
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={schema.fullPage ?? false}
      darkMode={schema.darkMode ?? false}
      components={{
        Code,
        Collection: schema.collection ? Collection : null,
        Equation,
        Modal,
        nextImage: Image,
        nextLink: Link,
      }}
    />
  );
};

export default NotionPage;
