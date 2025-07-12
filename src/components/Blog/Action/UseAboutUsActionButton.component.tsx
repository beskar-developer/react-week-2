import { ROUTES } from "@/constants/Blog";

const useAboutUsActionButton = () => {
  const navigate = useNavigate();

  const redirectToHome = () => navigate(ROUTES.HOME_PATH);

  return { redirectToHome };
};

export default useAboutUsActionButton;
