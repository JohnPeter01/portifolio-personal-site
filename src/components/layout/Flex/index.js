import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

const Container = styled.div`
  display:flex;
  ${propToStyle('alignContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('alignSelf')}
  ${propToStyle('direction')}
  ${propToStyle('flex')}
  ${propToStyle('gap')}
  ${propToStyle('height')}
  ${propToStyle('width')}
  ${propToStyle('justifyContent')}
  ${propToStyle('minHeight')}
  ${propToStyle('maxHeight')}
  ${propToStyle('minHeight')}
  ${propToStyle('maxHeight')}
  ${propToStyle('warp')}
`;

const Item = styled.div`
  ${propToStyle('alignSelf')}
  ${propToStyle('flex')}
  ${propToStyle('height')}
  ${propToStyle('width')}
`;

export const Flex = {
  Container,
  Item,
};
