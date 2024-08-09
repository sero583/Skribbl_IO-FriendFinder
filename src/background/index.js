let searcherIntervalID = null;
let activeTabId = null;
let currentSearchName = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if(request.action==="startSearch") {
		if(searcherIntervalID) {
			clearInterval(searcherIntervalID);
		}

		chrome.tabs.query({active: true, currentWindow: true}, tabs => {
			if(tabs.length>0) {
				activeTabId = tabs[0].id;
				currentSearchName = request.name;

				searcherIntervalID = setInterval(() => {
					chrome.tabs.query({active: true, currentWindow: true}, tabs => {
						if(tabs.length>0 && tabs[0].id===activeTabId) {
							const currentTabId = tabs[0].id;

							chrome.tabs.sendMessage(
								currentTabId,
								{action: "searchFriend", name: request.name},
								response => {
									if(response?.found ?? false!==false) {
										// clear searching interval
										clearInterval(searcherIntervalID);
										// clear local variables
										searcherIntervalID = null;
										activeTabId = null;
										// clear storage
										chrome.storage.sync.set({isSearching: false, activeTabId: null, searchName: ""});
										// send to popup, that search has stopped for UI update
										chrome.runtime.sendMessage({
											action: "searchStopped",
											activeTabId: currentTabId
										});
										// send to content to supply an alert, that friend has been found
										chrome.tabs.sendMessage(currentTabId, {
											message: "showAlert",
											content: `Found session with player named "${response?.found}!"`,
										});
									}
								}
							);
						}
					});
				}, request.speed);
				sendResponse({isSearching: true, activeTabId: activeTabId});
			}
		});
	} else if(request.action==="stopSearch") {
		if(searcherIntervalID) {
			clearInterval(searcherIntervalID);
			searcherIntervalID = null;
			activeTabId = null;
			currentSearchName = null;
		}
		chrome.storage.sync.set({isSearching: false, activeTabId: null});
		sendResponse({isSearching: false});
	} else if(request.action==="status") {
		sendResponse({
			isSearching: !!searcherIntervalID,
			activeTabId: activeTabId,
			searchName: currentSearchName
		});
	}
	return true;
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
	if(tabId===activeTabId && searcherIntervalID) {
		clearInterval(searcherIntervalID);
		searcherIntervalID = null;
		activeTabId = null;
		currentSearchName = null;
		chrome.storage.sync.set({isSearching: false});
	}
});
