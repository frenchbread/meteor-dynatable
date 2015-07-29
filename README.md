# Meteor Dynatable

[Dynatable](http://www.dynatable.com/) is a funner, semantic, interactive table plugin using jQuery, HTML5, and JSON. And it's not just for tables.

## Installation

```
meteor add frenchbread:dynatable
```

## Usage

Html:

```html
<table id="my-ajax-table">
    <thead>
        <th>Some Attribute</th>
        <th>Some Other Attribute</th>
    </thead>
    <tbody>
    </tbody>
</table>
```
    
JavaScript:

```javascript
$('#my-ajax-table').dynatable({
    dataset: {
        ajax: true,
        ajaxUrl: '/dynatable-ajax.json',
        ajaxOnLoad: true,
        records: []
    }
});
```


## Docs

[Official documentation](http://www.dynatable.com/)

## License

GNU AGPL