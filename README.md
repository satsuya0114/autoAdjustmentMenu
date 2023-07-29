# Auto Adjustment Menu Button Demo

This is a demo showcasing an auto-adjustment menu button component. The menu button can be placed in any position of the web page and adapts to the length of menu items and proximity to the border of the viewport. The component can be used with navigation bars, data table rows, or even in popup modals.

### Environment Requirements

- Node.js v18.16.0
- Yarn v1.22.10

### Installation

To install the required dependencies, run the following command:

```
yarn
```

### Start the Development Server

To start the development server and view the demo locally, run the following command:

```
yarn start
```

Then, open your web browser and navigate to http://localhost:3700.

### How to Use

Click on the pink circle button to open the menu. The menu button automatically adjusts its position based on the provided configuration and changes in the browser size.

The main component responsible for the auto-adjustment menu button is located at @/components/MenuIcon.

### MenuIcon Props

The MenuIcon component accepts the following props:

```typescript=
type MenuIconProps = {
  parentRef?: RefObject<HTMLDivElement>;
  defaultPlacementX?: 'top' | 'bottom';
  defaultPlacementY?: 'start' | 'end';
};
```

- parentRef: Use the parent element as an anchor to ensure the proper position of the MenuIcon and the height of the menu list.
- defaultPlacementX: Optional prop to set the default horizontal placement of the menu.
- defaultPlacementY: Optional prop to set the default vertical placement of the menu.

#### Building the Project

To build the project into a production-ready folder, run the following command:

```
yarn build
```

Feel free to explore the demo, click the buttons, and resize your browser to see the auto-adjustment in action!

If you have any questions or need further assistance, please don't hesitate to ask. Enjoy the demo!
