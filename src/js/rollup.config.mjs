import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

export default {
	input: "src/index.js",
	output: {
		file: "../django_idom/static/django_idom/client.js",
		format: "esm",
	},
	plugins: [
		resolve(),
		commonjs(),
		replace({
			"process.env.NODE_ENV": JSON.stringify("production"),
		}),
	],
	onwarn: function (warning) {
		console.warn(warning.message);
	},
};
