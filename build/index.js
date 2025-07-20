(function(blocks, editor, element) {
    var el = element.createElement;
    var RichText = editor.RichText;

    blocks.registerBlockType('custom/my-block', {
        title: 'My Custom Block',
        icon: 'smiley',
        category: 'widgets',
        attributes: {
            content: {
                type: 'string',
                source: 'html',
                selector: 'p'
            }
        },
        edit: function(props) {
            return el(
                RichText,
                {
                    tagName: 'p',
                    className: props.className,
                    value: props.attributes.content,
                    onChange: function(content) {
                        props.setAttributes({ content: content });
                    },
                    placeholder: 'Write your content here...'
                }
            );
        },
        save: function(props) {
            return el(RichText.Content, {
                tagName: 'p',
                value: props.attributes.content
            });
        }
    });
})(
    window.wp.blocks,
    window.wp.blockEditor || window.wp.editor,
    window.wp.element
);
