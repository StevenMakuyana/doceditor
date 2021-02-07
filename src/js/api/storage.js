const storageV1 = {
    config: {
        account: {
            hasAccount: false
        }
    },
    document: []
};

export default class Storage {
    constructor() {
        this.storageName = 'doceditorV1';
        this.storage = null;
    }
    init() {
        if(localStorage.getItem(this.storageName)) {
            this.storage = JSON.parse(localStorage.getItem(this.storageName));
        } else {
            localStorage.setItem(this.storageName, JSON.stringify(storageV1));
            this.storage = JSON.parse(localStorage.getItem(this.storageName));
        };
    };
    add(data = {}) {
        const date = new Date();
        this.storage.document.push({
            id: this.storage.document.length + 1 - 1,
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            title: data.title,
            document: data.document
        });
    };
};