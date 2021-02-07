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

function contextMenuEventHandler() {
    document.querySelectorAll('#context-menu-btn').forEach(button => {
        button.addEventListener('click', event => {
            const contextMenuID = event.target.getAttribute('ctxid');
            document.querySelectorAll('.context-menu').forEach(contextMenu => {
                if(contextMenu.getAttribute('menuid') == contextMenuID) {
                    Visibility(contextMenu, 'show');
                    contextMenu.addEventListener('click', () => Visibility(contextMenu, 'hide'));
                } else Visibility(contextMenu, 'hide');
            });
        });
    });
};

mainDropdownEventHandler();

window.addEventListener('load', function() {
    main.innerHTML = docDisplayer(storage.storage.document);
    contextMenuEventHandler();

    document.querySelectorAll('.delete').forEach(button => {
        button.onclick = event => {
            const id = event.target.getAttribute('deleteid');
            storage.remove(id);
            storage.save();
            location.reload();
        };
    });
});