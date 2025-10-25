export const breakpoints = useBreakpoints({
  mobile: 0,
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
})

export const isMobile = breakpoints.isSmaller('tablet');