# To-Do List Application
A simple to-do list web application built with TypeScript. This program allows you to add tasks, mark them as completed, toggle their state, and delete them. It also persists your tasks using local storage so that your list is maintained across browser sessions.

## Features
- ### Add Tasks:
  Enter a task in the input field and press "Enter" or click an add button (if implemented) to add it to your list.
- ### Task Completion:
  Click on an incomplete task to mark it as complete. The task is moved to the completed tasks list along with a timestamp.
- ### Task Deletion:
  Each task displays a trash can icon (using Font Awesome). Clicking the trash can will delete the task from the list without toggling its completion status.
- ### Local Storage Integration:
  The application saves your tasks to local storage. When you refresh or reopen the browser, your tasks are automatically loaded.
- ### Responsive UI:
  The tasks are displayed with different background colors (using a predefined color array) to enhance visual appeal.

## Installation
1. ### Clone the Repository:
```bash
git clone https://github.com/your-username/todo-list-typescript.git
cd todo-list-typescript
```
2. ### Install Dependencies:
If you’re using a bundler or module loader (e.g., Webpack) along with a package manager like npm, install the necessary dependencies:
```
npm install
```
*Note*: This example assumes that you have configured your project to compile TypeScript to JavaScript.

3. ### Include Font Awesome:
Ensure that you include the Font Awesome CSS in your index.html file so that the icons display correctly. For example, add the following in the <head> section:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTTXRN3ZUcEXAMPLEHASH" crossorigin="anonymous" referrerpolicy="no-referrer" />
```
## Usage
1. ### Build the Application:
Compile the TypeScript code to JavaScript (using your preferred build system):
```bash
npm run build
```
2. ### Open the Application:
Open your `index.html` file in a web browser. You should see an input field for tasks, and two lists labeled for incomplete and completed tasks.

3. ### Interacting with the App:
- **Adding Tasks:** Type a task into the input field and press "Enter." The task appears in the incomplete tasks list.
- **Marking Tasks as Complete:** Click on an incomplete task to mark it as completed. The task is moved to the completed list and displays the completion timestamp.
- **Deleting Tasks:** Click on the trash can icon next to a task to delete it. The icon has its own event listener that prevents accidental toggling of the task’s state.
- **Local Storage Persistence:** The tasks are automatically saved to local storage. If you refresh or reopen the browser, your tasks will be loaded and rendered.

## Code Overview
- **`Task` Interface:** Defines the structure of a task, including the task topic, its completion status, and an optional completed date.
- **Event Handling:**
  - Tasks are toggled between completed and incomplete states by clicking on the list item.
  - A separate click handler on the trash can icon (with `event.stopPropagation()`) allows deletion without affecting the task status.
- **Local Storage:** The application saves the `taskList` array to local storage after each update and retrieves it when the page loads, ensuring persistent data storage.

## Contributing
Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
