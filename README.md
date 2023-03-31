# Countdown Component
This is a simple countdown component built with React.js that can be used to display a countdown timer on a web page.

## Getting Started
Prerequisites
To use this countdown component, you will need:

* Node.js (v14 or later)
* NPM (v6 or later)

## Installation
To install the component, follow these steps:

Clone the repository:
```bash
git clone https://github.com/GrzegorzGozdziak/countdown_component.git
```

Install the dependencies:
```bash
npm install
```

Usage
To use the countdown component, you can import it into your React.js application:

```javascript
import Countdown from './Countdown';


function App() {
  return (
    <div className="App">
      <Countdown endDate={new Date('December 31, 2023 23:59:59')} />
    </div>
  );
}

export default App;
```

In the example above, the Countdown component is imported and rendered with an endDate prop that specifies the date and time at which the countdown should end.

## Props
The Countdown component accepts the following props:

* endDate: the date and time at which the countdown should end (required)
* prefix: a string to display before the countdown (default: "Time left:")
* suffix: a string to display after the countdown (default: "")

## License
This project is licensed under the MIT License.
