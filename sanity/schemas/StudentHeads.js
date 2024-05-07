const studentHeads = {
  name: "studentHeads",
  title: "studentHeads",
  type: "document",
  fields: [
    {
      name: "position",
      title: "Position",
      type: "string",
    },

    {
      name: "name",
      title: "Name",
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
export default studentHeads;
