import  resolve  from 'rollup-plugin-node-resolve';
import terser from '@yuloh/rollup-plugin-terser';


export default [{
		input: 'src/main.js',
		output: {
			file: 'public/bundle.js',
			format: 'iife', // immediately-invoked function expression — suitable for <script> tags
			sourcemap: false
		},
		plugins: [
			resolve(), // tells Rollup how to find date-fns in node_modules		

		]
	},
	{
		input: 'public/bundle.js',
		output: {
			file: 'public/bundle-min.js',
			format: 'umd', // immediately-invoked function expression — suitable for <script> tags
			sourcemap: false
		},
		plugins: [
			terser(), // tells Rollup how to find date-fns in node_modules		

		]

	},


];