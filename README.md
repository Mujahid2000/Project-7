Question 1.Add at least 3 Project features.
answer:

1. The homepage serves as the central element of the course registration website, featuring a grid display of available courses for selection. Users can easily pick their desired courses for registration.
2. It also maintains a record of the selected courses, promptly notifying users with error messages if they attempt to register for the same course again or exceed the credit limit.
3. The Cart section provides a comprehensive view of your selected courses, remaining credit hours, and the total cost. It simplifies the organization of this data, making it easy to track your course choices, monitor remaining credits, and understand your financial commitment.

Question 2: Discuss how you managed the state in your assignment project.
answer: The first use state in the home file is used to fetch data. So that the desired data can be shown using the loop/map of the data. And the next use state is used for handleSelectedLanguage. Which is placed in the form of array function with onclick inside the button. And the array is copied using the spreadsheet option used inside handleSelectedLanguage. Also check the duplicated course and show messagse. if not found then add course.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
