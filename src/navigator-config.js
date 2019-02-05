import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

export const routeConfig = {
  HomePage: { screen: HomePage },
  AboutPage: { screen: AboutPage, path: "about/:id" }
};

export const stackConfig = {
  initialRouteName: "HomePage"
};
