import Client from "@sanity/client";

export default Client({
  projectId: "of6fc5ta", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
});

