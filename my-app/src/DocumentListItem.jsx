import React from "react";
import PropsTypes from 'prop-types';
import classNames from 'classnames';



import './document-list.scss';




const DocumentListItem = ({
    children, className, tag: Tag, ...attrs
}) => {

    const classes = classNames(
        'document__list-item',
        className
    );

    return (
        <Tag className={classes} {...attrs}>
            {children}
        </Tag>
    );

};


DocumentListItem.PropsTypes = {
    children: PropsTypes.node,
    className: PropsTypes.string,
    tag: PropsTypes.oneOfType([
        PropsTypes.func,
        PropsTypes.string
    ]),
};

DocumentListItem.defaultProps = {
    children: 'null',
    className: '',
    tag: 'li',
};

export default DocumentListItem;