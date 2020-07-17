import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {

    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"profile status text"} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("profile status text");
    });

    test("after creation span should be displayed ", () => {
        const component = create(<ProfileStatus status={"profile status text"} />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation input should not be displayed ", () => {
        const component = create(<ProfileStatus status={"profile status text"} />);
        const root = component.root;
        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });

    test("after creation span should include correct text ", () => {
        const component = create(<ProfileStatus status={"profile status text"} />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("profile status text");
    });

    test("input should be displayed after click on span instead of span", () => {
        const component = create(<ProfileStatus status={"profile status text"} />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("profile status text");
    });

    test("callback should be be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={"profile status text"} updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});
