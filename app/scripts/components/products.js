import React from 'react';

function ListItem(props) {
    const { product: { name, about, picture } } = props;
    const image = <img src={picture} title={name} />
    return (<li>
        {image}
        <h3>{name}</h3>
        <p>{about}</p>
    </li>);
}

function ProductList(props) {
    const items = props.items || [];
    if (!items.length) {
        return null;
    }
    console.log('Items:', items)
    const listItems = items.map((item) =>
        <ListItem key={item['_id']} product={item} />
    );
    return (
        <div className='product-list'>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default ProductList;