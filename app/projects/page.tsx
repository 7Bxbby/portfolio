import AllProjectsDisplay from "./components/allProjectsDisplay";

export default function Home() {
    return <section
        id="projects"
        className={`mx-auto lg:h-screen py-20 w-full flex flex-col items-center transition-opacity duration-500`}
    >
        <AllProjectsDisplay></AllProjectsDisplay>
    </section>
}