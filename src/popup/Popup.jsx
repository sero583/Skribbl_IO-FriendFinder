import { useState, useEffect, useMemo } from "react";
import {
	Button,
	TextField,
	Typography,
	Container,
	Box,
	CssBaseline,
	Tooltip,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../../public/styles/Popup.css";
import mockStorage from "../utils/MockStorage";

// Use chrome.storage if available, otherwise use mockStorage
const storage = typeof chrome!=="undefined"&&chrome.storage?chrome.storage:mockStorage;

function App() {
	const [searchSpeed, setSearchSpeed] = useState(750);
	const [friendName, setFriendName] = useState("");
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [inputError, setInputError] = useState(null);
	const [isSearching, setIsSearching] = useState(false);
	const [isOnSkribbl, setIsOnSkribbl] = useState(false);
	const [activeTabId, setActiveTabId] = useState(null);
	const [currentTabId, setCurrentTabId] = useState(null);

	const updateUIFromStatus = (status) => {
		setIsSearching(status?.isSearching ?? false);
		if(status?.activeTabId) {
			setActiveTabId(status.activeTabId);
		} else if((status?.isSearching ?? false)===false) setActiveTabId(null);
		if(status?.searchName) {
			setFriendName(status.searchName);
		}
	};

	useEffect(() => {
		const checkStatus = () => {
			chrome.runtime.sendMessage({ action: "status" }, (response) => {
				if(chrome.runtime.lastError) {
					console.error(chrome.runtime.lastError);
					return;
				}
				updateUIFromStatus(response);
			});
		};

		const checkActiveTab = async () => {
			const tabs = await queryTabs();
			const activeTabUrl = tabs[0]?.url;
			setIsOnSkribbl(activeTabUrl?.startsWith("https://skribbl.io") || activeTabUrl?.startsWith("http://skribbl.io"));
			checkStatus();
		};

		checkActiveTab();

		storage.sync.get(["searchSpeed", "friendName", "isSearching"], result => {
			setSearchSpeed(Number(result.searchSpeed) || 750);
			setFriendName(result.friendName || "");
			setIsSearching(result.isSearching || false);
		});

		const setThemeClass = () => {
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			setIsDarkMode(prefersDark);
		};

		setThemeClass();

		const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		darkModeMediaQuery.addEventListener("change", setThemeClass);
	
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			if(tabs.length>0) {
				setCurrentTabId(tabs[0].id);
			}
		});

		const searchStoppedListener = (message) => {
			if(message?.action==="searchStopped") storage.sync.set({isSearching: false}, () => {
				updateUIFromStatus({isSearching: false});
			});
		}
		chrome.runtime.onMessage.addListener(searchStoppedListener);

		return () => {
			chrome.runtime.onMessage.removeListener(searchStoppedListener);
			darkModeMediaQuery.removeEventListener("change", setThemeClass);
		};
	}, []);

	const queryTabs = () => {
		return new Promise(resolve => {
			chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
				resolve(tabs);
			});
		});
	};

	const startSearch = () => {
		if(friendName.trim()==="") {
			setInputError("Friend name cannot be empty.");
		} else if(friendName.startsWith(" ")) {
			setInputError("No spaces before the actual name.");
		} else if(friendName.endsWith(" ")) {
			setInputError("No leading spaces after the name.");
		} else storage.sync.set({ friendName: friendName, isSearching: true }, () => {
			chrome.runtime.sendMessage({
				action: "startSearch",
				name: friendName,
				speed: searchSpeed,
			}, (response) => {
				if(chrome.runtime.lastError) {
					console.error(chrome.runtime.lastError);
					return;
				}
				storage.sync.set({isSearching: response?.isSearching}, () => {
					updateUIFromStatus({
						isSearching: response?.isSearching,
						activeTabId: response?.activeTabId,
						searchName: friendName,
					});
				});
			});
		});
	};

	const stopSearch = () => {
		chrome.runtime.sendMessage({ action: "stopSearch" }, (response) => {
			if(chrome.runtime.lastError) {
				console.error(chrome.runtime.lastError);
				return;
			}
			storage.sync.set({ isSearching: false }, () => {
				updateUIFromStatus({
					isSearching: false,
					activeTabId: null,
					searchName: "",
				});
			});
		});
	};

	const handleVisitSkribbl = () => {
		queryTabs().then(tabs => {
			const skribblTab = tabs.find(tab => tab.url?.startsWith("https://skribbl.io") || tab.url?.startsWith("http://skribbl.io"));
			if(skribblTab) {
				chrome.tabs.update(skribblTab.id, { active: true });
			} else chrome.tabs.create({ url: "https://skribbl.io" });
		});
	};

	const lightTheme = useMemo(() => createTheme({ palette: { mode: "light" } }), []);
	const darkTheme = useMemo(() => createTheme({ palette: { mode: "dark" } }), []);

	const inputField = (
		<TextField
			name="friendName"
			label="Friend's Name"
			variant="outlined"
			fullWidth
			value={friendName}
			onChange={event => {
				const value = event.target.value;
				setFriendName(value);
				if(inputError && value?.length>0) setInputError(null);
			}}
			error={!!inputError}
			helperText={inputError || "Input searched player's name"}
			disabled={isSearching}
			autoFocus
		/>
	);

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<CssBaseline />
			<Container component="main" maxWidth="xs" /*maxWidth="sm"*/>
				<Box sx={{
					display: "flex",
					flexDirection: "column",
					my: 4
				}}>
					{!isOnSkribbl ? (
						<Button
							variant="contained"
							color="primary"
							fullWidth
							onClick={handleVisitSkribbl}
						>
							Visit skribbl.io
						</Button>
					) : (
						<>
							<Typography variant="h5" gutterBottom>
								Search for a Friend on Skribbl.io
							</Typography>
							{(!activeTabId && currentTabId || (activeTabId===currentTabId)) ?
								!isSearching ? (
									<>
										{inputField}
										<Button
											variant="contained"
											color="primary"
											fullWidth
											onClick={startSearch}
											sx={{ mt: 2, mr: 1 }}
										>
											Start search
										</Button>
									</>
								) : (
									<>
										<Tooltip
											title={"Stop search before changing name"}
											PopperProps={{
												modifiers: [{
													name: "offset",
													options: {
														offset: [0, 0],
													},
												}],
											}}
										>
											{inputField}
										</Tooltip>
										<Button
											variant="contained"
											color="secondary"
											fullWidth
											onClick={stopSearch}
											sx={{ mt: 2 }}
										>
											Stop search
										</Button>
									</>
								) : (
									<Button
										variant="contained"
										color="primary"
										fullWidth
										onClick={() => {
											chrome.tabs.update(activeTabId, {active: true});
										}}	
									>
										Switch to searching tab
									</Button>
								)
							}
						</>
					)}
					<Button
						variant="outlined"
						fullWidth
						onClick={() => {
							if(chrome.runtime.openOptionsPage) {
								chrome.runtime.openOptionsPage();
							} else window.open(chrome.runtime.getURL("options.html"));
						}}
						sx={{ marginTop: "2.5vh" }}
					>
						Open settings
					</Button>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default App;
