export default function Visibility(element, action) {
    switch (action) {
        case 'show':
            element.style.display = 'block';
            let showFrames = 0;
            function showELement() {
                showFrames++
                if (showFrames === 100) clearInterval(show);
                else element.style.opacity = `${showFrames}%`;
            };
            const show = setInterval(showELement, 1);
            break;
        case 'hide':
            let hideFrame = 100;
            function hideElement() {
                hideFrame--
                if (hideFrame === 0) {
                    clearInterval(hide);
                    element.style.display = 'none';
                } else element.style.opacity = `${hideFrame}%`;
            };
            const hide = setInterval(hideElement, 1);
    };
};