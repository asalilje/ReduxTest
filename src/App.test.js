import expect from 'expect';
import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';
import Styles from './styles/main.less';

function setup(name) {
    const props = {
        name: name,
        params: {
          filter: "all"
        }
    };
    return shallow(<App {...props} />);
}

function className(name) {
    return `.${name}`;
}

describe("App", () => {

    it("should contain a div with the text", () => {
        const wrapper = setup();
        expect(wrapper.find(className(Styles.text)).length).toBe(1);
    });

    it("should say Hello Test! when passing Test as prop name", () => {
        const wrapper = setup("Test");
        expect(wrapper.find(className(Styles.text)).text()).toBe("Hello Test!");
    });

    it("should say Hello ! when passing no prop name", () => {
        const wrapper = setup();
        expect(wrapper.find(className(Styles.text)).text()).toBe("Hello !");
    });

});
