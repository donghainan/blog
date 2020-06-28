import { observable, computed, action } from 'mobx'

class User {
  @observable count = 0
  @computed get currentCount() {
    return this.count + 5
  }
	@action increment() {
		this.count++
	}
}

export default new User()