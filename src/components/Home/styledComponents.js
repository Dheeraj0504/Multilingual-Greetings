import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 50px;
`

export const UnorderedList = styled.ul`
  display: flex;
`

export const ListItem = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  color: ${props => (props.isActiveTab ? '#ffffff' : '#db1c48')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  background-color: ${props => (props.isActiveTab ? '#db1c48' : 'transparent')};
  border: 2px solid #db1c48;
  border-radius: 16px;
  margin: 4px 12px;
  padding: 8px 16px;
  outline: none;
  cursor: pointer;
`

export const Image = styled.img`
  width: 100%;
  height: 65vh;
  margin-top: 25px;
`
