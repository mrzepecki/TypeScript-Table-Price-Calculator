export class Dimensions {
 private readonly _width: number;
 private readonly _height: number;

 constructor(width: number, height: number) {
  this._width = Math.floor(width);
  this._height = Math.floor(height);
 }

 get width(): number {
  return this._width;
 }

 get height(): number {
  return this._height;
 }
}
