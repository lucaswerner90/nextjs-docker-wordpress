import React from 'react';
import { shallow } from 'enzyme';
import { About } from '../../pages/about';
import Layout from '../../src/components/Layout';

describe('Render about page correctly', () => {
    let _component;
    beforeEach(() => {
        _component = shallow(<About />);
    });
    afterEach(() => {

    });
    it('should render an about page with the correct layout components', () => {
        expect(_component.find(Layout).length).toBe(1);
    });
});