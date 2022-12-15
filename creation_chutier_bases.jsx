
var foldersBin = [
    {name: 'Séquences'},
    {name: 'Rush'},
    {name: 'Rush depuis DVR'},
    {
        name: '3 Elements',
        children: [
            {name: '1 Videos'},
            {
                name: '2 Audios',
                children: [
                    {name: '1 Musiques'},
                    {name: '2 Voix off'},
                    {name: '3 FX'}
                ]
            },
            {name: '3 Images'},
        ]
    }
];

function creationChutier(root, children) {
    for(var i = 0; i < children.length; i++) {
        var parent = root.createBin(children[i].name);
        if (children[i].children) {
            creationChutier(parent, children[i].children);
        }
    }
}

creationChutier(app.project.rootItem, foldersBin);