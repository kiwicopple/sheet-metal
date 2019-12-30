import { types } from 'mobx-state-tree'

const Sheet = types.model({
  sheetId: types.string,
  userId: types.string,
})

const RootStore = types
  .model({
    newSheetModalVisible: false,
    sheets: types.optional(types.map(Sheet), {}),
  })
  .actions(self => ({
    addSheet: (sheetId, userId) => self.sheets.set(sheetId, Sheet.create({ sheetId, userId })),
    removeSheet: id => self.sheets.delete(id),
    setNewSheetModalVisible: isVisible => (self.newSheetModalVisible = isVisible),
  }))

const store = RootStore.create({})

export default store
