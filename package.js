Package.describe({
    name: 'frenchbread:dynatable',
    version: '0.1.0',
    // Brief, one-line summary of the package.
    summary: 'JQuery datatable plugin for meteor with sorting, search and pagination.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/frenchbread/meteor-dynatable.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.use('jquery', 'client');
    api.addFiles('client/lib/jquery.dynatable.js', 'client');
    api.addFiles('client/lib/jquery.dynatable.css', 'client');
});


