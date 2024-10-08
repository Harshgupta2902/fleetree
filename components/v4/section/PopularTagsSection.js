import Container from "@/components/container";
import CategoriesIconCard from "@/components/v4/card/CategoriesIconCard";

const popularTags = [
  { title: "Tag 1", description: "Description for Tag 1" },
  { title: "Tag 2", description: "Description for Tag 2" },
  { title: "Tag 3", description: "Description for Tag 3" },
  { title: "Tag 4", description: "Description for Tag 4" },
  { title: "Tag 5", description: "Description for Tag 5" },
  { title: "Tag 6", description: "Description for Tag 6" },
  { title: "Tag 7", description: "Description for Tag 7" },
  { title: "Tag 8", description: "Description for Tag 8" },
];

const PopularTagsSection = () => {
  return (
    <div className="rounded-xl grid grid-cols-1 gap-y-6 gap-x-6 md:gap-y-8 md:gap-x-8 sm:grid-cols-2 xl:grid-cols-4">
      {popularTags.map((topic, i) => (
        <CategoriesIconCard
          withBackground={true}
          key={i}
          index={i}
        />
      ))}
    </div>
  );
};

export default PopularTagsSection;
