This is a README file.

1. The Vue Instance [x]
2. Attribute Binding [x]
3. Conditional Rendering [x]
4. List Rendering []
5. Event Handling []
6. Class & Style Binding []
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