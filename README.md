This is a README file.

1. The Vue Instance [x]
2. Attribute Binding [x]
3. Conditional Rendering [x]
4. List Rendering [x]
5. Event Handling [x]
6. Class & Style Binding [x]
7. Computed Properties []
8. Components []
9. Communicating Events []
10. Forms []
11. Tabs []

- Install "Vue.js devtools", which is offered by https://vuejs.org, on Google Chrome
- Make sure the "Allow access to file URLs" is enabled

## The Vue Instance

- The Vue instance is the root of a Vue application, it is like a heart that powers everything.

- The options object passed to the instance of view can handle data as well as actions.

- We include in the options object specifically where to inject or plug into the application.

- An expression can be used to evaluate or produce a value.
  - You can use it to add characters to your value.
  - You can use it to combine values.
  - You can use it to perform conditional logic.
  - You can use it to perform and chain operations to your value.

- Anywhere that relies on our instance's data will update accordingly, which demonstrates Vue's nature of reactivity and the reactivity system.

## Attribute Binding

- Data can be bound to HTML attributes.

- Syntax is v-bind: or : for short.

- The attribute name that comes after the : specifies the attribute we’re binding data to.

- Inside the attribute’s quotes, we reference the data we’re binding to.

## Conditional Rendering

- There are Vue directives to conditionally render elements:
  - v-if
  - v-else-if
  - v-else
  - v-show

- If whatever is inside the directive’s quotes is truthy, the element will display.

- You can use expressions inside the directive’s quotes.

- V-show only toggles visibility, it does not insert or remove the element from the DOM.

## List Rendering

- The v-for directive allows us to iterate over an array to display data.

- We use an alias for the element in the array being iterated on, and specify the name of the array we are looping through. Ex: v-for="item in items"

- We can loop over an array of objects and use dot notation to display values from the objects.

- When using v-for it is recommended to give each rendered element its own unique key.

## Event Handling

- The v-on directive is used to allow elements to listen for events
- The shorthand for v-on is @
- You can specify the type of event to listen for:
  - click
  - mouseover
  - any other DOM event
- The v-on directive can trigger a method
- Triggered methods can take in arguments
- `this` refers to the current Vue instance’s data as well as other methods declared inside the instance

## Class & Style Binding

- Data can be bound to an element’s style attribute
- Data can be bound to an element’s class
- We can use expressions inside an element’s class binding to evaluate whether a class should appear or not

## Computed Properties

- Computed properties calculate a value rather than store a value.
- Computed properties can use data from your app to calculate its values.