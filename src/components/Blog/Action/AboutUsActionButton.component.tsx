import useAboutUsActionButton from "./UseAboutUsActionButton.component";

import { AiFillHome } from "react-icons/ai";

const AboutUsActionButton = () => {
  const { redirectToHome } = useAboutUsActionButton();

  return (
    <BaseButton icon color="red" onClick={redirectToHome}>
      <AiFillHome />
    </BaseButton>
  );
};

export default AboutUsActionButton;
