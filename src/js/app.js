import Visibility from './api/visibility.js';

function mainDropdownEventHandler() {
    const mainDropdown = document.getElementById('main-dropdown');

    document.getElementById('main-dropdown-btn')
        .addEventListener('click', () => {
            Visibility(mainDropdown, 'show');
            document.getElementById('main-dropdown-close-btn')
                .addEventListener('click', () => {
                    Visibility(mainDropdown, 'hide');
                });
        });
};

mainDropdownEventHandler();