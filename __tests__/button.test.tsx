import renderer from "react-test-renderer";
import { describe, it, expect } from "@jest/globals";

import { ButtonMore } from "../src/components/ButtonMore";

describe("Card tests", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ButtonMore />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
