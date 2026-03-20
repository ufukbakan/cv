import { hydrate } from "../../infra/hydration";
import { use } from "../../infra/state";
import "./skills.sass";

export default function Skills() {
    const skillsPart1initial = [
        "Typescript",
        "JavaScript",
        "Semantic HTML",
        "Tailwind CSS",
        "Bootstrap",
        "Primeflex",
        "React",
        "React.js",
        "Preact",
        "Next.js",
        "Nest.js",
        "Vite.js",
        "WebGL",
        "Three.js",
        "Node.js",
        "Express.js",
        "ExpressJS",
        "Fastify",
        "Bun",
        "Spring Boot",
        "Java",
        "JPA",
        "JUnit",
        "Mockito",
        "Unit Testing",
        "Integration Testing",
        "RESTFul services",
        "Microservices",
        "Object Oriented Programming",
        "Git",
        "Github Actions",
        "Docker",
        "AWS EC2",
        "Atlassian Tools",
        "SQL",
        "PostgreSQL",
        "MySQL",
        "NoSQL",
        "Figma",
        "CSS",
        "SCSS",
    ];
    const skillsPart2initial = [
        "MongoDB",
        "Redis",
        "Hive",
        "Hadoop",
        "Trino",
        "Kafka",
        "Cassandra",
        "Grafana",
        "SonarQube",
        "Python",
        "PHP",
        "C",
        "C#",
        ".NET Core",
        "Mono",
        "Haskell",
        "Bash",
        "Shell scripting",
        "Wordpress",
        "Photoshop",
        "Illustrator",
        "Blender (3D Modelling)",
        "Godot",
        "GDScript",
        "Prolog",
        "x8086 Assembly",
        "Selenium",
        "Electron.js",
        "Vitest",
        "Jest",
        "Mocha",
        "Chai",
        "Sinon",
        "TypeORM",
        "Prisma",
        "MS Office",
        "Scala",
        "Affinity",
        "Sass",
        "Less",
    ];
    const skillsPart1 = use([...skillsPart1initial]);
    const skillsPart2 = use([...skillsPart2initial]);

    hydrate(() => {
        const matrix = document.getElementById("skills") as HTMLDivElement;
        const grids = matrix.querySelectorAll<HTMLDivElement>(".skills-grid")!;
        const search = document.getElementById("skill-search") as HTMLInputElement;

        const restartAnimation = () => {
            if (matrix.classList.contains("paused")) return;
            requestAnimationFrame(() => {
                matrix.classList.toggle("animate");
            });
        };

        grids[0].addEventListener("transitionend", restartAnimation);

        restartAnimation();

        const handleSearchInput = () => {
            const hasValue = search.value.trim().length > 0;

            if (hasValue) {
                const filteredSkills1 = skillsPart1initial.filter(skill => skill.toLowerCase().includes(search.value.toLowerCase()));
                const filteredSkills2 = skillsPart2initial.filter(skill => skill.toLowerCase().includes(search.value.toLowerCase()));
                skillsPart1.set(filteredSkills1);
                skillsPart2.set(filteredSkills2);
                matrix.classList.add("paused");
            } else {
                skillsPart1.set([...skillsPart1initial]);
                skillsPart2.set([...skillsPart2initial]);
                matrix.classList.remove("paused");
                matrix.classList.add("animate");
            }
        };

        search.addEventListener("input", handleSearchInput);

        const unsubscribeSkills1 = skillsPart1.subscribe((skills) => {
            grids[0]!.innerHTML = skills.map(skill => `<li>${skill}</li>`).join("");
        })

        const unsubscribeSkills2 = skillsPart2.subscribe((skills) => {
            grids[1]!.innerHTML = skills.map(skill => `<li>${skill}</li>`).join("");
        })

        return () => {
            grids[0].removeEventListener("transitionend", restartAnimation);
            search.removeEventListener("input", handleSearchInput);
            unsubscribeSkills1();
            unsubscribeSkills2();
        };
    });
    return (
        <section class="container skill-matrix" id="skills">
            <h2 class="section-title" style="text-align: center; letter-spacing: 0.1em; margin-bottom:0">
                Skill Matrix
            </h2>
            <input id="skill-search" type="search" placeholder="Search skills..." autocomplete="off" />
            <ul class="skills-grid">{skillsPart1.get().map(skill => <li>{skill}</li>)}</ul>
            <ul class="skills-grid">{skillsPart2.get().map(skill => <li>{skill}</li>)}</ul>
        </section>
    )
}