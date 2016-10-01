
import React from 'react'
import { shallow } from 'enzyme'
import { PanelHeader } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<PanelHeader />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('PanelHeader')
})

test('accepts custom className props', () => {
  wrapper = shallow(<PanelHeader className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('PanelHeader foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<PanelHeader style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<PanelHeader />, {
    context: {
      rebass: {
        PanelHeader: {
          marginLeft: 0
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  expect(inner.props().style.marginLeft).toBe(0)
})

test('style props override context styles', () => {
  wrapper = shallow(
    <PanelHeader
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            PanelHeader: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

