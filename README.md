## About

A very lean and clean React.js reducer for handling simple form data in React using the useReducer hook, brought to you by BumaSoft.

## Usage

```
    import React from 'react';
    import formReducer, { formActions } from '@bumasoft/react-simple-form';
    
    function MyComponent(props) {
        const initialFormState = {
            field1: true,
            field2: 'testing',
            ...
            fieldN: 'some value
        };
    
        const reducer = formReducer(initialFormState);
        const [form, formDispatch] = useReducer(reducer, initialFormState);
        ...
    }
```

You can then use the **formDispatch** function to update the form data:

```
    formDispatch(formActions.set('field1', false)); // Sets field1 to false
```
```
    formDispatch(formActions.clear); // Clears all fields
```

Reading form data is straightforward:

```
    console.log(form.field1); // will output the value of field1 to the console
```
