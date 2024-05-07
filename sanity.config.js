import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "5vjwz05a",
  dataset: "production",
  apiVersion: "2024-05-06",
  basePath: "/admin",
  title: "ChES_Content",
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemas,
  },
});

export default config;
