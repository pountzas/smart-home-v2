
function AnimationArrowsIcon({ color1 = '#0094ff', color2 = '#0094ff' }) {

  return (
    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 21L1.0718 9L14.9282 9L8 21Z" fill={color1} />
      <path d="M8 16L1.0718 4L14.9282 4L8 16Z" fill={color2} />
    </svg>
  )
}

export default AnimationArrowsIcon