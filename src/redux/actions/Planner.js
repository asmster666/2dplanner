export function createLayout(layout) {
    return {
        type: 'CREATE_LAYOUT',
        layout
    };
};

export function updateLayout(items) {
    return {
        type: 'ADD_LAYOUT_ITEMS',
        items
    }
};

export function saveLayout() {
    return {
        type: 'SAVE_LAYOUT'
    }
};

export function deleteLayout(id) {
    return {
        type: 'DELETE_LAYOUT',
        id
    }
};

export function saveLayoutItems() {
    return {
        type: 'SAVE_LAYOUT_ITEMS'
    }
};

export function deleteLayoutItems(id) {
    return {
        type: 'DELETE_LAYOUT_ITEMS',
        id
    }
};