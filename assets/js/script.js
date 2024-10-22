// Strech Image 
function gm_stretch() {
    var windowWidth = window.innerWidth;
    
    document.querySelectorAll(".row .gm_stretch-element-inside-column").forEach(function (element) {
        var row = element.closest(".row");
        var cols = element.closest('[class^="col-"]');
        var colsHeight = cols.offsetHeight;

        var rect = element.getBoundingClientRect();
        var rowRect = row.getBoundingClientRect();
        var colsRect = cols.getBoundingClientRect();

        var elementLeft = rect.left;
        var elementRight = rect.right;
        var rowLeft = rowRect.left + (parseFloat(getComputedStyle(row).paddingLeft) || 0);
        var rowRight = windowWidth - rowRect.right + (parseFloat(getComputedStyle(row).paddingRight) || 0);

        var colsLeft = colsRect.left;
        var colsRight = windowWidth - colsRect.right;

        var styles = {
            "marginLeft": "0px",
            "marginRight": "0px"
        };

        if (Math.round(rowLeft) === Math.round(colsLeft)) {
            var marginLeft = parseFloat(getComputedStyle(element).marginLeft) || 0;
            styles.marginLeft = (marginLeft - elementLeft) + "px";
        }
        
        if (Math.round(rowRight) === Math.round(colsRight)) {
            var marginRight = parseFloat(getComputedStyle(element).marginRight) || 0;
            styles.marginRight = (marginRight - (windowWidth - elementRight)) + "px";
        }

        Object.assign(element.style, styles);
    });
}

gm_stretch();