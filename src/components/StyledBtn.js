import React from 'react';
import styled from 'styled-components';

export const StyledBtn = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: var(--primary-1);
  border: 2px solid var(--primary-1);
  padding: 10px 36px;
  border-radius: 3px;
  position: relative;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  z-index: 1;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  cursor: pointer;
  min-width: 140px;
  text-align: center;
  display: inline-block;
  &:hover{
      color: var(--white);
  }
  &::before{
    content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  border-radius: 1px;
  background: var(--primary-1);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  transition-property: -webkit-transform;
  -webkit-transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
    &:hover{
        -webkit-transform: scaleX(1);
    transform: scaleX(1);
    }
  }

`


