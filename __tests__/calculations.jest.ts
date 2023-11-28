import { Dimensions } from "../src/helpers/Dimensions";
import { PriceTableCalculator } from "../src/calculator/PriceTableCalculator";
import exampleTable from '../src/price-tables/example_table';

test('Price - based on table calculation', () => {
 const dimensions = new Dimensions(20, 30)
 const calculation = new PriceTableCalculator(
  exampleTable,
  dimensions.width,
  dimensions.height
 )

 expect(calculation.price).toBe(74)
})

test('Price - based on table calculation', () => {
 const dimensions = new Dimensions(123, 20)
 const calculation = new PriceTableCalculator(
  exampleTable,
  dimensions.width,
  dimensions.height
 )

 expect(calculation.price).toBe(94)
})

test('Price - based on table calculation', () => {
 const dimensions = new Dimensions(0, 20)
 const calculation = new PriceTableCalculator(
  exampleTable,
  dimensions.width,
  dimensions.height
 )

 expect(calculation.price).toBe(74)
})