import Footer from "../components/Footer";

export default function Layout(props: JSX.ComponentProps) {
    return (<>
        <header class="site-header">
            <div class="container nav-wrapper">
                <div class="logo-block">
                    <div class="logo-icon">
                        <span class="material-symbols-outlined">terminal</span>
                    </div>
                    <span class="logo-text">Ufuk Bakan</span>
                </div>
                <nav class="nav-menu">
                    <a class="nav-link" href="#journey">Experience</a>
                    <a class="nav-link" href="#skills">Skills</a>
                    <a class="nav-link" href="#learning">Certifications</a>
                    <a class="nav-link" href="#education">Education</a>
                </nav>
                <div class="header-actions">
                    <button class="resume-btn">Resume</button>
                </div>
            </div>
        </header>
        <main>{props.children}</main>
        <Footer />
    </>
    )
}