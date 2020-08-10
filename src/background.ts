chrome.contextMenus.create({
        title: 'Add Task',
        id: 'addTask',
        contexts: ['selection']
    });

chrome.runtime.onInstalled.addListener(() => {
});
