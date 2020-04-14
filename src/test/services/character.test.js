import suma from '../../services/characters';

test('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1,2)).toBe(3);
});