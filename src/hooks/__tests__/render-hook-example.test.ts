import { renderHook } from '@testing-library/react'
import React, { useState } from 'react';

test('render hook example', () => {

    const { result } = renderHook(() => {
        const [name, setName] = useState('')
        React.useEffect(() => {
            setName('Alice')
        }, [])

        return name
    })

    expect(result.current)
        .toBe('Alice')

});
