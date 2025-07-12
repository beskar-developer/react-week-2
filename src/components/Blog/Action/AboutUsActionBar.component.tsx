import AboutUsActionButton from "./AboutUsActionButton.component";
import ActionBar from "./ActionBar.component";

const AboutUsActionBar = () => {
  return <ActionBar actionFallback={<AboutUsActionButton />} />;
};

export default AboutUsActionBar;
