import { fakerFA as faker } from "@faker-js/faker";

import AboutUsHeaderContent from "./AboutUsHeaderContent.component";

const OWNER_IMAGE = { src: faker.image.personPortrait(), alt: "owner" };

const AboutUsHeader = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <ImageLoader className="size-40 shrink-0 rounded-md" {...OWNER_IMAGE} />

      <AboutUsHeaderContent />
    </div>
  );
};

export default AboutUsHeader;
