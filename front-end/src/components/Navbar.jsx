import React from 'react'
import Container from './useableComponents/Container'

const Nav = ({ hiddenMenu, setHiddenMenu, itemCount }) => {
    return (
        <nav>
            <Container>
                  <h2>HORTIFRUTI</h2>
                  <div className="menuWrapper" onClick={() => setHiddenMenu(!hiddenMenu)}>    
                    <i className="fas fa-shopping-cart fa-2x">
                      <span> CARRINHO ({itemCount > 0 && itemCount}) </span>
                    </i>
                  </div>              
            </Container>
        </nav>

    )
}

export default Nav