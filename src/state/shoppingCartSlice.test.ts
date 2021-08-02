import shoppingCartReducer, {
  ShoppingCartState,
  addProduct,
  removeProduct,
  incrementProductQuantity,
  decrementProductQuantity,
} from './shoppingCartSlice';

describe('shopping cart reducer', () => {
  const initialState: ShoppingCartState = {
    items: {},
    modalVisble: false,
  };

  const testProduct = {
    id: 446,
    title: 'test',
    supplier: 'test',
    tax: '0.19',
    price_real: '22451',
    image: 'image.png',
    thumbnail: 'image.png',
    description: 'description',
    units_sf: 1,
    slug: 'test',
    category: 'test',
    subcategory: 'test',
    net_content: '30g',
    sellos: [{ name: 'test', image: 'image.png' }],
  };

  it('should handle initial state', () => {
    expect(shoppingCartReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle add new product', () => {
    const actual = shoppingCartReducer(initialState, addProduct(testProduct));
    expect(446 in actual.items).toBeTruthy();
  });

  it('should handle add a exist product', () => {
    const actual = shoppingCartReducer(
      {
        ...initialState,
        items: { 446: { product: testProduct, quantity: 1 } },
      },
      addProduct(testProduct)
    );
    expect(actual.items[446].quantity).toEqual(2);
  });

  it('should handle remove product', () => {
    const actual = shoppingCartReducer(
      {
        ...initialState,
        items: { 446: { product: testProduct, quantity: 1 } },
      },
      removeProduct(446)
    );
    expect(446 in actual.items).toBeFalsy();
  });

  it('should handle increment product quantity', () => {
    const actual = shoppingCartReducer(
      {
        ...initialState,
        items: {
          446: { product: testProduct, quantity: 3 },
        },
      },
      incrementProductQuantity(446)
    );
    expect(actual.items[446].quantity).toEqual(4);
  });

  it('should handle decrement product quantity', () => {
    const actual = shoppingCartReducer(
      {
        ...initialState,
        items: {
          446: { product: testProduct, quantity: 3 },
          445: { product: testProduct, quantity: 3 },
        },
      },
      decrementProductQuantity(446)
    );
    expect(actual.items[446].quantity).toEqual(2);
    expect(actual.items[445].quantity).toEqual(3);
  });
});
