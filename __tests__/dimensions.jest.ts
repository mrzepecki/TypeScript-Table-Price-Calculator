import { Dimensions } from "../src/helpers/Dimensions";

test('Calculator dimensions - returning width and height values', () => {
    const dimensions = new Dimensions(20, 30)

    expect(dimensions.width).toBe(20)
    expect(dimensions.height).toBe(30)
})
