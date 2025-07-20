import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('custom/my-block', {
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
    edit({ attributes, setAttributes }) {
        return (
            <RichText
                tagName="p"
                className="my-custom-block"
                value={attributes.content}
                onChange={(content) => setAttributes({ content })}
                placeholder="Write your content here..."
            />
        );
    },
    save({ attributes }) {
        return <p className="my-custom-block">{attributes.content}</p>;
    }
});
