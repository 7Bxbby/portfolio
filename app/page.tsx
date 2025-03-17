import {permanentRedirect} from "next/navigation";

const Home = () => {
    permanentRedirect("/about")
};

export default Home;