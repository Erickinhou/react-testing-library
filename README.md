# Test

React Test Library do unit and integration tests.

- Unit Tests -> test an isolated component behavior
- Integration Tests -> test the interaction between components
- E2E (Not covered) -> Simulate a user behavior, what they are going to do.

## Test block

The normal test steps in a test block:

- Render a component we to test

```javascript
render(<App />);
```

- Find elements we want to interact with

```javascript
const buttonElement = screen.getByText(/click me/i);
```

- Interact with those elements

```javascript
fireEvent.click(buttonElement);
```

- Assert the results are as expected

```javascript
expect(linkElement).toBeInTheDocument();
```

## Query methods

**get x find x query**

Get: It most used.

Query: If no match, don't throw an error.

Find: Can do things asynchronous.

![Query](https://i.stack.imgur.com/ewRcl.png)

### **To all test's it's better to mimic the user interaction as much as possible.**

- So use `getByRole`, `getByLabel`, `getByPlaceholderText` and `getByText` is some queries that is accessible to Everyone.
- Semantic Queries: `getByAltText` and `getByTitle`
- TestId: `getByTestId`

## Test Command

- `yarn` and `yarn test`
