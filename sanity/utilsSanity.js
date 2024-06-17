import { createClient, groq } from "next-sanity";

export const revalidate = 180;
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
  return client.fetch(EventQuery, {
    cache: "no-cache",
  });
}

const AboutQuery = groq`
*[_type == "about"]{
  title,
  description,
  "ImageUrl": image.asset->url, 
}
`;

export async function getAbout() {
  return client.fetch(AboutQuery, {
    cache: "no-cache",
  });
}

const AchievementQuery = groq`
*[_type == "achievement"]{
 
  description,
  "ImageUrl": image.asset->url, 
}
`;

export async function getAchievement() {
  return client.fetch(AchievementQuery, {
    cache: "no-cache",
  });
}

const CommitteeQuery = groq`
*[_type == "committee"]{
  head,
   committee,
   "ImageUrl": image.asset->url, 
    linkedin
    
 }
`;

export async function getCommittee() {
  return client.fetch(CommitteeQuery, {
    cache: "no-cache",
  });
}
const StudentHeadsQuery = groq`
*[_type == "studentHeads"]{
  position,
   name,
   "ImageUrl": image.asset->url, 
    linkedin
    
 }
`;

export async function getStudentHeads() {
  return client.fetch(StudentHeadsQuery, {
    cache: "no-cache",
  });
}
const GalleryQuery = groq`*[_type == "gallery"]{
  
  "ImageUrl": image.asset->url,   
}`;

export async function getGallery() {
  return client.fetch(GalleryQuery, {
    cache: "no-cache",
  });
}
