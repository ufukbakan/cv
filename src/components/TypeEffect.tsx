import { onMount } from "../../infra/hydration";

interface Props{
    id: string;
    text: string;
    speed?: number;
    as?: string;
    infinite?: boolean;
    delay?: number;
    hideFirstRender?: boolean;
    onComplete?: (e: HTMLElement) => void;
}

export default function TypeEffect(props: Props & Partial<HTMLElement>) {
    const {
        id,
        text,
        as: Tag = 'span',
        infinite = true,
        speed,
        delay = 0,
        onComplete,
        hideFirstRender = false,
        ...rest
    } = props;
    onMount(() => {
        const speed = props.speed || 6;
        let length = 0;
        let intervalId: NodeJS.Timeout;
        function sliceText() {
            const element = document.getElementById(props.id);
            if(element) {
                element.innerText = props.text.slice(0, length);
            }
            length = length + 1;
            if (length > props.text.length) {
                clearInterval(intervalId!);
                onComplete?.(element!);
                if (!infinite) {
                    return;
                }
                length = 0;
                setTimeout(() => {
                    intervalId = setInterval(sliceText, 1000 / speed);
                }, delay);
            }
        }
        intervalId = setInterval(sliceText, 1000 / speed);
    });
    return (
        <Tag id={id} {...rest}>{ hideFirstRender ? '' : props.text}</Tag>
    );
}