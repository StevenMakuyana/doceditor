import Storage from './api/storage.js';
import Visibility from './api/visibility.js';
import docDisplayer from './components/doc_displayer.js';

const main = document.getElementById('main');

const storage = new Storage();
storage.init();

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

window.addEventListener('load', function() {
    main.innerHTML = docDisplayer(storage.storage.document);
});