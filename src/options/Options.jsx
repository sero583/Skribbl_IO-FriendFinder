import {useState, useEffect, useMemo} from "react";
import {
	Container,
	Typography,
	TextField,
	Box,
	Button,
	Link,
	Paper,
	Switch,
	FormGroup,
	FormControlLabel,
} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../../public/styles/Options.css";
import mockStorage from "../utils/MockStorage";

// Use chrome.storage if available, otherwise use mockStorage
const storage = typeof chrome !== "undefined" && chrome.storage ? chrome.storage : mockStorage;

const createCustomTheme = mode =>
	createTheme({
		palette: {
			mode,
		},
		components: {
			MuiPaper: {
				styleOverrides: {
					root: {
						transition:
							"background-color 0.3s ease, color 0.3s ease",
					},
				},
			},
		},
	});

function App() {
	const DEFAULT_SEARCH_SPEED = 750;
	const [searchSpeed, setSearchSpeed] = useState(DEFAULT_SEARCH_SPEED);
	const [inputValue, setInputValue] = useState("");
	const [error, setError] = useState("");
	const [caseSensitiveSearch, setCaseSensitiveSearch] = useState(false);
	const [containsSearch, setContainsSearch] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		// Load saved settings from storage
		storage.sync.get(
			["searchSpeed", "caseSensitiveSearch", "containsSearch"],
			result => {
				if(result.searchSpeed!==undefined) {
					setSearchSpeed(Number(result.searchSpeed));
					setInputValue(result.searchSpeed.toString());
				}
				if(result.caseSensitiveSearch!==undefined) {
					setCaseSensitiveSearch(
						result.caseSensitiveSearch==="true"
					);
				}
				if(result.containsSearch!==undefined) {
					setContainsSearch(result.containsSearch==="true");
				}
			}
		);
	}, []);

	useEffect(() => {
		// Set the theme based on the prefers-color-scheme
		const setThemeClass = () => {
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			setIsDarkMode(prefersDark);
		};
		setThemeClass();

		// Add event listener for changes in color scheme preference
		const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		darkModeMediaQuery.addEventListener("change", setThemeClass);

		// Cleanup event listener on component unmount
		return () => {
			darkModeMediaQuery.removeEventListener("change", setThemeClass);
		};
	}, []);

	const lightTheme = useMemo(() => createCustomTheme("light"), []);
	const darkTheme = useMemo(() => createCustomTheme("dark"), []);

	const handleSearchSpeedChange = event => {
		const value = event.target.value;
		setInputValue(value);
		if(value==="" || /^\d+$/.test(value)) {
			setError("");
		} else {
			setError("Please enter a valid number.");
		}
	};

	const handleSave = () => {
		if(error) {
			console.error("Invalid input.");
			return;
		}

		const valueToSave = inputValue==="" ? DEFAULT_SEARCH_SPEED : Number(inputValue);

		storage.sync.set(
			{
				searchSpeed: valueToSave,
				caseSensitiveSearch: caseSensitiveSearch.toString(),
				containsSearch: containsSearch.toString(),
			},
			() => {
				setSearchSpeed(valueToSave);
				setInputValue(valueToSave.toString());
				alert("Settings saved!");
			}
		);
	};

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<CssBaseline />
			<Container maxWidth="sm">
				<Paper elevation={3} className="container">
					<Typography variant="h4" gutterBottom>
						Options
					</Typography>
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center"
						mb={2}
					>
						<TextField
							label="Search Speed (ms)"
							variant="outlined"
							value={inputValue}
							onChange={handleSearchSpeedChange}
							error={!!error}
							helperText={error || "Enter the search speed in milliseconds"}
							fullWidth
						/>
						<FormGroup>
							<FormControlLabel
								control={
									<Switch
										checked={caseSensitiveSearch}
										onChange={event => setCaseSensitiveSearch(event.target.checked)}
										name="Case Sensitivity"
									/>
								}
								label={
									<Typography>
										<strong>Case-sensitive</strong> search
									</Typography>
								}
							/>
							<FormControlLabel
								control={
									<Switch
										checked={containsSearch}
										onChange={event => setContainsSearch(event.target.checked)}
										name="Contains Search"
									/>
								}
								label={
									<Typography>
										Search with{" "}
										<strong>contains term</strong>{" "}
										('Supercool Friend' could be found with
										'Supercool', 'Super', 'Friend', ...)
									</Typography>
								}
							/>
						</FormGroup>
					</Box>
					<Button
						variant="contained"
						color="primary"
						onClick={handleSave}
						fullWidth
					>
						Save
					</Button>
					<Box mt={2}>
						<Typography>
							This chrome addon was created by{" "}
							<Link
								href="https://serhat.gueler.dev"
								target="_blank"
							>
								Serhat Güler (sero583)
							</Link>
						</Typography>
					</Box>
				</Paper>
			</Container>
		</ThemeProvider>
	);
}

export default App;
