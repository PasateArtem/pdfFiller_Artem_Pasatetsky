import React from "react";
import PropsTypes from 'prop-types';
import classNames from 'classnames';



import './document-list.scss';



const DocumentList = ({
    children, className, tag: Tag, ...attrs
}) => {

    const classes = classNames(
        'document__list',
        className
    );

    return (
        <Tag className={classes} {...attrs}>
            {children}
        </Tag>
    );

};


DocumentList.PropsTypes = {
    children: PropsTypes.node,
    className: PropsTypes.string,
    tag: PropsTypes.oneOfType([
        PropsTypes.func,
        PropsTypes.string
    ]),
};

DocumentList.defaultProps = {
    children: 'null',
    className: '',
    tag: 'ul',
};

export default DocumentList;