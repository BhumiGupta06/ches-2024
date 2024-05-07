import { createClient, groq } from "next-sanity";

export const revalidate = 300;
export const dynamic = "force-dynamic";

const client = createClient({
  projectId: "5vjwz05a",
  dataset: "production",
  apiVersion: "2024-05-06",

  useCdn: false,
});

const EventQuery = groq`
*[_type == "events"]{
  title,
  description,
  link,
  "CoverImage": cover_image.asset->url,
  "InnerImage":inner_image.asset->url,
  
}
`;

export async function getEvent() {
  return client.fetch(EventQuery);
}

const AboutQuery = groq`
*[_type == "about"]{
  title,
  description,
  "ImageUrl": image.asset->url, 
}
`;

export async function getAbout() {
  return client.fetch(AboutQuery);
}

const AchievementQuery = groq`
*[_type == "achievement"]{
 
  description,
  "ImageUrl": image.asset->url, 
}
`;

export async function getAchievement() {
  return client.fetch(AchievementQuery);
}
