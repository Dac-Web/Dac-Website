import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {color} from './Info/ColorTheme';
export const Button = styled(Link)`
  border-radius: 50px;
  background: ${color.Blue};
  white-space: nowrap;
  padding: ${({big}) =>  (big ? '14px  48px' : '12px 30px')};
  color: ${color.Grey};
  font-size:${({fontBig}) =>  (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration:none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${color.Grey};
    color: ${color.Blue};
    border: 1px solid ${color.Blue};

  }
`