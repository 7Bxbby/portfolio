import project2Image from "./vaultguard_logo.png";
import project1Image from "./studystreak_logo.png";
import project3Image from "./directorycleaner_logo.png";
import Image from "next/image";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";
import Link from "next/link";

export default function allProjectsDisplay() {
    return (
        <div
            className="lg:max-w-6xl max-w-full lg:mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5  xl:px-40 2xl:px-5 gap-x-24 md:gap-x-10 lg:gap-x-12 p-0 lg:px-5">
            {["VaultGuard", "StudyStreak", "DirCleaner"].map((name, index) => (
                <Link href={["projects/vaultguard","projects/studystreak","projects/directorycleaner"][index]} key={index} className={"flex justify-center"}>
                    <CardContainer className="relative group rounded-lg cursor-pointer border-2">
                        <CardBody className="group-hover:shadow-2xl w-full h-fit transition-all duration-300">
                            {/* Tekst */}
                            <CardItem translateZ="80"
                                      className="gothic p-8 relative text-white text-center text-3xl -mb-8 w-full group-hover:scale-105 transition-all duration-300 ease-in-out">
                                {name}
                            </CardItem>
                            {/* Obrazek */}
                            <CardItem translateZ="50">
                                <Image
                                    src={[project2Image,project1Image,project3Image][index]}
                                    alt={`Project ${index + 1}`}
                                    className="object-contain h-64 w-fit transition-transform duration-300 group-hover:scale-110 rounded-lg"
                                />
                            </CardItem>
                            {/* Przycisk */}
                            <CardItem translateZ={90}
                                      className=" text-center w-full text-xs font-bold pb-7">
                                {["Effortlessly organize your files!", "Manage passwords with ease!", "Track your learning sessions!"][index]}
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </Link>
            ))}
        </div>
    )
}