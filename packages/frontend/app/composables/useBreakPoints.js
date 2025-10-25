"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMobile = exports.breakpoints = void 0;
exports.breakpoints = useBreakpoints({
    mobile: 0,
    tablet: 640,
    laptop: 1024,
    desktop: 1280,
});
exports.isMobile = exports.breakpoints.isSmaller('tablet');
