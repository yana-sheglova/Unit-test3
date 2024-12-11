import getLevel from '../getLevel';
import fetchData from '../http';

jest.mock('../http');

describe('getLevel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return user level if response status is ok', () => {
    fetchData.mockReturnValue({
      status: 'ok',
      level: 5,
    });

    const result = getLevel(1);
    expect(result).toBe('Ваш текущий уровень: 5');
  });

  test('should return error message if response status is not ok', () => {
    fetchData.mockReturnValue({
      status: 'error',
      level: null,
    });

    const result = getLevel(1);
    expect(result).toBe('Информация об уровне временно недоступна');
  });
});
