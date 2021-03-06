import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { COLORS } from 'elements/colors/colors'
const { $powder, $gray, $pitch, $hotCoral, $smoke, $overcast } = COLORS

const ChipList = styled.ul`
  display: inline;
  list-style-type: none;
  margin: 0;
  padding: 0;

  &:last-child {
    min-height: 21px;
  }
`
const ChipItem = styled.li`
  border: 1px solid ${$gray};
  border-radius: 3px;
  color: ${$pitch};
  cursor: pointer;
  display: inline-flex;
  align-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  margin-bottom: 2px;
  margin-right: 3px;
  margin-top: 2px;
  text-transform: lowercase;
  background-color: ${props => (props.active ? $smoke : $powder)};
  padding: ${props => (props.active ? '2px 5px 2px 6px' : '2px 12px')};

  &:first-of-type {
    margin-left: 20px;
  }

  span {
    display: inline-block;
    font-size: 18px;
    font-weight: 100;
    line-height: 16px;
    padding-left: 4px;
    vertical-align: middle;
    &:hover {
      color: ${$hotCoral};
    }
  }

  &:hover {
    border-color: ${$overcast};
  }
`
export default class Chips extends Component {
  removeTag(tag) {
    this.props.removeTag(tag)
  }

  render() {
    const listItems = this.props.tags.map((chip, index) => {
      const marked = this.props.marked.includes(chip)

      return (
        <ChipItem
          active={marked}
          key={index}
          onMouseDown={event => event.preventDefault()}
          onClick={() => this.props.toggleActive(chip, marked)}>
          {chip}
          {marked && (
            <span onClick={this.removeTag.bind(this, chip)}>&times;</span>
          )}
        </ChipItem>
      )
    })

    return <ChipList>{listItems}</ChipList>
  }
}

Chips.propTypes = {
  tags: PropTypes.array,
  marked: PropTypes.array,
  toggleActive: PropTypes.func
}
