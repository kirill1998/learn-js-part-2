var table = document.getElementById('grid')


table.onclick = function(event) {
    var target = event.target;


    if (target.tagName == "th") {
        sort(target.cellIndex, target.getAttribute("data-type"));

    }
}
sort = function(index, type) {
    var tbody = table.tBodies[0];
    var rows = [].slice.call(table.tBodies[0].rows);

    if (type == "number") {
        rows.sort(function(a, b) {
            return a.cells[index].innerHTML - b.cells[index].innerHTML;
        });

    }
    if (type == "string") {
        rows.sort(function(a, b) {
            return a.cells[index].innerHTML > b.cells[index].innerHTML;

        });
    }
    table.removeChild(tbody);
    for (var i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }
    table.appendChild(tbody);
}