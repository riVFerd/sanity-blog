export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.max(50),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.max(50).email(),
    },
    {
      name: "nickname",
      title: "Nickname",
      type: "string",
      validation: (Rule) => Rule.max(8),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "nickname",
        maxLength: 50,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
