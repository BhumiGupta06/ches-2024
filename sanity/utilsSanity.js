import { createClient, groq } from "next-sanity";

export const revalidate = 300;
export const dynamic = "force-dynamic";

const client = createClient({
  projectId: "5vjwz05a",
  dataset: "production",
  apiVersion: "2024-05-06",

  useCdn: false,
});

// const ExperienceQuery = groq`
// *[_type == "workExperience"] {
//   title,
//   description,
//   duration,
//   "imageUrl": image.asset->url,

// }
// `;

// export async function getExperience() {
//   return client.fetch(ExperienceQuery, {
//     cache: "no-store",
//   });
// }
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
