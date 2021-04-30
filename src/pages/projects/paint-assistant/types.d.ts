type PaintRecord = {
  name: string,
  svg: string,
  hexCode: string,
  filePath: string,
  rgb: RGB
};

type PaintData = Array<PaintRecord>;


type RGB = {
  r: Number,
  g: Number,
  b: Number
}