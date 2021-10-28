const tax= require('./tax_calculator');

  test('25000 should return No tax', () => {
    expect(tax(25000)).toBe("No TAX");
  });
  test('750000 should return 150000', () => {
    expect(tax(750000)).toBe(150000);
  });
  test('655555 should return 131111', () => {
    expect(tax(655555)).toBe(131111);
  });
  test('275200 should return 27520', () => {
    expect(tax(275200)).toBe(27520);
  });
  test('354520 should return 35452', () => {
    expect(tax(354520)).toBe(35452);
  });
  test('480550 should return 48055', () => {
    expect(tax(480550)).toBe(48055);
  });
  test('1154000 should return 346200', () => {
    expect(tax(1154000)).toBe(346200);
  });
  test('1554880 should return 466464', () => {
    expect(tax(1554880)).toBe(466464);
  });