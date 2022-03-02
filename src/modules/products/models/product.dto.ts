export interface ProductDto {
  readonly id?: number;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly stock?: number;
  readonly image?: string;
}
