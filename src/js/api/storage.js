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
};