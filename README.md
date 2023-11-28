# Table price calculator – TS

This TypeScript price calculator is designed to determine the price based on a given price table and product dimensions.

## Challange

The challenge involved calculating the price of a product where specific prices were assigned based on both width and height dimensions. In cases where dimensions were missing for a particular price, the calculation was set to use the last available value for that dimension.

## Solution

I've developed a calculator that takes in a table formatted appropriately, along with width and height inputs. This tool is designed to handle calculations based on the provided data, allowing for dynamic pricing calculations dependent on both width and height dimensions.

## Key feature

Key feature include finding the nearest width and height in the table based on the provided dimensions, and ultimately calculating the price based on these selected values. The calculator takes into account constraints regarding the minimum and maximum width and height, and it searches for the closest values when the provided dimensions do not precisely match the data in the table.

## How to prepare table file?

In first row is width, in first column is height.

|  | 30 | 60  | 90  |
|------------------|----|-----|-----|
| 60               | 74 | 84  | 94  |
| 70               | 79 | 89  | 99  |
| 80               | 85 | 95  | 105 |
| 90               | 91 | 101 | 111 |
| 100              | 97  | 107 | 143 |

### Example and pattern

To prepare the file for correct calculation, prepare it as shown below.

```
export default {
    30: {
        60: 74,
        70: 79,
        80: 85,
        90: 91,
        100: 97
    },
    // [width]: {
    //     [height]: price,
    //     ...
    // },
}
```

## Using calculator

Import calculator, dimensions helper and example table:

```
import { Dimensions } from "../src/helpers/Dimensions";
import { PriceTableCalculator } from "../src/calculator/PriceTableCalculator";
import exampleTable from '../src/price-tables/example_table';
```

Create 2 instances od classes Dimensions and PriceTabeCalculator and prepare calculation. You can get your price using getter `.price` on calculation instance. 
```
const dimensions = new Dimensions(20, 30)
const calculation = new PriceTableCalculator(
exampleTable,
dimensions.width,
dimensions.height
)

console.log(calculation.price)
```