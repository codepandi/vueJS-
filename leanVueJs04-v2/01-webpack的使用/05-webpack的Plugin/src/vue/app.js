export default {
	template: `
		<div>
			<h2>{{msg}}</h2>
			<button>按钮</button>
			<h2>{{name}}</h2>
		</div>
	`,
	data() {
		return {
			msg: 'Hello world',
			name: 'pan'
		}
	}
}