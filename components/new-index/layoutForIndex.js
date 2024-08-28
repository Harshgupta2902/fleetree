"use client";
import Meta from "../meta";
import Navbar from "@/components/Navbar/Navbar";
export default function Layout({
  preview,
  children,
  sponsor,
  activeNav,
  background,
  padding,
  seo,
  navType,
  navOffset,
  navBackground,
}) {
  return (
    <>
      <Meta seo={seo} />
      <Navbar
        background={navBackground}
        navType={navType}
        sponsor={sponsor}
        maxWidth={"max-w-[1320px]"}
      />
      <div
        className={`min-h-screen overflow-x-hidden ${
          navOffset == false ? "" : "pt-[84px]"
        } ${padding == false ? "" : "px-3 md:px-8"}`}
        style={{ background: background ? background : "#fbfcff" }}
      >
        <main className="mx-auto ">{children}</main>
      </div>
    </>
  );
}
