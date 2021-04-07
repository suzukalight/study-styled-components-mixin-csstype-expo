import * as CSS from 'csstype';
import { css } from 'styled-components';

export type BorderProps = {
  border: CSS.Property.Border;
  borderWidth: CSS.Property.BorderWidth;
  borderStyle: CSS.Property.BorderStyle;
  borderColor: CSS.Property.BorderColor;
  borderRadius: CSS.Property.BorderRadius;
  rounded: CSS.Property.BorderRadius;
  borderTop: CSS.Property.BorderTop;
  borderRight: CSS.Property.BorderRight;
  borderBottom: CSS.Property.BorderBottom;
  borderLeft: CSS.Property.BorderLeft;
  borderX: CSS.Property.Border;
  borderY: CSS.Property.Border;
  borderTopRightRadius: CSS.Property.BorderTopRightRadius;
  borderBottomRightRadius: CSS.Property.BorderBottomRightRadius;
  borderBottomLeftRadius: CSS.Property.BorderBottomLeftRadius;
  borderTopLeftRadius: CSS.Property.BorderTopLeftRadius;
};

export const borderMixin = css<Partial<BorderProps>>`
  ${({ border }) => border != null && `border: ${border};`}
  ${({ borderWidth }) => borderWidth != null && `border-width: ${borderWidth};`}
  ${({ borderStyle }) => borderStyle != null && `border-style: ${borderStyle};`}
  ${({ borderColor }) => borderColor != null && `border-color: ${borderColor};`}
  ${({ borderRadius }) => borderRadius != null && `border-raduis: ${borderRadius};`}
  ${({ rounded }) => rounded != null && `border-raduis: ${rounded};`}
  ${({ borderTop }) => borderTop != null && `border-top: ${borderTop};`}
  ${({ borderRight }) => borderRight != null && `border-right: ${borderRight};`}
  ${({ borderBottom }) => borderBottom != null && `border-bottom: ${borderBottom};`}
  ${({ borderLeft }) => borderLeft != null && `border-left: ${borderLeft};`}
  ${({ borderX }) => borderX != null && `border-top: ${borderX}; border-bottom: ${borderX};`}
  ${({ borderY }) => borderY != null && `border-left: ${borderY}; border-right: ${borderY};`}
  ${({ borderTopRightRadius }) =>
    borderTopRightRadius != null && `border-top-right-raduis: ${borderTopRightRadius};`}
  ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius != null && `border-bottom-right-radius: ${borderBottomRightRadius};`}
  ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius != null && `border-bottom-left-raduis: ${borderBottomLeftRadius};`}
  ${({ borderTopLeftRadius }) =>
    borderTopLeftRadius != null && `border-top-left-raduis: ${borderTopLeftRadius};`}
`;
