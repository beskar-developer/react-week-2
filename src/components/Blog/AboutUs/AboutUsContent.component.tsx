import { itemAnimationConfig } from "@shared-vendor/constants";

import AboutUsHeader from "./AboutUsHeader.component";
import AboutUsWriterList from "./AboutUsWriterList.component";

const AboutUsContent = () => {
  return (
    <motion.div className="flex flex-col gap-6 px-4 py-6" {...itemAnimationConfig}>
      <AboutUsHeader />

      <AboutUsWriterList />
    </motion.div>
  );
};

export default AboutUsContent;
