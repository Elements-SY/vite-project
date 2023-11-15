import { createPinia } from "pinia"
import { createPersistedState } from "pinia-plugin-persistedstate"
const store = createPinia()
// 状态持久化-插件配置
store.use(createPersistedState({
	serializer: {
		serialize: JSON.stringify,
		deserialize: JSON.parse
	}
}))
export default store
