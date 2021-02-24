As a user I want an app that displays a list of 4 counters, each with their own counter value, name, and description.

- npx create-react-app folder_name
- npm install node-sass
- start the server: npm run start / yarn start
- create components structure
  - create components folder
  - create src/components/counter.js
  - create src/components/counter.scss
- counter component
  - const [currentCount, setCurrentCount] = useState(0)
  - display score (currentCount)
  - increment button
    - onClick --> call a function that does:
      setCurrentCount(currentCount + 1)
  - props: name, description
  - display name, description
  - add some style in counter.scss
- in App component
  - import the counter
  - create an array of objects
    - each object will have a name, and description
  - interpolate array using map
    - return an instance of the counter component
    - pass into counter component name and description

As a user I want to display a random piece of advice in each counter.
  The random piece of advice should come from this API: https://api.adviceslip.com/advice

- npm install axios
- Counter:
  - state: advice
  - fetch data inside useEffect and then setAdvice
