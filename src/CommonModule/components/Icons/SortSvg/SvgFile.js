import * as React from 'react'

function SvgComponent(props) {
   return (
      <svg width={16} height={16} fill='none' viewBox='0 0 16 16' {...props}>
         <path
            fill='#171F46'
            fillRule='evenodd'
            d='M1 3a1 1 0 011-1h12a1 1 0 010 2H2a1 1 0 01-1-1zm3 5a1 1 0 011-1h9a1 1 0 010 2H5a1 1 0 01-1-1zm4 4a1 1 0 000 2h6a1 1 0 000-2H8z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export default SvgComponent
