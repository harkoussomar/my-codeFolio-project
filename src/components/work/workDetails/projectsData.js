import work1 from "../../../assets/work1.png";

import work2_1 from "../../../assets/work2_1.png";
import work2_2 from "../../../assets/work2_2.png";
import work2_3 from "../../../assets/work2_3.png";
import work2_4 from "../../../assets/work2_4.png";
import work2_5 from "../../../assets/work2_5.png";

import work3_1 from "../../../assets/work3_1.png";
import work3_2 from "../../../assets/work3_2.png";
import work3_3 from "../../../assets/work3_3.png";

import work4_1 from "../../../assets/work4_1.png";
import work4_2 from "../../../assets/work4_2.jpg";

export const projectsData = [
  {
    name: "Fast React Pizza Co.",
    path: "fast-react-pizza",
    images: [work2_1, , work2_2, work2_3, work2_4, work2_5],
    tableOfContents: [
      "Introduction",
      "Features",
      "Services",
      "Technologies Used",
    ],
    introduction: {
      description:
        "Fast-React-Pizza is a web application developed using React.js and Redux Toolkit for managing pizza orders. It provides users with an easy-to-use interface to browse a menu, add items to their cart, create orders, and view/update their orders. The project utilizes modern web development tools like Vite for fast bundling, React Router for routing, and Tailwind CSS for styling.",
    },
    features: [
      {
        name: "Cart Management",
        description:
          "The cart feature allows users to add, remove, and update the quantity of items in their cart. It provides functionalities like adding items to the cart, deleting items, increasing/decreasing item quantities, and clearing the entire cart.",
      },
      {
        name: "Menu Display",
        description:
          "The menu feature displays a list of available pizzas for users to browse. Each menu item includes details such as the pizza name, price, and description. Users can view the menu to select items to add to their cart.",
      },
      {
        name: "Order Management",
        description:
          "The order feature enables users to create new orders and view/update existing orders. Users can create orders by selecting items from the menu and adding them to their cart. They can then proceed to create a new order, providing necessary details like delivery address and contact information. Additionally, users can view their order history and update any existing orders as needed.",
      },
      {
        name: "User Management",
        description:
          "The user feature allows users to manage their profile information. Users can update their username and access their geolocation-based address for order delivery.",
      },
    ],
    services: [
      {
        name: "API Integration",
        description:
          "The project integrates with external APIs to fetch geolocation data and restaurant information. It utilizes services like apiGeocoding and apiRestaurant to retrieve user addresses based on their geolocation and fetch menu items from the restaurant database.",
      },
      {
        name: "Redux Setup",
        description:
          "Redux Toolkit is used for state management in the application. It provides a simplified API for configuring the Redux store, creating slices for managing specific parts of the state, and defining asynchronous actions using createAsyncThunk.",
      },
      {
        name: "User Geolocation",
        description:
          "The application leverages the browser's geolocation API to fetch the user's current position. This information is then used to retrieve the user's address through reverse geocoding. The user's address is displayed in the order form, allowing them to verify and correct it if necessary.",
      },
    ],
    technologiesUsed: [
      {
        name: "React.js",
        description: "Frontend library for building user interfaces.",
      },
      {
        name: "Redux Toolkit",
        description:
          "State management library for predictable state container.",
      },
      {
        name: "React Router DOM",
        description: "Declarative routing for React applications.",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for styling.",
      },
      {
        name: "Vite",
        description: "Next-generation frontend tooling for fast development.",
      },
      {
        name: "Node.js",
        description: "JavaScript runtime for server-side logic.",
      },
      {
        name: "API Geocoding",
        description: "Reverse geocoding API for retrieving user addresses.",
      },
    ],
  },
  {
    name: "usePopcorn",
    path: "usepopcorn",
    images: [work3_1, work3_2, work3_3],
    tableOfContents: [
      "Introduction",
      "Features",
      "Services",
      "Technologies Used",
    ],
    introduction: {
      description:
        "usePopcorn is a React application designed to help users search for movies, view detailed information about each movie, and manage their watched list. The app provides a user-friendly interface for searching movies, displaying movie details, and keeping track of watched movies.",
    },
    features: [
      {
        name: "Movie Search",
        description:
          "Users can search for movies by title using the search bar, providing quick and easy access to movie information.",
      },
      {
        name: "Movie Details",
        description:
          "Detailed information about each movie, including the title, poster, release year, runtime, IMDb rating, plot, director, actors, and genre, is displayed for users to review.",
      },
      {
        name: "Watched List",
        description:
          "Users can maintain a list of movies they've watched, with the option to rate and review the movies they’ve seen.",
      },
      {
        name: "Responsive Design",
        description:
          "The application is designed to function seamlessly across different screen sizes, ensuring optimal user experience on both desktop and mobile devices.",
      },
    ],
    services: [
      {
        name: "Movie Data Fetching",
        description:
          "The application fetches movie data from the OMDb API, ensuring users have access to the latest movie information and details.",
      },
      {
        name: "State Management",
        description:
          "Utilizes Context API and useReducer for managing application state efficiently, allowing for smooth user interactions and updates.",
      },
    ],
    technologiesUsed: [
      {
        name: "React",
        description:
          "The frontend of the application is built using React, a JavaScript library for building dynamic user interfaces.",
      },
      {
        name: "Context API and useReducer",
        description:
          "State management within the application is handled using React's Context API and useReducer hook for efficient data handling and interaction.",
      },
      {
        name: "OMDb API",
        description:
          "Movie data, including detailed information and search results, is fetched from the OMDb API to keep the movie database up to date.",
      },
    ],
  },
  {
    name: "WorldWise",
    path: "worldwise",
    images: [work4_1, work4_2],

    tableOfContents: [
      "Introduction",
      "Features",
      "Services",
      "Technologies Used",
    ],
    introduction: {
      description:
        "WorldWise is a front-end web application built with React that allows users to explore different cities and countries around the world. It provides a comprehensive set of features for browsing, adding, and managing cities, as well as viewing detailed information about each city.",
    },
    features: [
      {
        name: "City and Country Lists",
        description:
          "Browse through a list of cities, each displaying its name, position on the map, and an emoji representing its unique identity. Explore a list of countries, providing a broad overview of cities grouped by country.",
      },
      {
        name: "City Details",
        description:
          "View detailed information about each city, including its name, position on the map, emoji representation, and additional data. Utilize an interactive map powered by Leaflet to visualize the exact location of each city and explore nearby areas.",
      },
      {
        name: "Add New City",
        description:
          "Add new cities to the database by filling out a form with relevant details, including the city's name, position (latitude and longitude), and an emoji to represent it. Ensure data integrity and accuracy through form validation, preventing the addition of incomplete or incorrect city information.",
      },
      {
        name: "Product and Pricing",
        description:
          "Browse through different products or services offered by the application, each showcasing its features, benefits, and pricing plans. Explore detailed pricing information for different subscription tiers or service packages, enabling users to select the plan that best suits their needs.",
      },
      {
        name: "Protected Routes",
        description:
          "Access secure pages and functionality by authenticating through a login page, providing a username and password. Utilize protected routes to ensure that only authenticated users have access to certain pages, such as adding new cities.",
      },
      {
        name: "Responsive Design",
        description:
          "Experience a seamless user experience across various devices and screen sizes, thanks to the application's responsive design and adaptive layout.",
      },
    ],
    services: [
      {
        name: "City Management",
        description:
          "The application allows users to add, remove, and update city information, ensuring an up-to-date database for exploration.",
      },
      {
        name: "User Authentication",
        description:
          "Users can create accounts and log in, allowing them to access personalized features and manage their city lists securely.",
      },
    ],
    technologiesUsed: [
      {
        name: "React",
        description:
          "The frontend of the application is built using React, a JavaScript library for building user interfaces.",
      },
      {
        name: "React Router",
        description:
          "React Router is used for handling navigation and routing within the application, enabling seamless page transitions and URL management.",
      },
      {
        name: "Context API",
        description:
          "Context API is employed for state management, allowing components to share data without having to pass props manually, enhancing code organization and maintainability.",
      },
      {
        name: "Leaflet",
        description:
          "Leaflet is integrated for interactive maps, enabling users to visualize the locations of cities and explore nearby areas with ease.",
      },
    ],
  },
  {
    name: "Library Management System",
    path: "library-management",
    images: [work1],
    tableOfContents: [
      "Introduction",
      "Features",
      "Services",
      "Technologies Used",
    ],
    introduction: {
      description:
        "The Library Management System is a comprehensive C program designed to manage books and users. It supports operations like adding, removing, updating, and searching books and users, while also providing features such as borrowing and returning books, tracking activities via a stack, and managing user requests through a queue. The system employs a binary search tree for efficient book searching and ensures persistent storage of data by loading and saving files.",
    },
    features: [
      {
        name: "Book Management",
        description:
          "Allows users to add, remove, update, search, and display books within the system.",
      },
      {
        name: "User Management",
        description:
          "Facilitates adding, removing, updating, searching, and displaying user information.",
      },
      {
        name: "Borrowing System",
        description:
          "Enables users to borrow and return books, with real-time updates on the availability status of books.",
      },
      {
        name: "Activity Tracking",
        description:
          "Uses a stack to track and maintain a history of recent activities for easy reference.",
      },
      {
        name: "Request Queue",
        description:
          "Manages user requests through a queue, ensuring smooth handling of operations and processing requests in an orderly manner.",
      },
    ],
    services: [
      {
        name: "Persistent Storage",
        description:
          "Ensures that all data related to books and users is saved to and loaded from files, allowing for long-term data storage.",
      },
      {
        name: "Binary Search Tree (BST)",
        description:
          "The system utilizes a binary search tree for efficient searching of books by title, allowing faster retrieval of book information.",
      },
    ],
    technologiesUsed: [
      {
        name: "C Programming Language",
        description:
          "The project is implemented in C, making use of various data structures and algorithms.",
      },
      {
        name: "Stack",
        description:
          "Used to maintain a list of recent activities for tracking user interactions.",
      },
      {
        name: "Queue",
        description:
          "Implemented to manage user requests in a first-in, first-out (FIFO) order.",
      },
      {
        name: "Binary Search Tree",
        description:
          "A binary search tree (BST) is used to efficiently search for books by their titles.",
      },
      {
        name: "File I/O",
        description:
          "The system uses file input/output operations to save and load books and users data from files, ensuring persistence.",
      },
    ],
  },
];
