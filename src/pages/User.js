import React from 'react'
import { useStateValue } from '../Context';
import { SubmitButton } from '../components/SubmitButton'

export default () => {
    const [{ }, dispatch] = useStateValue();

    return <React.Fragment>
        <h1>User</h1>
        <SubmitButton onClick={() => dispatch({ type: "logout" })}>Cerrar Sesión</SubmitButton>
    </React.Fragment>
}
