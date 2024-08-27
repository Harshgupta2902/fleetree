import Image from "next/image";
import Link from "next/link";
import gumletLoader from "@/components/new-index/gumletLoader";

const defaultBase64 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABLCAQAAAA1k5H2AAAAi0lEQVR42u3SMQEAAAgDoC251a3gL2SgmfBYBRAA`;

const staticPosts = [
  // Example data, replace with actual static data
  {
    title: "Tool 1",
    slug: "tool-1",
    coverImage:
      "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    logo: "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    tags: [{ attributes: { name: "Tag1" } }],
  },
  {
    title: "Tool 1",
    slug: "tool-1",
    coverImage:
      "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    logo: "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    tags: [{ attributes: { name: "Tag1" } }],
  },
  {
    title: "Tool 1",
    slug: "tool-1",
    coverImage:
      "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    logo: "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    tags: [{ attributes: { name: "Tag1" } }],
  },
  {
    title: "Tool 1",
    slug: "tool-1",
    coverImage:
      "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    logo: "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    tags: [{ attributes: { name: "Tag1" } }],
  },
  {
    title: "Tool 1",
    slug: "tool-1",
    coverImage:
      "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    logo: "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    tags: [{ attributes: { name: "Tag1" } }],
  },
  {
    title: "Tool 1",
    slug: "tool-1",
    coverImage:
      "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    logo: "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    tags: [{ attributes: { name: "Tag1" } }],
  },
  {
    title: "Tool 1",
    slug: "tool-1",
    coverImage:
      "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    logo: "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    tags: [{ attributes: { name: "Tag1" } }],
  },
  {
    title: "Tool 1",
    slug: "tool-1",
    coverImage:
      "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    logo: "https://prototyprio.gumlet.io/strapi/b1f1098f2ac161fab1ef44ba445902d4.png",
    tags: [{ attributes: { name: "Tag1" } }],
  },
];

const navSponsor = {
  link: "https://example.com",
  cardImage: "https://example.com/sponsor-card.png",
  featuredImage: "https://example.com/sponsor-logo.png",
  title: "Sponsored Content",
  name: "Sponsor Name",
};

const ToolImageCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full flex-wrap">
      {staticPosts.map((post, i) => {
        const { title, slug, coverImage, tags, logo } = post;

        return (
          <div key={i}>
            <Link href={`/toolbox/${slug}`}>
              <div className="flex flex-col pt-3 pb-1 grid grid-col-1 gap-4 flex-grow h-full rounded-t-2xl shadow-sm hover:shadow-xl border border-gray-300/60 transition transition-all duration-400 hover:scale-[1.02] group bg-white relative rounded-2xl fade-">
                <div className="rounded-xl px-3 block cursor-pointer">
                  <div
                    className="rounded-xl relative flex"
                    style={{ display: "flex", height: "145px" }}
                  >
                    <div className="absolute top-0 left-0 z-10 rounded-xl w-full h-full bg-gradient-to-b from-black/5 via-black/10 to-black/40 group-hover:scale-[1.03] transition transition-all duration-700"></div>
                    <Image
                      key={coverImage}
                      loader={gumletLoader}
                      priority={false < 2 ? `true` : `false`}
                      data-priority={false < 2 ? `true` : `false`}
                      fetchpriority={false < 2 ? "true" : "false"}
                      data-gmlazy={false < 2 ? `false` : `true`}
                      placeholder="blur"
                      blurDataURL={defaultBase64}
                      alt="Brand logo for external website's link"
                      className="object-cover rounded-xl bg-white group-hover:shadow-sm group-hover:scale-[1.03] transition transition-all duration-700"
                      src={coverImage}
                      fill
                    />
                  </div>
                  <div className="rounded-xl bg-white z-20 -mt-[6px] absolute ml-[12px]">
                    <Image
                      key={logo}
                      loader={gumletLoader}
                      width={48}
                      height={48}
                      placeholder="blur"
                      blurDataURL={defaultBase64}
                      alt="Brand logo for external website's link"
                      className="object-cover flex-shrink-0 shine rounded-xl w-[48px] h-[48px] border-2 border-white bg-white shadow -mt-[22px]"
                      src={logo}
                    />
                  </div>
                </div>
                <div className="px-[18px] mb-3 mt-3 flex">
                  <div className="pl-2 overflow-hidden my-auto">
                    <div className="line-clamp-1 tracking-tight font-medium">
                      {title}
                    </div>
                    {tags?.length ? (
                      <div className="text-xs text-gray-500 mt-0.5 capitalize">
                        {tags[0].attributes.name}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ToolImageCard;
