import { Dimensions } from "../helpers/Dimensions";

export class PriceTableCalculator {
 private table: any;
 private dimension: Dimensions;
 private calculationWidth: number;
 private calculationHeight: number;

 constructor(data: any, width: number, height: number) {
  this.table = data;
  this.dimension = new Dimensions(width, height);

  this.calculationWidth = null;
  this.calculationHeight = null;

  this.initialize();
 }

 get smallestWidth(): number {
  return Number(Object.keys(this.table)[0]);
 }

 get maximumWidth(): number {
  const keys = Object.keys(this.table);
  return Number(keys[keys.length - 1]);
 }

 get smallestHeight(): number {
  const values = Object.values(this.table)[0];
  const keys = Object.keys(values);
  return Number(keys[0]);
 }

 get maximumHeight(): number {
  const values = Object.values(this.table)[0];
  const keys = Object.keys(values);
  return Number(keys[keys.length - 1]);
 }

 get price(): number {
  return this.table[this.calculationWidth][this.calculationHeight];
 }

 private initialize(): void {
  this.setCalculationWidth();
  this.setCalculationHeight();
 }

 private setCalculationWidth(): void {
  if (this.dimension.width < this.smallestWidth) {
   this.calculationWidth = this.smallestWidth;
  } else if (this.dimension.width >= this.maximumWidth) {
   this.calculationWidth = this.maximumWidth;
  } else if (
   this.dimension.width >= this.smallestWidth &&
   this.dimension.width < this.maximumWidth
  ) {
   this.calculationWidth = this.findClosestWidth(this.dimension.width);
  }
 }

 private setCalculationHeight(): void {
  if (this.dimension.height < this.smallestHeight) {
   this.calculationHeight = this.smallestHeight;
  } else if (this.dimension.height >= this.maximumHeight) {
   this.calculationHeight = this.maximumHeight;
  } else if (
   this.dimension.height >= this.smallestHeight &&
   this.dimension.height < this.maximumHeight
  ) {
   this.calculationHeight = this.findClosestHeight(this.dimension.height);
  }
 }

 private findClosestWidth(width: number): number {
  const searchedWidth = Math.floor(width / 10) * 10;
  const keys = Object.keys(this.table);

  for (let i = 0; i < keys.length; i++) {
   if (searchedWidth >= Number(keys[i]) && searchedWidth < Number(keys[i + 1])) {
    return Number(keys[i]);
   }
  }

  return 0;
 }

 private findClosestHeight(height: number): number {
  const searchedHeight = Math.floor(height / 10) * 10;
  const keys = Object.keys(this.table[this.calculationWidth]);

  for (let i = 0; i < keys.length; i++) {
   if (searchedHeight >= Number(keys[i]) && searchedHeight < Number(keys[i + 1])) {
    return Number(keys[i]);
   }
  }

  return 0;
 }
}
