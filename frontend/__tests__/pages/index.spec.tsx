import React from 'react';
import { shallow } from 'enzyme';
import { Index } from '../../pages/index';
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
        expect(_component.find(Typography).length).toBe(2);
    });
});