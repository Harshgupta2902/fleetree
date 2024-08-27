import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Container from "@/components/container";
import PostTitle from "@/components/post-title";

import NewsletterSection from "../v4/section/NewsletterSection";
import useUser from "@/lib/iron-session/useUser";
import ToolImageCard from "../v4/card/ToolImageCard";
// import ToolBoxHero from "./toolboxHero";
import ToolBoxHeroWithSignup from "./ToolboxHeroWithEmailSignup";
const StickyFooterCTA = dynamic(() => import("@/components/StickyFooterCTA"), {
  ssr: false,
});

// const MoreStories = dynamic(() => import("@/components/more-stories"));
const NewPagination = dynamic(() => import("@/components/pagination"));
const Breadcrumbs = dynamic(() => import("@/components/Breadcrumbs"));
const FilterCategory = dynamic(() => import("@/components/FilterCategory"));

const ToolboxIndexPage = ({
  title,
  description,
  pagination,
  urlRoot,
  breadcrumbs,
  allPosts,
  pageSize,
  filterCategories,
  currentSlug,
  paginationRoot,
  navSponsor,
  sponsor,
  color,
}) => {
  const router = useRouter();
  const { user } = useUser({
    redirectIfFound: false,
  });

  const onPageNumChange = (pageNo) => {
    router.push(`/${paginationRoot}/page/${pageNo}`);
  };

  return (
    <>
      {title == "All tools" ? (
        <ToolBoxHeroWithSignup user={user} />
      ) : (
        <Container maxWidth="relative mb-6 px-0" padding={false}>
          <div className="relative bg-white shadow-sm rounded-b-[3.4rem] -mt-[96px] pt-[86px] md:pt-[96px] pb-20 overflow-hidden px-1 xs:px-3 sm:px-6">
            <div className="relative max-w-[1320px] mx-auto w-full h-full px-3 z-10">
              <div className="inline-flex my-8">
                <h2 className="max-w-[50rem] text-black/90 text-4xl md:text-5xl font-semibold tracking-tight lg:leading-tight md:leading-tight capitalize drop-shadow-sm ">
                  {title}
                </h2>
              </div>
            </div>
          </div>
          <img
            src="/static/images/toolbox/squares.svg"
            className="rounded-b-[3.4rem] opacity absolute w-full h-full object-cover top-0 left-0"
          />
        </Container>
      )}
      {/* {title} */}

      <Container
        padding={false}
        maxWidth="max-w-[1320px] px-6 mx-auto xl:px-3 grid grid-cols-12"
      >
        <Sidebar
          title={title}
          paginationRoot={paginationRoot}
          urlRoot={urlRoot}
          filterCategories={filterCategories}
          slug={currentSlug}
        />
        <div
          className={`w-full px-0 ${
            title == "All tools" && pagination?.page == 1
              ? ""
              : "-mt-28 lg:-mt-20"
          } pl-0 md:pl-8 mx-auto pb-20 gap-2 col-span-12 md:col-span-10 pb-10`}
        >
          <ToolImageCard
            navSponsor={navSponsor}
            sponsor={sponsor}
            posts={allPosts}
            columns={"lg:grid-cols-4"}
            type="toolbox"
          />

          <NewPagination
            total={pagination?.total}
            pageSize={pageSize}
            currentPage={pagination?.page}
            onPageNumChange={(pageNum) => {
              onPageNumChange(pageNum);
            }}
          />
        </div>
      </Container>
      <StickyFooterCTA
        title="Welcome to Prototypr"
        description="Join today to make posts and grow with us."
      />
    </>
  );
};

export default ToolboxIndexPage;

const Sidebar = ({
  filterCategories,
  paginationRoot,
  urlRoot,
  slug,
  title,
}) => {
  return (
    // <div className="hidden md:block h-[fit-content] relative col-span-2 bg-white rounded-2xl shadow-sm border border-gray-300/60 p-6">
    <div
      className={`${
        title !== "All tools" ? "mt-6" : ""
      } hidden md:block h-[fit-content] relative col-span-2 rounded-3xl`}
    >
      <div className="w-full min-h-screen flex flex-col">
        <FilterCategory
          urlRoot={urlRoot}
          paginationRoot={paginationRoot}
          items={filterCategories}
          key={"uxtools_item_"}
          slug={slug}
        />
      </div>
    </div>
  );
};
