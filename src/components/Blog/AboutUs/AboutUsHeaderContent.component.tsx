import { fakerFA as faker } from "@faker-js/faker";

const DESCRIPTION = faker.word.words(100);

const AboutUsHeaderContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-extrabold">درباره ما</h1>

      <p className="text-sm text-gray-600 dark:text-gray-300">{DESCRIPTION}</p>
    </div>
  );
};

export default AboutUsHeaderContent;
