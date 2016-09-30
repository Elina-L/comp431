import React from 'react'
import TestUtils from 'react-addons-test-utils'
import {findDOMNode} from 'react-dom'
import {expect} from 'chai'

import { ToDoItem } from './todoItem'

describe('Validate ToDoItem', () => {

	it('should display a single ToDo', () => {
		const node = TestUtils.renderIntoDocument(
			<div>
			<ToDoItem text="TestItem" done={false} toggle={() => {}} remove={() => {}}/>
			</div>
			)
		// use TestUtils.renderIntoDocument
		const elements = findDOMNode(node).children[0]
		expect(elements.children.length).to.equal(3)
		expect(elements.children[0].className).to.equal('check glyphicon glyphicon-check');
		expect(elements.children[1].className).to.equal('');
		expect(elements.children[2].className).to.equal('destroy glyphicon glyphicon-remove');

		expect(elements.children[1].innerHTML).equal('TestItem')
		// findDOMNode and assert 3 children of the ToDoItem element
		// assert the className is ''
		// assert the innerHTML of the todo is the text you initially set
	})

	it('should toggle completed when clicked', () => {
		let toggled = false
		const node =  TestUtils.renderIntoDocument(
			<div>
				<ToDoItem text="TestItem" done={false} toggle={() => { toggled=true }} remove={() => {}}/>
			</div>)
		// // use TestUtils.renderIntoDocument
		expect(toggled).to.be.false;
		const elements = findDOMNode(node).children[0];
		TestUtils.Simulate.click(elements.children[0]);
		expect(toggled).to.equal.true;
		// // when the checkbox is clicked via TestUtils.Simulate.click()
		// // we expect the variable toggled to be true
		// expent(toggled).to.be.true;
	})

	it('should remove an item when clicked', () => {
		let removed = false
		// const node = TestUtils.renderIntoDocument(
		// 	)
		const node = TestUtils.renderIntoDocument(
			<div>
			<ToDoItem text="TestItem" done={false} toggle={() => {}} remove={() => {removed=true}}/>
			</div>
			)
		// // use TestUtils.renderIntoDocument
		expect(removed).to.equal.false;
		const elements = findDOMNode(node).children[0];
		TestUtils.Simulate.click(elements.children[2]);
		expect(removed).to.equal.true;
		// // when the remove button is clicked via TestUtils.Simulate.click()
		// // we expect the variable removed to be true
		// expect(removed).to.be.false;
	})

	it('should display a completed ToDo', () => {
		// const node = TestUtils.renderIntoDocument(
		const node = TestUtils.renderIntoDocument(
			<div><ToDoItem text="TestItem" done={true} toggle={() => {}} remove={() => {}}/></div>
			)
		// 	)
		// use TestUtils.renderIntoDocument
		// the item should have done=true
		// assert that the rendered className is "completed"
		const elements = findDOMNode(node).children[0];
		expect(elements.children[1].className).to.equal("completed")		
	})

})
