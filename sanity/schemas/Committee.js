const Committee = {
  name: "committee",
  title: "Committee",
  type: "document",
  fields: [
    {
      name: "committee",
      title: "Committee",
      type: "string",
    },

    {
      name: "head",
      title: "Head",
      type: "string",
    },
    {
      name: "linkedin",
      title: "Linkedin",
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
export default Committee;
