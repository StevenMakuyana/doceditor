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
};