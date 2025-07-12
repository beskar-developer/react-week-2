import { fakerFA as faker } from "@faker-js/faker";

const IMAGES = Array.from({ length: 5 }, () => ({ src: faker.image.avatar(), alt: faker.hacker.noun() }));

const AboutUsWriterList = () => {
  return (
    <>
      <h2 className="font-extrabold text-gray-800 dark:text-gray-400">دیگر مقاله نویسان</h2>

      <div className="flex gap-4">
        {IMAGES.map((image) => (
          <ImageLoader
            className="size-24 rounded-full border-4 border-transparent hover:scale-120 hover:border-indigo-500"
            key={image.alt}
            {...image}
          />
        ))}
      </div>
    </>
  );
};

export default AboutUsWriterList;
