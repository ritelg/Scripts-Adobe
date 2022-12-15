
var foldersBin = [
    {name: 'Séquences'},
    {name: 'Rush'},
    {name: 'Rush depuis DVR'},
    {
        name: 'Éléments',
        children: [
            {name: 'Vidéos'},
            {
                name: 'Audios',
                children: [
                    {name: 'Musiques'},
                    {name: 'Voix off'},
                    {name: 'Bruitages'}
                ]
            },
            {name: 'Images'},
            {name: 'FX'},
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