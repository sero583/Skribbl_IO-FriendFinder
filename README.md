# Skribbl_IO-FriendFinder

**Skribbl_IO-FriendFinder** is a Chrome extension designed to automate the process of finding your friends in public Skribbl.io lobbies. Built with React and Material-UI (MUI), this extension allows you to seamlessly join public lobbies where your friends are present, eliminating the need to create private games.

## Disclaimer

**Important:** This extension is intended for educational purposes only. The creator is not responsible for any misuse, abuse, or any consequences resulting from the use of this extension. Users should respect the terms of service of Skribbl.io and other applicable regulations.

## How It Works

Skribbl_IO-FriendFinder uses a straightforward method to locate your friend in public lobbies. Here’s how it works:

1. **Input**: You enter your friend's username in the extension.
2. **Search**: The extension automatically joins and leaves public lobbies until it finds a match with your friend’s username.
3. **Join**: Once a match is found, the extension stops, and you're placed in the same lobby as your friend.

## Installation

### 1. **Download the Extension**

To install the extension without building it yourself, follow these steps:

- Download the latest release from [here](#https://github.com/sero583/Skribbl_IO-FriendFinder/releases/tag/main) and save the ZIP file.
- Extract the ZIP file into a folder.
- Open Chrome and navigate to `chrome://extensions`.
- Enable "Developer mode" using the toggle in the top-right corner.
- Click "Load unpacked" and select the extracted folder.

The extension should now be installed and ready to use.

*Note*: I plan to submit this extension to the Chrome Web Store in the future to simplify the installation process.

### 2. **Manual Installation for Development**

If you wish to build and test the extension yourself, here’s how to do it:

- **Clone the Repository**

  ```bash
  git clone https://github.com/your-repo/skribblio-friendfinder.git
  cd skribblio-friendfinder
  ```
- **Install Dependencies**

Ensure that Node.js is installed, then run:

```bash
npm install
```

- **Run the Development Server**

To start the development server, use:

```bash
npm run dev
```

- **Build the Extension**

To create a production-ready build, run:

```bash
npm run build
```

- **Preview the Build**

To preview the production build locally, use:

```bash
npm run preview
```

- **Load the Extension in Chrome**

1. Open Chrome and navigate to ``chrome://extensions/``.
2. Enable "Developer mode" in the top right.
3. Click "Load unpacked" and select the build directory.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or submit a pull request. Please make sure to follow the code of conduct when contributing.

## License

This project is licensed under the MIT License. For more details, see the LICENSE file.

## Copyright

© Serhat Güler (sero583). All rights reserved.