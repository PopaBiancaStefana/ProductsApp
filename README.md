# Products App

A modern e-commerce style application built with Expo and React Native.

 This app features a product catalog fetched from a public API, detailed product screens with the ability to favorite items, a global search bar, and a custom global font.

## Technologies Used

- **React Native** and **Expo**
- **Expo Router** for file-based routing
- **Zustand** for state management (managing products and favorites)
- **Expo Font** for loading custom fonts
- **FakeStoreAPI** for sample product data

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed.
- **Expo CLI** installed globally:
```bash
  npm install -g expo-cli
```

### Install dependencies:

```bash
  npm install
  # or
  yarn install
```

### Running the App
Start the Expo development server:

```bash
  npx expo start
```
Press i for iOS Simulator, a for Android Emulator, or scan the QR code with the Expo Go app on your device.


### Project Structure
```bash
products-app/
├── app/
│   ├── index.tsx          # Main product listing screen (with search and favorites functionality)
│   ├── details.tsx        # Product details screen
│   └── _layout.tsx        # Root layout for navigation and global font loading & product fetching
├── assets/
│   └── fonts/
│       └── Bilo.otf       # Custom font file
├── components/
│   └── Buttons/
│       └──IconButton.tsx  # Icon button component for navigation
│       └──LongButton.tsx  # Button used for "Add to Cart"
│   ├── CustomText.tsx     # Global text component applying custom font
│   ├── SearchBar.tsx      # Reusable searchbar component
│   ├── Separator.tsx      # Reusable separator component (line)
├── constants/
│   ├── Colors.tsx         # Color theme for the app
├── layout/
│   ├── ProductCard.tsx    # Displays an individual product in a grid with favorite button
│   ├── ProductsList.tsx   # Displays the grid of filtered products by name or favorite
├── models/
│   ├── Product.tsx        # Model for defining the product
├── store/
│   └── productStore.ts    # Zustand store for products and favorites management
└──
```