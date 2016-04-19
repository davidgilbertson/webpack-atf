
global.defineAboveTheFoldCss = (path) => {
    console.log('  --  >  build.js:9 > defineAboveTheFoldCss > path:', path);
    require(path);
};
global.defineBelowTheFoldCss = (path) => {
    console.log('  --  >  build.js:12 > defineBelowTheFoldCss > path:', path);
    require(path);
};
