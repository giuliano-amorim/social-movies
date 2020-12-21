const slugfy = require('../service/slugfy')

test('slugfy str pizza de 4 queijos', () => {
  expect(slugfy('pizza de 4 queijos')).toBe('pizza-de-4-queijos');
})


test('slugfy str pizza de camarão com requeijão', () => {
    expect(slugfy('pizza de camarão com requeijão')).toBe('pizza-de-camarao-com-requeijao');
})
