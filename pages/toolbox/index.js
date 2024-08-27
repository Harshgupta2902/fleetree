import Layout from "@/components/new-index/layoutForIndex";

import ToolboxIndexPage from "@/components/toolbox/ToolboxIndexPage";
import ALL_SLUGS_GROUPS from "@/lib/menus/allTools";
import Footer from "@/components/footer";

export default function ToolboxPage({}) {
  //pagination is like {"total":1421,"pageSize":12,"page":2,"pageCount":119}

  return (
    <>
      <Layout
        padding={false}
        maxWidth={"max-w-[1400px] search-wide"}
        seo={{
          title: `Prototypr Toolbox - new design, UX and coding tools | Page ${"1"}`,
          description:
            "Today's Latest Design Tools. Find illustrations, icons, UI Kits and more.",
          //   image: "",
          canonical: `https://prototypr.io/toolbox/${"1"}`,
          url: `https://prototypr.io/toolbox/${"1"}`,
        }}
        activeNav={"toolbox"}
      >
        <ToolboxIndexPage
          filterCategories={ALL_SLUGS_GROUPS}
          urlRoot={`/toolbox`}
          paginationRoot={`/toolbox`}
          title="All tools"
          description="All your design tools in one place, updated weekly"
          currentSlug={"toolbox"}
          color={"#3574F0"}
        />
      </Layout>
      <Footer />
    </>
  );
}
