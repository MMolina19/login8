var editor; // use a global for the submit and return data rendering in the examples

$(document).ready(function() {
    editor = new $.fn.dataTable.Editor( {
        ajax: "./productos",
        table: "#productos",
        fields: [ {
                label: "Nombre:",
                name: "nombre"
            }, {
                label: "Creado:",
                name: "creado"
            }, {
                label: "Modificado:",
                name: "modificado"
            },
        ]
    } );

    // Activate an inline edit on click of a table cell
    $('#productos').on( 'click', 'tbody td:not(:first-child)', function (e) {
        editor.inline( this );
    } );

    $('#productos').DataTable( {
        dom: "Bfrtip",
        ajax: "productos/",
        order: [[ 1, 'asc' ]],
        columns: [
            {
                data: null,
                defaultContent: '',
                className: 'select-checkbox',
                orderable: false
            },
            { data: "nombre" },
            { data: "creado" },
            { data: "modificado" },
        ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ]
    } );
} );
