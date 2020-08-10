chrome.contextMenus.create({
        title: 'Add Task',
        id: 'addTask'
    });

chrome.runtime.onInstalled.addListener(() => {
});
