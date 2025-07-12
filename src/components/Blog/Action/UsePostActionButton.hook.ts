import { ROUTES } from "@/constants/Blog";

const usePostActionButton = () => {
  const navigate = useNavigate();

  const redirectToAboutUs = () => navigate(ROUTES.ABOUT_US_PATH);

  return { redirectToAboutUs };
};

export default usePostActionButton;
