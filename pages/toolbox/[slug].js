import dynamic from "next/dynamic";
import Link from "next/link";
import Container from "@/components/container";
import Layout from "@/components/new-index/layoutForIndex";
import SocialShare from "@/components/SocialShare";
const StickyFooterCTA = dynamic(() => import("@/components/StickyFooterCTA"), {
  ssr: false,
});
import Footer from "@/components/footer";
import NewsletterSection from "@/components/v4/section/NewsletterSection";
import PopularTagsSection from "@/components/v4/section/PopularTagsSection";
import SectionDivider from "@/components/v4/section/SectionDivider";
import ToolLargeCardRow from "@/components/v4/layout/ToolLargeCardRow";
import AuthorCard from "@/components/toolbox/AuthorCard";
import ToolIconCard from "@/components/v4/card/ToolIconCard";
import HeroCardSection from "@/components/toolbox/HeroCardSectionSimple";
import LikeButton from "@/components/LikeButton";

const ToolContent = ({
  post,
  gallery,
  relatedPosts,
  popularTags,
  layout,
  logo,
  logoBase64,
  featuredImage,
  base64,
  date,
  authorAvatar,
  updatedAtDate,
  navSponsor,
  sponsors,
}) => {
  return (
    <>
      <div className="w-full mx-auto">
        <Container maxWidth="w-full z-10">
          <div className="grid grid-cols-3 lg:grid-cols-12 gap-3 xl:gap-7 max-w-[1320px] mx-auto md:px-0 h-full">
            <div className="hidden sticky top-6 h-fit lg:col-span-1 lg:block">
              <LikeButton />
            </div>
            <div className="col-span-3 border border-gray-300/60 rounded-2xl overflow-hidden lg:col-span-8 flex flex-col gap-3 bg-white lg:h-fit">
              <div className="grid gap-3 md:px-0 -mb-4">
                <HeroCardSection
                  post={post}
                  featuredImage={
                    "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png"
                  }
                />
              </div>
              <div
                className={`relative mt-1 mb-3 z-20 pt-0 col-span-3 order-2 mx-4 lg:order-1 ${
                  gallery?.length ? "" : ""
                }`}
              ></div>
              <div
                className={`order-1 col-span-3 lg:order-3 bg-white p-6 lg:pt-0 lg:pb-12 rounded-2xl flex justify-between`}
              >
                <div className="max-w-[680px] w-full mx-auto">
                  <h2 class="text-2xl font-medium mb-4 tracking-tight">
                    Overview
                  </h2>
                  <div className="blog-content toolbox-content">
                    <div
                      style={{
                        color: "#222",
                        fontSize: "18px",
                        lineHeight: "33px",
                      }}
                      className="mt-3 popup-modal-content"
                      dangerouslySetInnerHTML={{
                        __html: "post.attributes.content",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 h-fit lg:col-span-3 flex flex-col gap-3">
              <div className="p-1 pt-0.5 rounded-2xl h-fit border-gray-300/60">
                <div className="order-1 p-4 mb-4 rounded-2xl bg-[#f4f4f4]/60">
                  <h3 className="text-sm tracking-tight text-gray-500 ">
                    Creators
                  </h3>
                  <AuthorCard
                    creator={true}
                    key={1}
                    title={"Curator"}
                    author={"creator"}
                    avatar={"creator"}
                    authorAvatar={
                      "https://s3-us-west-1.amazonaws.com/tinify-bucket/%2Fprototypr%2Ftemp%2F1595435549331-1595435549330.png"
                    }
                  />
                </div>
                {post?.attributes?.author &&
                  !post?.attributes?.creators?.data?.length && (
                    <div className="p-4 rounded-2xl bg-[#f4f4f4]/60">
                      <AuthorCard
                        authorAvatar={authorAvatar}
                        title={post?.attributes?.creator ? "Curator" : null}
                        author={post.attributes.author}
                        avatar={post.attributes?.author}
                      />
                    </div>
                  )}

                <div className="flex flex-col gap-4 mt-4 p-4 rounded-2xl bg-[#f4f4f4]/60">
                  <div className="text-gray-500">
                    <h3 className="text-sm tracking-tight  ">Published</h3>
                    <div className="text-base tracking-tight font-medium text-gray-500">
                      {date}
                    </div>
                  </div>
                  {post?.attributes?.author &&
                  post?.attributes?.creators?.data?.length &&
                  post?.attributes?.author?.id !=
                    post?.attributes?.creators?.data[0]?.id ? (
                    <AuthorCard
                      size={"small"}
                      authorAvatar={authorAvatar}
                      title={post?.attributes?.creator ? "Curator" : null}
                      author={post.attributes.author}
                      avatar={post.attributes?.author}
                    />
                  ) : null}

                  <div className="text-gray-500 mt-1">
                    <h3 className="text-sm tracking-tight ">Tags</h3>
                    <Link href={`/toolbox/page/1/`}>
                      <div className="text-gray-800 tracking-tight font-medium">
                        {"tag.attributes.name"}
                      </div>
                    </Link>
                  </div>
                  <div className="mt-2">
                    <SocialShare
                      size={28}
                      title={"post.attributes.title"}
                      slug={"post.attributes.slug"}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  {/* <ToolBackgroundCard
                    showAdTag={true}
                    height={"h-[220px] md:h-[310px] xl:h-[190px]"}
                    withBackground={true}
                    post={navSponsor}
                  /> */}
                </div>

                <div className="flex flex-col gap-4 mt-4 rounded-2xl bg-[#f4f4f4]/60">
                  <div className="relative rounded-2xl pb-3">
                    <h1
                      tabIndex={0}
                      className="text-sm mb-3 text-gray-500 tracking-tight px-3 pt-3"
                    >
                      Related tools
                    </h1>

                    <div className="flex flex-col pt-1 grid grid-cols-6 gap-6">
                      {relatedPosts?.map((tool, index) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-col px-3 col-span-6 sm:col-span-3 lg:col-span-6 xl:col-span-6"
                          >
                            <div className="">
                              <ToolIconCard
                                withBackground={false}
                                tool={tool}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-5 p-3 relative rounded-2xl">
                  <div className="z-10 col-span-5 xl:col-span-5 relative">
                    <h3 className="font-bold drop-shadow-sm text-lg tracking-[-0.018em] text-gray-800">
                      Get weekly handpicked tools
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Join the 1000s who receive curated products from Graeme @
                      Prototypr.
                    </p>
                  </div>

                  <div className="col-span-12 relative z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container maxWidth="w-full relative z-10">
          <div className="max-w-[1320px] mx-auto grid grid-cols-12 gap-4 md:px-0 h-full">
            <SectionDivider py="py-3" transparentLine={true} />
          </div>
          <Container maxWidth="max-w-[1320px]">
            <div
              className={`pb-0 border-l-[0.19rem] border-b-[0.18rem] border-sky-500 opacity-10 rounded-bl-xl pt-6`}
            >
              {/* <div className={` bg-opacity-[0.08] bg-sky-500 h-[3px] w-full pl-3`} /> */}
            </div>
          </Container>
        </Container>
      </div>

      <Container maxWidth="hidden xl:block w-full pb-24 bg-gradient-to-tr from-[#fefefe] to-sky-100/20 relative z-10">
        {/* <img src="/static/images/bendy9.svg" className="absolute top-0 -mt-[2.9%] z-10 left-0 w-full gm-added gm-observing gm-observing-cb" loading="lazy"/> */}
        {relatedPosts?.length ? (
          <div className="z-30 relative max-w-[1320px] mx-auto md:px-3">
            <div classsName="flex flex-col px-3 z-30">
              <h3 className="text-2xl pt-12 mb-6 text-black/90 font-medium  max-w-md tracking-tight">
                Related tools
              </h3>
              {/* <ToolLargeCardRow title={`Related to ${post?.attributes?.title}`} tools={relatedPosts.slice(0,4)} /> */}
              <ToolLargeCardRow
                preload={false}
                showTitle={false}
                tools={relatedPosts.slice(0, 4)}
              />
            </div>
            <img
              src="/static/images/toolbox/squares2.svg"
              className="w-full h-[128%] absolute object-cover opacity-20"
            />
          </div>
        ) : null}
      </Container>
      <Container maxWidth="w-full pb-16 bg-[#fefefe] relative z-10 pt-0">
        <div className="max-w-[1320px] pt-0 -mt-8 mb-8 mx-auto h-full">
          <div className="mb-20">
            <NewsletterSection
              padding={false}
              title="Get the best tools every week"
            />
          </div>

          <div className="mt-2">
            <h2 className="text-lg mb-4 font-semibold tracking-tight">
              Popular topics
            </h2>
            <PopularTagsSection popularTags={popularTags} />
          </div>
        </div>
      </Container>

      <StickyFooterCTA
        title="Welcome to Prototypr"
        description="Join today to make posts and grow with us."
      />
      {/* <StickyFooterInterview
        post={post}
        title="Tell your creator story"
        description={
          "Get featured in the newsletter by answering a creator interview"
        }
      /> */}
    </>
  );
};

export default function Post({
  post,
  relatedPosts,
  gallery,
  preview,
  popularTags,
  layout,
  logo,
  featuredImage,
  date,
  updatedAtDate,
  authorAvatar,
  navSponsor,
  sponsors,
}) {
  return (
    <Layout
      sponsor={navSponsor}
      padding={false}
      background={"#fbfcff"}
      maxWidth={"search-wide"}
      seo={{
        title: `${
          post?.attributes?.seo?.opengraphTitle
            ? post?.attributes?.seo?.opengraphTitle
            : post?.attributes?.title && post.attributes.title
        }`,
        description: `${
          post?.attributes?.seo?.opengraphDescription
            ? post?.attributes?.seo?.opengraphDescription
            : post?.attributes?.excerpt && post.attributes.excerpt
        }`,
        image: `${
          post?.attributes?.seo?.opengraphImage
            ? post?.attributes?.seo?.opengraphImage
            : post?.attributes?.featuredImage?.data?.attributes?.url
            ? post?.attributes?.featuredImage?.data?.attributes?.url
            : post?.legacyFeaturedImage
            ? post?.legacyFeaturedImage?.mediaItemUrl
            : post?.ogImage
            ? post?.ogImage.opengraphImage
            : "https://s3-us-west-1.amazonaws.com/tinify-bucket/%2Fprototypr%2Ftemp%2F1595435549331-1595435549330.png"
        }`,
        canonical: `${
          post?.attributes?.seo?.canonical
            ? post?.attributes?.seo?.canonical
            : post?.attributes?.slug &&
              `https://prototypr.io/toolbox/${post?.attributes.slug}`
        }`,
        url: `${
          post?.attributes?.seo?.canonical
            ? post?.attributes?.seo?.canonical
            : post?.attributes?.slug &&
              `https://prototypr.io/toolbox/${post?.attributes.slug}`
        }`,
      }}
      activeNav={"toolbox"}
      preview={preview}
    >
      <ToolContent
        date={date}
        featuredImage={featuredImage}
        logo={logo}
        layout={layout}
        popularTags={popularTags}
        post={post}
        gallery={gallery}
        relatedPosts={relatedPosts}
        authorAvatar={authorAvatar}
        updatedAtDate={updatedAtDate}
        sponsors={sponsors}
        navSponsor={navSponsor}
      />
      <Footer />
    </Layout>
  );
}
