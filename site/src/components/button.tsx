import { styled } from '@/stitches.config'

export const Button = styled('button', {
  borderRadius: '$sizes$50',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$sizes$100',

  padding: '$sizes$100 $sizes$200',

  fontWeight: 'bold',
  cursor: 'pointer',

  variants: {
    variant: {
      default: {
        background: '$grayDarkest',
        border: '1px solid $grayLighter',
      },
      outlined: {
        background: '$grayDarkest',
        border: '2px solid $grayLightest',

        '&:hover, &:focus': {
          borderColor: 'blueviolet',
        },
      },
      link: {
        padding: 0,
        textDecoration: 'underline',
      },
    },
  },
})
