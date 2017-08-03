
import * as ReactTransitionGroup from 'react-addons-transition-group';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as _TestUtils from 'react-addons-test-utils';
import * as React from 'react';

declare module 'react' {
    namespace TestUtils {
        type ShallowRenderer = _TestUtils.ShallowRenderer;
    }
    var addons: {
        CSSTransitionGroup: ReactCSSTransitionGroup;
        TransitionGroup: typeof ReactTransitionGroup;
        TestUtils: typeof _TestUtils;
    };
}
