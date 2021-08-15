
const db = idb.openDB('posts-store', 1, {
    upgrade(db) {
        db.createObjectStore('posts', {
            keyPath: 'id',
        }).createIndex('id', 'id');

        db.createObjectStore('sync-posts', {
            keyPath: 'id',
        }).createIndex('id', 'id');
    },
});

function writeData(st, data) {
    return db
        .then( dbPosts => {
            let tx = dbPosts.transaction(st, 'readwrite');
            let store = tx.objectStore(st);
            store.put(data);
            return tx.done;
        })
}

function readAllData(st) {
    return db
        .then( dbPosts => {
            let tx = dbPosts.transaction(st, 'readonly');
            let store = tx.objectStore(st);
            return store.getAll();
        })
}

function clearAllData(st) {
    return db
        .then( dbPosts => {
            let tx = dbPosts.transaction(st, 'readwrite');
            let store = tx.objectStore(st);
            store.clear();
            return tx.done;
        })
}

function deleteOneData(st, id) {
    db
        .then( dbPosts => {
            let tx = dbPosts.transaction(st, 'readwrite');
            let store = tx.objectStore(st);
            store.delete(id);
            return tx.done;
        })
        .then( () => {
            console.log('Data deleted ...');
            });
}

function deleteByTitle(st, title) {
    return db
        .then( dbPosts => {
            let tx = dbPosts.transaction(st, 'readonly');
            let store = tx.objectStore(st);
            let myIndex = store.index('id');
            myIndex.getAllKeys()
                .then( allKeys => {
                    for(let key of allKeys) {
                        myIndex.get(key)
                            .then( value => {
                                console.log('delete title', value.title);
                                if(value.title.includes(title)) {
                                    console.log('treffer ', value.title);
                                    console.log(' id ', value.id);
                                    console.log(' key', key);
                                    // deleteOneData(st, key);
                                }
                            } )
                    }
                })
        })
}
