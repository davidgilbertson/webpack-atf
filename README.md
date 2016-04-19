# webpack-atf
Experiment to define above/below the fold CSS per-component.

## Notes
Instead of `require()`ing `.scss` files, I want to be able to
`requireAboveTheFoldCss` or `requireBelowTheFoldCss` and then
have those split into two different files on build

Then when serving the page, the ATF CSS is put in a `<style>` tag in `<head>`
and the BTF content is loaded async as a CSS file.
```javascript
<script>
    var loadCss = function() {
        var l = document.createElement('link');
        l.rel = 'stylesheet';
        l.href = 'main.css';
        var h = document.getElementsByTagName('head')[0];
        h.parentNode.insertBefore(l, h);
    };
    if (requestAnimationFrame) {
        requestAnimationFrame(loadCss);
    } else {
        window.addEventListener('load', loadCss)
    };
</script>
```
Source: https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery#overview
