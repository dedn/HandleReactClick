import React from 'react'

const ComponentSecond = (props) => {
    let {isAdded, handleCreate} = props;
    const result = () => {
        alert('work')
        console.log('work')
    }

    React.useEffect(() => {
        if (isAdded) {
            result()
            handleCreate(false);
        }
    }, [isAdded, handleCreate]);

    return (
        <></>
    )
}

export default ComponentSecond;