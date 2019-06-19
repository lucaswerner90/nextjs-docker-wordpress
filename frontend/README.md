# Next.js frontend application

## How to use

Install it and run:

```sh
yarn
yarn run dev
```

## Testing

```sh
yarn test
```

Use **watch** mode:

```sh
yarn test:watch
```

### Test's file structure

#### Basic Online examples

[Open link](https://github.com/zeit/next.js/blob/canary/examples/with-jest-typescript/src/modules/auth/__tests__/Login.test.tsx)

```javascript
import React from 'react'
import { shallow } from 'enzyme'

import Login from './../Login'

describe('Login', () => {
  it('renders the h1 title', () => {
    const login = shallow(<Login />)
    expect(login.find('h1').text()).toEqual('Login')
  })

  it('renders the form', () => {
    const login = shallow(<Login />)
    expect(login.find('form')).toHaveLength(1)
  })

  it('changes the text of email', () => {
    const login = shallow(<Login />)
    login.find('#formEmail').simulate('change', {
      target: {
        name: 'email',
        value: 'some@test.com',
      },
    })
    expect(
      login
        .update()
        .find('#formEmail')
        .props().value
    ).toEqual('some@test.com')
  })

  it('changes the text of login button after clicking it', () => {
    const login = shallow(<Login />)
    login.find('#loginSubmit').simulate('click', { preventDefault() {} })
    expect(
      login
        .update()
        .find('#loginSubmit')
        .text()
    ).toEqual('Logging in...')
  })
})
```

#### Without Redux Store

```javascript
import React from 'react';
import { shallow } from 'enzyme';
import { Index } from '../../pages/index';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Layout from '../../src/components/Layout';

describe('Render index page correctly', () => {
    let _component;
    beforeEach(() => {
        _component = shallow(<Index />);
    });
    afterEach(() => {

    });
    it('should render an index page with the correct layout components', () => {
        expect(_component.find(Layout).length).toBe(1);
    });
});
```

#### With Redux Store

```javascript
import React from 'react';
import { shallow } from 'enzyme';
import { Index } from '../../pages/index';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Layout from '../../src/components/Layout';

// Redux extras
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import { initialState } from '../../src/redux/store';

// Setup fake store
const mockStore = configureMockStore();
const store = mockStore({ ...initialState });



describe('Render index page correctly', () => {
    let _component;
    beforeEach(() => {
        _component = shallow(<Provider store={store}><Index /></Provider>);
    });
    afterEach(() => {

    });
    it('should render an index page with the correct layout components', () => {
        expect(_component.find(Layout).length).toBe(1);
    });
});
```


## Usefull information

* [Difference between Shallow, Mount and render of Enzyme](https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913)
* [Enzyme API](https://airbnb.io/enzyme/docs/api/)
