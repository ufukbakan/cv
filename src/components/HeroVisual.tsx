import { transpile } from 'jjsx';
import { hydrate } from '../../infra/hydration';
import commandsTxt from '/commands.txt?raw';
import './hero.sass';
import TypeEffect from './TypeEffect';
const commands = commandsTxt.split('\n').filter(line => line.trim() !== '');

export default function HeroVisual() {
    hydrate(() => {
        let i = 0;
        const appendNextCommand = () => {
            const currentIndex = i;
            const container = document.querySelector('.floating-cards')!;
            container.innerHTML +=
                transpile(
                    <TypeEffect
                        as='div'
                        id={`command${currentIndex}`}
                        className='hero-floating-card'
                        text={commands[currentIndex]}
                        speed={25}
                        infinite={false}
                        hideFirstRender={true}
                        onComplete={() => {
                            if (i < commands.length - 2) {
                                setTimeout(() => {
                                    document.getElementById(`command${currentIndex}`)?.classList.add('fade-out');
                                }, 2000);
                                setTimeout(() => {
                                    document.getElementById(`command${currentIndex}`)?.remove();
                                }, 2500);
                            }
                            i++;
                            if (i < commands.length) {
                                setTimeout(() => {
                                    appendNextCommand();
                                }, 250);
                            }
                        }} />
                )
        }

        appendNextCommand();
    });

    return (
        <div class="hero-visual">
            <div class="hero-image-card">
                <div class="hero-image-overlay"></div>
                <picture>
                    <source
                        type="image/webp"
                        srcSet="https://lh3.googleusercontent.com/aida-public/AB6AXuB4_WWU7zjJpfn2n1v2gOpUu7fxYnsdFF_R_q-sOcZcRIbOqvuzH9h16qJzz4AQcekDNSJT6Awurxcmw_1hqoBVUee_xA2QoGg2dTTgvighQ9Gbw1hLJqTiHbC2vv2FaejX3LEnweEO6TFTNwQucaW0hCdLXuVnIE5MZdj4vLjmWQKsTmEKwyXaRfYPvNPxWjxDD_EN-0vDmnO04fX1nmO3DKAXvWDe2J6iaybtOXWFRm4NKwtrDf23fdtJG2_477EtcSdZ-S44fUXa?sz=1024 1024w, https://lh3.googleusercontent.com/aida-public/AB6AXuB4_WWU7zjJpfn2n1v2gOpUu7fxYnsdFF_R_q-sOcZcRIbOqvuzH9h16qJzz4AQcekDNSJT6Awurxcmw_1hqoBVUee_xA2QoGg2dTTgvighQ9Gbw1hLJqTiHbC2vv2FaejX3LEnweEO6TFTNwQucaW0hCdLXuVnIE5MZdj4vLjmWQKsTmEKwyXaRfYPvNPxWjxDD_EN-0vDmnO04fX1nmO3DKAXvWDe2J6iaybtOXWFRm4NKwtrDf23fdtJG2_477EtcSdZ-S44fUXa?sz=768 768w"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <img
                        alt="Tech Visual"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4_WWU7zjJpfn2n1v2gOpUu7fxYnsdFF_R_q-sOcZcRIbOqvuzH9h16qJzz4AQcekDNSJT6Awurxcmw_1hqoBVUee_xA2QoGg2dTTgvighQ9Gbw1hLJqTiHbC2vv2FaejX3LEnweEO6TFTNwQucaW0hCdLXuVnIE5MZdj4vLjmWQKsTmEKwyXaRfYPvNPxWjxDD_EN-0vDmnO04fX1nmO3DKAXvWDe2J6iaybtOXWFRm4NKwtrDf23fdtJG2_477EtcSdZ-S44fUXa?sz=1024"
                        width="1200"
                        height="900"
                        decoding="async"
                        fetchpriority="high"
                    />
                </picture>
                <div className="floating-cards"></div>
            </div>
        </div>
    )
}