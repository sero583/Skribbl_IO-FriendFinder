import mockStorage from "../utils/MockStorage";

// Use chrome.storage if available, otherwise use mockStorage
const storage = typeof chrome!=="undefined"&&chrome.storage?chrome.storage:mockStorage;

function getSettings(callback) {
	storage.sync.get(["caseSensitiveSearch", "containsSearch"], function (result) {
		const settings = {
			caseSensitiveSearch: result.caseSensitiveSearch==="true",
			containsSearch: result.containsSearch==="true",
		};
		callback(settings);
	});
}

function isPlayerInList(playerName, ownName, settings) {
    const playerElements = document.querySelectorAll("#game-players .player-info .player-name");

    ownName = ownName.trim();

    if(!settings.caseSensitiveSearch) {
        ownName = ownName.toLowerCase();
        playerName = playerName.toLowerCase();
    }

    for(let playerElement of playerElements) {
        let currentPlayerName = playerElement.textContent.trim();
        if(!settings.caseSensitiveSearch) {
            currentPlayerName = currentPlayerName.toLowerCase();
        }

        // Ensure the ownName check is accurate
        const startsWithOwnName = currentPlayerName.startsWith(ownName);
        // If it doesn't start with ownName, proceed with the rest of the logic
        if(!startsWithOwnName) {
            if(settings.containsSearch) {
                if(currentPlayerName.includes(playerName)) {
                    return playerElement.textContent;
                }
            } else if(currentPlayerName === playerName) {
                return playerElement.textContent;
            }
        }
    }
    return false;
}

function clickButtonByText(text) {
	const buttons = document.querySelectorAll("button");

	for(const button of buttons) {
		if(button.textContent.trim()===text) {
			button.click();
			return true;
		}
	}
	return false;
}

function goIntoNextSession() {
	const button = document.querySelector(".button-play");

	if(button) {
		button.click();
		setTimeout(() => clickButtonByText("Okay!"), 100);
		return true;
	}
	console.error("Button with ID 'button-play' not found.");
	return false;
}

function searchForFriendByName(friendName, settings) {
	const home = document.querySelector("#home");

	if(home) {
		const homeDisplayStyle = getComputedStyle(home).display;

		if(homeDisplayStyle==="none") {
			const ownName = document.querySelector("#home .input-name");
			const result = isPlayerInList(friendName, ownName.value, settings);
			if(ownName?.value && result!==false) {
				return result;
			}
			goIntoNextSession();
		} else goIntoNextSession();
	}
	return false;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if(request?.action==="searchFriend") {
		getSettings(settings => { sendResponse({found: searchForFriendByName(request?.name, settings)}); });
		return true; // Indicates that the response is asynchronous
	} else if(request?.message==="showAlert") {
		alert(request?.content);
	}
});
