import {useStoredData} from '../hooks/useStoredData'
// test that check the various functions of the useStoredData during the design and building the useStoredData custom hooks
// test names are self-explanatory
test('get init data', () => {
    () => {
        const [testDate, setTestDate] = useStoredData('testDate', 'init_test_date')
        expect(testDate).toBe('init_test_date')
    }
})

test('check setTestDate type is a function', () => {
    () => {
        const [testDate, setTestDate] = useStoredData('testDate', 'init_test_date')
        expect(typeof setTestDate === "function").toBe(true)
    }
})

test('check change data', () => {
    () => {
        const [testDate, setTestDate] = useStoredData('testDate', 'init_test_date')
        typeof setTestDate === "function"? setTestDate('new_test_date') : null
        expect(testDate).toBe('new_test_date')
    }
})

test('check init data with nothing', () => {
    () => {
        const [testDate, setTestDate] = useStoredData('testDate')
        expect(testDate).toBe('')
    }
})

test('data persist after reload', () => {
    () => {
        const [testDate, setTestDate] = useStoredData('testDate')
        typeof setTestDate === "function"? setTestDate('new_test_date') : null
        location.reload();
        expect(testDate).toBe('new_test_date')
    }
})

test('init with default value then change data and data persist after reload', () => {
    () => {
        const [testDate, setTestDate] = useStoredData('testDate', 'init')
        typeof setTestDate === "function"? setTestDate('new_test_date') : null
        location.reload();
        expect(testDate).toBe('new_test_date')
    }
})