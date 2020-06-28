import { observable, computed, action } from 'mobx'
class AppStore {
  @observable count = 0
  @computed get currentCount() {
    return this.count + 5
  }
	@action increment() {
		this.count++
	}
}

const store = new AppStore()

export default store
