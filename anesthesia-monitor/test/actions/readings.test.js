import * as actions from '../../src/actions'

describe('actions', () => {
  it('should create an action to add a reading', () => {
    const info = {temp:"101", heartRate:"94"}
    const id = reference.push(reading).path.o[1]
    const expectedAction = {
      type: 'ADD_READING',
      info: {temp:"101", heartRate: "94"},
      id
    }
    expect(actions.addReading(info, id)).toEqual(expectedAction)
  })
})
