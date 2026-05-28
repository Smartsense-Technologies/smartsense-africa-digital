import { useEffect } from "react";

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function PageMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  robots,
}: {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  robots?: string;
}) {
  useEffect(() => {
    document.title = title;
    if (description) setMeta(`meta[name="description"]`, "name", "description", description);
    if (ogTitle) setMeta(`meta[property="og:title"]`, "property", "og:title", ogTitle);
    if (ogDescription) setMeta(`meta[property="og:description"]`, "property", "og:description", ogDescription);
    if (robots) setMeta(`meta[name="robots"]`, "name", "robots", robots);
  }, [title, description, ogTitle, ogDescription, robots]);
  return null;
}