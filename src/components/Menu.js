import styled from "styled-components"
import { bool, func } from 'prop-types';

const Burger = styled.div`
    display: none;

@media screen and (max-width: 500px) {
    font-size: 30px;
    display: block;
    color: ${props => props.open ? "white" : "var(--main-color)"};
    position: ${props => props.open ? "fixed" : "absolute"};
    right: 20px;
    top: 15px;
    z-index: 20;
}
`

export default function Menu({ open, setOpen }) {
    return (
        <>
            <Burger open={open} onClick={() => setOpen(!open)}>{open ? <i class="fa-solid fa-x"></i> : <i class="fa-solid fa-bars"></i>}</Burger>
        </>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};
