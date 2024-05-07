const Achievement = {
  name: "achievement",
  title: "Achievement",
  type: "document",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "string",
    },

    {
      name: "image",
      title: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};
export default Achievement;
