import { testForTest, isEven, getUserFullName, getAverage, processUser, greetUser, processNumbers } from "./handle";

describe("testForTest", () => {
  it("возвращает true для чисел внутри диапазона", () => {
    expect(testForTest(1)).not.toBe(false);
    expect(testForTest(50)).toBe(true);
    expect(testForTest(99)).toBe(true);
  });

  it("возвращает false для чисел вне диапазона", () => {
    expect(testForTest(0)).toBe(false);
    expect(testForTest(100)).toBe(false);
    expect(testForTest(-10)).toBe(false);
    expect(testForTest(150)).toBe(false); 
  });

  it("работает с граничными значениями", () => {
    expect(testForTest(0.0001)).toBe(true);
    expect(testForTest(99.9999)).toBe(true);
  });
});

describe("isEven", ()=> {
  it('Правильно работает с четными числами', () => {
    expect(isEven(2)).toBe(true)
    expect(isEven(210)).toBe(true)
  });

  it("Правильно работает с нечетными числами", () => {
    expect(isEven(1)).toBe(false)
    expect(isEven(109)).toBe(false)
    expect(isEven(1.3)).toBe(false)
  })
})

describe('getUserFullName', () => {
  it('Есть firstName и lastName', () => {
    expect(getUserFullName({firstName:'Nik', lastName: 'Svet'})).toBe('Nik Svet')
    expect(getUserFullName({firstName:'12', lastName: 'on'})).toBe('12 on')
  })

  it('Есть firstName', () => {
    expect(getUserFullName({firstName:'Nik', lastName: ''})).toBe('Nik')
    expect(getUserFullName({firstName:'12'})).toBe('12')
  })

  it('Есть lastName', () => {
    expect(getUserFullName({lastName: 'Svet'})).toBe('Svet')
    expect(getUserFullName({firstName:'', lastName: 'on'})).toBe('on')
  })

  it('Нет входных данных', () => {
    expect(() => getUserFullName({})).toThrow('User has no name')
    expect(() => getUserFullName({firstName:'', lastName: undefined})).toThrow('User has no name')
  })
})

describe('getAverage', () => {
  it('Расбота с корректными данными', () => {
    expect(getAverage([5,6,10])).toBe(7)
  })

  it('Расбота с NaN в массиве', () => {
    expect(getAverage([4,NaN,10])).toBe(7)
  })

  it('Расбота с невлидными значениями', () => {
    expect(() => getAverage([NaN,NaN,NaN])).toThrow("No valid numbers")
    expect(() => getAverage([])).toThrow("Array is empty")
  })
})

describe('processUser', () => {
  it('Вызов колбэка с именем пользователя', () => {
    const mockCallback = jest.fn()
    processUser({name: 'Alex'}, mockCallback)
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith('Alex')
  })

  it('Вызов без name', () => {
    const mockCallback = jest.fn()

    expect(() => processUser({}, mockCallback)).toThrow("User has no name");
    expect(mockCallback).not.toHaveBeenCalled()
  })
})

describe('greetUser', () => {
  it('В объекте есть name', () => {
    const mockCallback = jest.fn()
    greetUser({firstName: 'Alex'}, mockCallback)

    expect(mockCallback).toHaveBeenCalledTimes(1)
    expect(mockCallback).toHaveBeenCalledWith('Hello, Alex!')
  })

  it('В объускте нет name', () => {
    const mockCallback = jest.fn()

    expect(()=> greetUser({}, mockCallback)).toThrow("User has no firstName")
    expect(mockCallback).not.toHaveBeenCalled()
  })
})

describe('processNumbers', () => {
  it('Корректный массив', () => {
    const mockCallback = jest.fn()
    processNumbers([3,5,8], mockCallback)

    expect(mockCallback).toHaveBeenCalledTimes(3)
    expect(mockCallback).toHaveBeenNthCalledWith(1, "Number: 3")
    expect(mockCallback).toHaveBeenNthCalledWith(2, "Number: 5")
    expect(mockCallback).toHaveBeenNthCalledWith(3, "Number: 8")
  })

  it('Пустой массив', () => {
    const mockCallback = jest.fn()

    expect(() => processNumbers([], mockCallback)).toThrow("Array is empty")
    expect(mockCallback).not.toHaveBeenCalled()
  })
})