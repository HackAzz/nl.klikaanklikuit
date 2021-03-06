'use strict';
/* eslint-disable */
const config = {
	class: 'sensor',
	pair: {
		viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
		views: [{
			template: '../lib/pair/imitate.html',
			options: {
				body: 'devices.AMST-606.views.generic_imitate.body',
				prepend: [],
				append: [],
				svg: '../../433_generator/assets/ALMST-2000/pair.svg',
				title: 'devices.AMST-606.views.generic_imitate.title',
				svgWidth: '50vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				previous: true,
				next: false
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_imitate'
		}, {
			template: '../lib/pair/test_remote.html',
			options: {
				body: 'devices.AMST-606.views.generic_test_remote.body',
				initWithDeviceData: true,
				prepend: [],
				append: [],
				svg: '../../433_generator/assets/ALMST-2000/test.svg',
				title: 'devices.AMST-606.views.generic_test_remote.title',
				svgWidth: '50vw',
				svgHeight: '70vh',
				previous: true,
				next: true
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_test_remote'
		}, {
			template: '../lib/pair/done.html',
			options: {
				title: 'views.generic_done.title',
				prepend: [],
				append: []
			},
			prepend: [],
			append: [],
			id: 'generic_done'
		}]
	},
	images: {
		large: '../../433_generator/assets/ALMST-2000/images/large.jpg',
		small: '../../433_generator/assets/ALMST-2000/images/small.jpg'
	},
	id: 'ALMST-2000',
	driver: '../../433_generator/drivers/kaku/sensor.js',
	signal: {
		sof: [210, 2724],
		eof: [210],
		words: [
			[210, 320, 210, 1320],
			[210, 1320, 210, 320]
		],
		interval: 10150,
		sensitivity: 0.9,
		repetitions: 10,
		minimalLength: 32,
		maximalLength: 32
	},
	conditions: [{
		id: 'ALMST-2000:state',
		title: 'devices.AMST-606.conditions.state.title',
		args: [{
			name: 'device',
			type: 'device',
			filter: 'driver_id=ALMST-2000'
		}]
	}],
	name: 'devices.ALMST-2000.name',
	icon: '../../433_generator/assets/ALMST-2000/icon.svg',
	capabilities: ['alarm_contact']
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
