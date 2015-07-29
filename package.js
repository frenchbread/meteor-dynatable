Package.describe({
    name: 'frenchbread:dynatable',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Jquery datatable plugin for meteor with sorting, search and pagination.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/frenchbread/meteor-dynatable.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.addFiles('lib/jquery.dynatable.js');
    api.addFiles('lib/jquery.dynatable.css');
});
